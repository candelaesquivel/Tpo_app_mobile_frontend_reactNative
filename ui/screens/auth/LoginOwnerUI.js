import { View , StyleSheet , KeyboardAvoidingView , Dimensions} from "react-native";
import { Logo } from "../../components/Logo";
import { colorPalette } from "../../styles/colors";
import { MyButton } from "../../components/button";
import { Text } from "@rneui/themed";
import { InputText } from "../../components/InputText";
import { Theme } from "../../styles/Theme";
import { CONSTANTS } from "../../../config";

export const LoginOwnerUI = ({
  email,
  password,
  onEmailHandler,
  onPassHandler,
  onLoginHandler,
  onRecoverLinkHandler,
  onCreateLinkHandler,
  props}) => 
{
  return (
    <View style={styles.global}>
      <KeyboardAvoidingView>
      <View style={styles.headerWhite}></View>           
        <Logo></Logo>
        <View style = {styles.logInContainer}>
            <View style = {styles.logInContainerTwo}>
            <InputText
              defaultValue = {email}
              color = {colorPalette.Orange} 
              placeholder = {CONSTANTS.SCREEN_TEXTS.EMAIL_INPUT_LABEL}
              placeholderTextColor ={colorPalette.White}
              height = '50%' 
              onChange={onEmailHandler}
            >
            </InputText>
            <InputText 
              defaultValue = {password}
              color = {colorPalette.Orange} 
              placeholder = {CONSTANTS.SCREEN_TEXTS.PASS_INPUT_LABEL}
              placeholderTextColor ={colorPalette.White}
              secureTextEntry = {true}
              onChange = {onPassHandler}>
            </InputText>
            </View>
        </View>
          
        <MyButton 
          title = {CONSTANTS.SCREEN_TEXTS.LOGIN_LABEL} 
          onPress={onLoginHandler}
        >
        </MyButton>
        </KeyboardAvoidingView>
        
        <Text style={styles.word} onPress={onRecoverLinkHandler}>{CONSTANTS.SCREEN_TEXTS.FORGOT_PASSWORD_LABEL}</Text>
        <Text style={styles.word} onPress={onCreateLinkHandler}>{CONSTANTS.SCREEN_TEXTS.CREATE_ACCOUNT_LABEL}</Text>        
        
    </View>
  )
}

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
