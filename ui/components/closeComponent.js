import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import {  Switch } from '@rneui/base'
import I18n from '../../assets/localization/I18n'
import { Theme } from '../styles/Theme'
import { colorPalette } from '../styles/colors'

export default function closeComponent() {
  return (
    <View style={styles.global}>            
        <Text  style={styles.words} >
        {I18n.t('close')}   
        </Text>
         <Switch
         value={false}>
         </Switch>
                 
    </View>
  )
}

const styles = StyleSheet.create({

    words :{
      fontSize: Theme.font.MEDIUM,
      color: colorPalette.Black, 
     marginRight : "5%",

  },
  global :{
    flexDirection : "row",
     alignContent : "flex-start" ,
      marginBottom : "5%"
  }
})