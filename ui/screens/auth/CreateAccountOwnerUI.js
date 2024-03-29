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
emailError = '',
passwordError =  '',
repeatPasswordError = '',
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
                <View height={Dimensions.get("window").width*0.08}></View>
                <InputText
                errorMessage = {emailError}
                defaultValue={email}
                placeholder = {CONSTANTS.SCREEN_TEXTS.EMAIL_INPUT_LABEL} 
                placeholderTextColor ={colorPalette.White}
                color={colorPalette.Orange} name = 'email'
                onChangeText = {onEmailHandler}
                onChange = {onEmailHandler}>

                </InputText>

                <InputText
                errorMessage={passwordError}
                defaultValue={password}
                secureTextEntry = {true} 
                placeholder = {CONSTANTS.SCREEN_TEXTS.PASS_INPUT_LABEL} 
                placeholderTextColor ={colorPalette.White}
                color={colorPalette.Orange} 
                name='password' 
                onChangeText = {onPasswordHandler}></InputText>

                <InputText
                errorMessage={repeatPasswordError}
                defaultValue={repeatPassword}
                secureTextEntry = {true} 
                placeholder = {CONSTANTS.SCREEN_TEXTS.VALID_PASS_INPUT_LABEL}
                placeholderTextColor ={colorPalette.White}
                color={colorPalette.Orange} 
                name='repeatPassword' 
                onChangeText = {onRepeatPassHandler}></InputText>
              </View>
             
          </View>
          </KeyboardAvoidingView>
       
            <View style={{width : '100%', height : '5%', backgroundColor : colorPalette.White}}></View>
            <MyButton
             title = {CONSTANTS.SCREEN_TEXTS.CREATE_ACCOUNT_LABEL} 
             onPress = {onRegisterHandler}
             width={Dimensions.get("window").width*0.6}
             height={Dimensions.get("window").height*0.09}
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
    width : Dimensions.get("window").width, 
    marginTop :Dimensions.get("window").width*0.1,
    marginBottom : Dimensions.get("window").width*0.1,
    backgroundColor : colorPalette.White,
    alignItems : "center"
    },
    input : { 
      justifyContent : 'space-evenly',
      width : Dimensions.get("window").width*0.9,
      height:Dimensions.get("window").height*0.421,
       backgroundColor : colorPalette.White, 
     
  },
  inputTwo :{
    flexDirection :"column",
    backgroundColor : colorPalette.LightOrange,
    borderRadius : Theme.sizes.ROUNDED,
    
  }

});