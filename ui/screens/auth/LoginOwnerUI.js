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
  emailError = '',
  passwordError = '',
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
      <Logo
        width={Dimensions.get('window').height*0.15} 
        height={Dimensions.get('window').height*0.1}
        ></Logo>
        <View style = {styles.logInContainer}>
            <View style = {styles.logInContainerTwo}>
            <View height={Dimensions.get("window").width*0.08}></View>
            <InputText
              defaultValue = {email}
              color = {colorPalette.Orange} 
              placeholder = {CONSTANTS.SCREEN_TEXTS.EMAIL_INPUT_LABEL}
              placeholderTextColor ={colorPalette.White}
              height = {Dimensions.get('window').height*0.02}
              onChangeText={onEmailHandler}
              errorMessage={emailError}
            >
            </InputText>
            <InputText 
              defaultValue = {password}
              color = {colorPalette.Orange} 
              placeholder = {CONSTANTS.SCREEN_TEXTS.PASS_INPUT_LABEL}
              placeholderTextColor ={colorPalette.White}
              secureTextEntry = {true}
              onChangeText = {onPassHandler}
              errorMessage = {passwordError}
              height = {Dimensions.get('window').height*0.02}
              
              >
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
    height : Dimensions.get("window").width*0.08,
  },
  logInContainer : {
 
    width : Dimensions.get("window").width*0.97,
    height:Dimensions.get("window").height*0.2,
     
      marginTop : Dimensions.get("window").height*0.05,
      marginBottom : Dimensions.get("window").height*0.1,
     
  },
  logInContainerTwo : {
    flexDirection : "column" ,
    borderRadius : Theme.sizes.ROUNDED,
    backgroundColor : colorPalette.Cream,

  },
  word : {
    color : colorPalette.Orange,
    marginTop : Dimensions.get("window").height*0.01,
     fontSize : Theme.font.SMALL
    },
   
});
