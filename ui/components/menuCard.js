import React from 'react';
import { View } from 'react-native';
import { Text, Card, Icon } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import I18n from "../../assets/localization/I18n";
import Images from '../../assets/images/index';


export default function MenuCard({name = '', discount = 10, price = 100, onPhotoPress={}, props}) {
  const priceDescount =(price)* ((100-discount)/100)
  return (
    <View style={{width: '100%'}}>
    <Card>
      <View style={{flexDirection: 'row', justifyContent : 'space-between', marginEnd:30}}>
      <Images.logo onPress={onPhotoPress} width={100} height={100} ></Images.logo>
       <View width={200}  style={{justifyContent : 'center'}} >
         <Text h4 >{name}</Text>
         <Text style={{color: colorPalette.Orange ,textDecorationLine: 'line-through' , fontSize: 18}}> {I18n.t('priceSymbol')}{price}</Text>
         <View style={{flexDirection: 'row',alignItems: 'center'}}>
            <Text style={{color: colorPalette.Black , fontSize: 18}} marginBottom={30}> {priceDescount} </Text>
            <Icon  name="local-offer" color={colorPalette.Orange} size={20}></Icon>
            <Text style={{color: colorPalette.Orange , fontSize: 15}} marginBottom={30}>%{10}</Text>
            
         </View>
         <View style={{flexDirection: 'row-reverse',alignItems: 'center'}} >
            <Icon name="leaf" type='font-awesome-5' color={colorPalette.Black} size={20}></Icon>
            <Icon name="leaf" type='font-awesome-5' color={colorPalette.Black} size={20}></Icon>
           
        </View>
       
       </View>
     
      
      </View>
         </Card>
   
     
 </View>
  )
}