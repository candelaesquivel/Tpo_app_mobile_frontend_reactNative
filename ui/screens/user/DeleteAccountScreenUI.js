import { View , StyleSheet , Dimensions , KeyboardAvoidingView} from "react-native";
import { colorPalette } from "../../styles/colors";
import { Text } from "@rneui/themed";
import { MyButton } from "../../components/button";
import { Icon } from "@rneui/themed";
import { InputText } from "../../components/InputText";
import { Theme } from "../../styles/Theme";
import { CONSTANTS } from "../../../config";


export const DeleteAccountScreenUI = ({
    email,
    password,
    emailError,
    onEmailChangeHandler,
    onPasswordChangeHandler,
    onDeletePressHandler,
    props}) => {
  
    return (
        <View  style={styles.global}>
        <View style={styles.containerWhite}>
            <Icon 
            name = 'admin-panel-settings' 
            size={96}
             color={colorPalette.Orange}
             marginTop={20}
             ></Icon>
        </View>
    
        <Text
            h4
            h4Style={{textAlign:'center'}}
            style={styles.message}>
            {CONSTANTS.SCREEN_TEXTS.DELETE_ACCOUNT_INTRO_MSG}
        </Text>
        <KeyboardAvoidingView>
            <View style = {styles.container}>
                <View style={styles.containerTwo}>
                    <InputText
                        placeholder = {CONSTANTS.SCREEN_TEXTS.EMAIL_INPUT_LABEL}
                        placeholderTextColor ={colorPalette.White}
                        color = {colorPalette.Orange}
                        defaultValue = {email}
                        errorMesssage = {emailError}
                        onChangeText = {onEmailChangeHandler}
                        >
                    </InputText>
                    <InputText 
                        placeholder ={CONSTANTS.SCREEN_TEXTS.PASS_INPUT_LABEL}
                        placeholderTextColor ={colorPalette.White}
                        color = {colorPalette.Orange}
                        secureTextEntry = {true}
                        defaultValue = {password}
                        onChangeText = {onPasswordChangeHandler}
                    ></InputText>
                </View>
            </View>
        </KeyboardAvoidingView>
        <View style={styles.button}>
            <MyButton
            onPress={onDeletePressHandler}
            title = {CONSTANTS.SCREEN_TEXTS.DELETE_LABEL}
            width={ Dimensions.get("window").width*0.6}
            height={Dimensions.get("window").height*0.07}
            ></MyButton>
        </View>
        
    </View>
    )
  }
  
  

  const styles = StyleSheet.create({
    global :{
        flexDirection : 'column', 
        alignItems : 'center', 
        backgroundColor : colorPalette.White,
        height :  Dimensions.get("window").height,
        width :  Dimensions.get("window").width
       },
    containerWhite : {
        width : '100%',
        height :  Dimensions.get("window").height*0.15,
        backgroundColor : colorPalette.White,
        marginBottom : "5%",
        marginTop : "20%"
    },
    message : {
    marginBottom : "5%",
     marginRight : 10
    },
    container : {
        justifyContent : 'space-evenly',
        height :  Dimensions.get("window").height*0.2,
        width :  Dimensions.get("window").width*0.9, 
        backgroundColor : colorPalette.LightOrange, 
        borderRadius : Theme.sizes.ROUNDED,
        
    },
    containerTwo : { 
        flexDirection : "column",
          marginTop : "7%"
        },
    button : {
        flexDirection :"column",
        justifyContent : "center",
        marginTop : "5%",
        backgroundColor : colorPalette.White,
       
      },
});