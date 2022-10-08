import React from 'react';
import { View, Image } from 'react-native';
import { Text, Card, Icon } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import I18n from "../../assets/localization/I18n";


export default function MenuCard(props) {
    const priceDescount =(props.price)* ((100-props.discount)/100)
  return (
    <View >
    <Card>
      <View style={{flexDirection: 'row', justifyContent : 'space-between'}}>
      <Image
        style={{height:100, width:100, resizeMode:'stretch'}}
         source={require('../assets/logo.png')}
       >
       </Image>
       <View width={200}  style={{justifyContent : 'space-evenly'}} >
         <Text h4 >{props.name}</Text>
         <Text style={{color: colorPalette.Orange ,textDecorationLine: 'line-through' , fontSize: 18}}> {I18n.t('priceSymbol')}{props.price}</Text>
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