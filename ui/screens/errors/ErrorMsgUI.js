
import React from 'react'
import { Icon } from "@rneui/base"
import { View , StyleSheet 
  , KeyboardAvoidingView , Text,
   Dimensions} from "react-native"
import { colorPalette } from "../../styles/colors"
import { Theme } from "../../styles/Theme"
import { CONSTANTS } from "../../../config"

  const ErrorMsgUI = ({
   
  
    props}) => {

  return (
    <KeyboardAvoidingView>
    <View style={styles.global}>
      <View style={styles.icon}>
        <Icon name='error' size={96} color={colorPalette.Orange}></Icon>
      </View>
      <Text
            h4
            h4Style={{textAlign:'center'}}
            style={styles.text}>
            {CONSTANTS.SCREEN_TEXTS.DELETE_ACCOUNT_INTRO_MSG}
        </Text>
    
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
  icon : {
    marginBottom : Dimensions.get("window").height*0.1,
    marginTop:Dimensions.get("window").height*0.2,
  },
  text :  {
    marginBottom :  Dimensions.get("window").height*0.1,
     fontSize : Theme.font.MEDIUM
    },
 });

 export {ErrorMsgUI}