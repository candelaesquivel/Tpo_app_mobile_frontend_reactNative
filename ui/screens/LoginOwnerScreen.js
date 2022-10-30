import { useEffect, useState } from "react";
import I18n from "../../assets/localization/I18n";
import { View , StyleSheet , KeyboardAvoidingView , Dimensions} from "react-native";
import { Logo } from "../components/Logo";
import { colorPalette } from "../styles/colors";
import { MyButton } from "../components/button";
import { Text } from "@rneui/themed";
import { InputText } from "../components/InputText";
import loginOwner from "../../networking/loginOwner";
import { ROUTES } from "..";
import { useSelector, useDispatch } from 'react-redux'
import { Theme } from "../styles/Theme";

import {logoutUserAction, loginUserAction} from '../../redux/actions';

function LoginOwnerScreen({navigation, props}){

  const isLogged = useSelector((state) => {
    return state.session.isLogged
  });

  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email : '',
    password : '',
  })

  const onEmailChange = ({ nativeEvent: { eventCount, target, text} }) => {
    setUserData({...userData, 'email' : text})
  }

  const onPassChange = ({nativeEvent : {eventCount, target, text}}) => {
    setUserData({...userData, 'password' : text})
  }

    useEffect(() => {
        navigation.setOptions({
            title : I18n.t('logIn')
        })

        if (isLogged)
          navigation.navigate(ROUTES.OWNER_HOME);

    }, [navigation, isLogged])

    const onRecoverTouched = (event) => {
        navigation.navigate(ROUTES.FORGET_PASSWORD);
    }

    const onCreateTouched = (event) => {
        navigation.navigate(ROUTES.CREATE_ACCOUNT_OWNER);
    }

    const onLoginPressed = async (event) => {

        const loginRes = await loginOwner(userData);

        if (loginRes){
          dispatch(loginUserAction(loginRes))
        }else{
          dispatch(logoutUserAction());
        }

        return;
    }

    return (
        <View style={styles.global}>
           <KeyboardAvoidingView>
            <View style={styles.headerWhite}></View>           
              <Logo></Logo>  
                <View style = {styles.logInContainer}>
                    <View style = {styles.logInContainerTwo}>
                    <InputText 
                    color = {colorPalette.Orange} 
                    placeholder = {I18n.t('emailInput')}
                    placeholderTextColor ={colorPalette.White}
                    height = '50%' 
                    onChange={onEmailChange}
                    ></InputText>
                    <InputText 
                    color = {colorPalette.Orange} 
                    placeholder = {I18n.t('passInput')}
                    placeholderTextColor ={colorPalette.White}
                    secureTextEntry = {true}
                    onChange = {onPassChange}>
                    </InputText>
                    </View>
                </View>
                
                <MyButton 
                title = {I18n.t('logIn')} 
                onPress={onLoginPressed}
                ></MyButton>
              </KeyboardAvoidingView>
              <Text style={styles.word} onPress={onRecoverTouched}>{I18n.t('forgotPassword')}</Text>
              <Text style={styles.word} onPress={onCreateTouched}>{I18n.t('createAccount')}</Text>        
             
          </View>
    )
}

export default LoginOwnerScreen;

const styles = StyleSheet.create({
  global:{
    flexDirection : 'column', 
    width : Dimensions.get("window").width,
    height:Dimensions.get("window").height,
    alignItems : 'center',
    backgroundColor : colorPalette.White,
  },
  headerWhite : {
    height : "12%",
  },
  logInContainer : {
    width : Dimensions.get("window").width*0.9,
    height:Dimensions.get("window").height*0.2,
      borderRadius : Theme.sizes.ROUNDED,
      backgroundColor : colorPalette.LightOrange,
      marginTop : "5%",
      marginBottom : "5%",
     
  },
  logInContainerTwo : {
    flexDirection : "column" ,
    marginTop : "5%"
  },
  word : {
    color : colorPalette.Orange,
     marginTop : 15,
     fontSize : Theme.font.SMALL
    },
   
});

