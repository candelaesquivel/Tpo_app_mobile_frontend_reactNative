import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import {Theme} from "../styles/Theme"
import {colorPalette} from "../styles/colors"
import { Logo } from "../components/Logo";
 
export default function EmptyScreenMessage(props) {
  return (
    <View style={styles.global}>
        <Text
        style={styles.title} >
        {props.message}
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
      height :  Dimensions.get('window').height,
      width : Dimensions.get('window').width,
      opacity: 0.35,
    },
  
    title : {
      marginTop : "30%",
      marginBottom : "10%",
      alignSelf : 'center',
      fontSize : Theme.font.LARGE,
      color : colorPalette.Black,
      },
      });
      