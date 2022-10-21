import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import I18n from "../../assets/localization/I18n";
import { colorPalette } from '../styles/colors';
import Images from '../../assets/images/index';


 function Mapa() {
  return (
    <View>
     <View style={{flexDirection : 'row', justifyContent: 'center'}}>
        <Icon  name="pin-outline" type='ionicon' color={colorPalette.Orange}></Icon>
        <Text>{I18n.t('address')}</Text>
      </View>
      <Icon name="navigate-circle-outline" type='ionicon' color={colorPalette.Orange} style={{marginTop : '5%'}}></Icon>
      <Images.logo width='100%' height={100} ></Images.logo> 
    </View>
  )
}

export default Mapa;