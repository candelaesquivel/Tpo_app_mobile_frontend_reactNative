import { MyButton } from "../../components/button"
import { InputText } from "../../components/InputText";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View , StyleSheet, Dimensions , KeyboardAvoidingView} from "react-native"
import { Theme } from "../../styles/Theme";
import { colorPalette } from "../../styles/colors";
import { CONSTANTS } from "../../../config";

export const CreateAccountOwnerUI = ({
email,
password,
repeatPassword,
onEmailHandler,
onPasswordHandler,
onRepeatPassHandler,
onRegisterHandler,
props
}) => 
{
  return (
    <View style={styles.global}>
          <View style={styles.icon}>
            <Icon name='account-circle' size={96} color={colorPalette.Orange} />
          </View>
          <KeyboardAvoidingView>
          <View style={styles.input}>
              <View style={styles.inputTwo}>
                <InputText
                defaultValue={email}
                placeholder = {CONSTANTS.SCREEN_TEXTS.EMAIL_INPUT_LABEL} 
                placeholderTextColor ={colorPalette.White}
                color={colorPalette.Orange} name = 'email'
                onChange = {onEmailHandler}></InputText>

                <InputText
                defaultValue={password}
                secureTextEntry = {true} 
                placeholder = {CONSTANTS.SCREEN_TEXTS.PASS_INPUT_LABEL} 
                placeholderTextColor ={colorPalette.White}
                color={colorPalette.Orange} 
                name='password' 
                onChange = {onPasswordHandler}></InputText>

                <InputText
                defaultValue={repeatPassword}
                secureTextEntry = {true} 
                placeholder = {CONSTANTS.SCREEN_TEXTS.VALID_PASS_INPUT_LABEL}
                placeholderTextColor ={colorPalette.White}
                color={colorPalette.Orange} 
                name='repeatPassword' 
                onChange = {onRepeatPassHandler}></InputText>
              </View>
             
          </View>
          </KeyboardAvoidingView>
       
            <View style={{width : '100%', height : '5%', backgroundColor : colorPalette.White}}></View>
            <MyButton
             title = {CONSTANTS.SCREEN_TEXTS.CREATE_ACCOUNT_LABEL} 
             onPress = {onRegisterHandler}
             width={Dimensions.get("window").width*0.6}
             height={Dimensions.get("window").height*0.07}
             ></MyButton>
        </View>
  )
}

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