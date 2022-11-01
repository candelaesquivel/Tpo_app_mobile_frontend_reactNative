import I18n from "../../assets/localization/I18n"
import { View , StyleSheet, Dimensions , KeyboardAvoidingView} from "react-native"
import { colorPalette } from "../styles/colors"
import { MyButton } from "../components/button"
import { InputText } from "../components/InputText"
import { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import createAccountOwner from "../../networking/createAccount";
import { ROUTES } from '..';
import { Theme } from "../styles/Theme"

export function CreateAccountOwnerScreen({navigation, props}) {

    const [userData, setUserData] = useState({
      email : '',
      password : '',
      repeatPassword : ''
    })

    const onRegisterPress = async (e) => {
      const result = await createAccountOwner(userData);
      console.log("Result Register: ", result);

      if (result)
        navigation.navigate(ROUTES.OWNER_HOME);
    }

    const onEmailChange = ({ nativeEvent: { eventCount, target, text} }) => {
      setUserData({...userData, 'email' : text})
    }

    const onPassChange = ({nativeEvent : {eventCount, target, text}}) => {
      setUserData({...userData, 'password' : text})
    }

    const onRepeatPassChange = ({nativeEvent : {eventCount, target, text}}) => {
      setUserData({...userData, 'repeatPassword' : text})
    }

    return (
        <View style={styles.global}>
          <View style={styles.icon}>
            <Icon name='account-circle' size={96} color={colorPalette.Orange} />
          </View>
          <KeyboardAvoidingView>
          <View style={styles.input}>
              <View style={styles.inputTwo}>
                <InputText 
                placeholder = {I18n.t('emailInput')} 
                placeholderTextColor ={colorPalette.White}
                color={colorPalette.Orange} name = 'email'
                onChange = {onEmailChange}></InputText>

                <InputText s
                ecureTextEntry = {true} 
                placeholder = {I18n.t('passInput')} 
                placeholderTextColor ={colorPalette.White}
                color={colorPalette.Orange} 
                name='password' 
                onChange = {onPassChange}></InputText>

                <InputText
                secureTextEntry = {true} 
                placeholder = {I18n.t('validPassInput')}
                placeholderTextColor ={colorPalette.White}
                color={colorPalette.Orange} 
                name='repeatPassword' 
                onChange = {onRepeatPassChange}></InputText>
              </View>
             
          </View>
          </KeyboardAvoidingView>
       
            <View style={{width : '100%', height : '5%', backgroundColor : colorPalette.White}}></View>
            <MyButton
             title = {I18n.t('createAccount')} 
             onPress = {onRegisterPress}
             width={Dimensions.get("window").width*0.6}
             height={Dimensions.get("window").height*0.07}
             ></MyButton>
        </View>
    )

}

export default CreateAccountOwnerScreen;

const styles = StyleSheet.create({
  global:{
    flexDirection : 'column', 
    width : Dimensions.get("window").width,
    height:Dimensions.get("window").height,
    alignItems : 'center',
    backgroundColor : colorPalette.White
  },
  icon : {
    width : '100%', 
    marginTop :"20%",
    marginBottom : "7%",
    backgroundColor : colorPalette.White,
    alignItems : "center"
    },
    input : { 
      justifyContent : 'space-evenly',
      width : Dimensions.get("window").width*0.9,
      height:Dimensions.get("window").height*0.3,
       backgroundColor : colorPalette.LightOrange, 
      borderRadius : Theme.sizes.ROUNDED
  },
  inputTwo :{
    flexDirection :"column",
    marginTop :"9%"
  }

});
