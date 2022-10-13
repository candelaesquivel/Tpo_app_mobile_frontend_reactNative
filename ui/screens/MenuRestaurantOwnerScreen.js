import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import I18n from "../../assets/localization/I18n";
import { Icon } from "@rneui/themed";
import { colorPalette } from '../styles/colors';
import MenuCard from '../components/menuCard';

export default function MenuRestaurantOwnerScreen({navigation,props}) {

    useEffect(() => {
      navigation.setOptions({
          title : I18n.t('menuRestaurant')
      })
  })


  return (
    <View style={{alignItems:'center'}}>
      
     <Text style={{color: colorPalette.Black , fontSize: 18 ,marginTop :10, fontWeight: 'bold'}}>Category</Text>
      <MenuCard
            name='camarones'
            price={110}
            discount={110}>
            </MenuCard>
           
            <Icon size={50} color={colorPalette.Black} name='pluscircle' type='antdesign' 
            containerStyle={{position: 'fixed', bottom: -565, left: 170}}></Icon>
    </View>
  )
}