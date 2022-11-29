
import React from 'react'
import { Icon } from "@rneui/base"
import { View , StyleSheet , KeyboardAvoidingView } from "react-native"
import { colorPalette } from "../../styles/colors"
import { MyButton } from "../../components/button"
import { Dimensions} from "react-native"
import { InputText } from "../../components/InputText"
import { Theme } from "../../styles/Theme"
import { CONSTANTS } from "../../../config"

const RecoverPasswordTokenUI = ({
  token,
  password,
  tokenError = '',
  passwordError =  '',
  onTokenHandler,
  onPasswordHandler,
  
    props}) => {
  
    return (
        <KeyboardAvoidingView>
        <View style={styles.global}>
          <View style={styles.containerWhite}>
            <Icon name='security' size={96} color={colorPalette.Orange}></Icon>
          </View>
          
            <View style={styles.containerEmail}>
            <View style={styles.containerEmailTwo}>
            <View height={Dimensions.get("window").width*0.06}></View>
            <InputText 
               defaultValue={token}
              errorMessage = {tokenError}
              onChangeText = {onTokenHandler}
              color = {colorPalette.Orange} 
              placeholder = {CONSTANTS.SCREEN_TEXTS.TOKEN_INPUT}
              placeholderTextColor ={colorPalette.White}
              height = '50%' 
             
              ></InputText>
              <InputText 
              defaultValue={password}
              errorMessage = {passwordError}
              onChangeText = {onPasswordHandler}
              color = {colorPalette.Orange} 
              placeholder = {CONSTANTS.SCREEN_TEXTS.TOKEN_PASSWORD}
              placeholderTextColor ={colorPalette.White}
              height = '50%' 
              
              ></InputText>
            </View> 
            </View>
            <View style={styles.button}>
              <MyButton 
              title = {CONSTANTS.SCREEN_TEXTS.TOKEN_BUTTON} 
             // onPress = {onRecoveryHandler}
              width={ Dimensions.get("window").width*0.6}
              height={Dimensions.get("window").height*0.07}
              ></MyButton>
            </View>
          </View>
      </KeyboardAvoidingView>
    )
  }
  
  

  const styles = StyleSheet.create({
    global :{
     flexDirection : 'column', 
     alignItems : 'center', 
     backgroundColor : colorPalette.White,
     width : Dimensions.get("window").width,
       height:Dimensions.get("window").height,
    },
    containerWhite : {
      width : Dimensions.get("window").width,
      height : Dimensions.get("window").height*0.3,
      backgroundColor : colorPalette.White,
      marginTop : Dimensions.get("window").width*0.15
      
     },
     containerEmail : { 
        justifyContent : 'space-evenly',
        width : Dimensions.get("window").width*0.9,
        height:Dimensions.get("window").height*0.15,
       
       },
     containerEmailTwo : { 
       flexDirection : "column",
         marginTop : Dimensions.get("window").width*0.07,
         backgroundColor : colorPalette.Cream, 
         borderRadius : Theme.sizes.ROUNDED
       },
     button : {
       flexDirection :"column",
       justifyContent : "center",
       marginTop : Dimensions.get("window").width*0.2
     },
   });
  
  export {RecoverPasswordTokenUI}