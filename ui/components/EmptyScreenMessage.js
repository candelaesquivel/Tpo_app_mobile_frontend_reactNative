import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import {Theme} from "../styles/Theme"
import {colorPalette} from "../styles/colors"
import { Logo } from "../components/Logo";
 
export default function EmptyScreenMessage({
  message
}) {
  return (
    <View style={styles.global}>
        <Text
        style={styles.title} >
        {message}
        </Text>
        <Logo 
        width={Dimensions.get('window').width*0.3} 
        height={Dimensions.get('window').width*0.3}
        >
        </Logo>
   </View>
  )
}

const styles = StyleSheet.create({
    global: {
      opacity: 0.35,
    },
  
  title : {
    marginTop : Dimensions.get('window').width*0.1,
    marginBottom :Dimensions.get('window').width*0.1,
    alignSelf : 'center',
    fontSize : Theme.font.LARGE,
    color : colorPalette.Black,
    },
});
      