import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import I18n from "../../assets/localization/I18n";
import { colorPalette } from '../styles/colors';
import Images from '../../assets/images/index';
import { Theme } from '../styles/Theme';
import {CONSTANTS} from '../../config';

 function Mapa() {
  return (
    <View>
     <View style={{flexDirection : 'row', justifyContent: 'center'}}>
        <Icon  name="pin-outline" type='ionicon' color={colorPalette.Orange}></Icon>
        <Text style={styles.words}>{CONSTANTS.SCREEN_TEXTS.ADDRESS_LABEL}</Text>
      </View>
      <Icon name="navigate-circle-outline" type='ionicon' color={colorPalette.Orange} style={{marginTop : '5%'}}></Icon>
      <Images.logo width='100%' height={100} ></Images.logo> 
    </View>
  )
}

export default Mapa;


const styles = StyleSheet.create({
  words :{
    fontSize: Theme.font.MEDIUM,
    color: colorPalette.Black, 
    marginLeft : "4%" , 
    marginBottom : "3%"
},})