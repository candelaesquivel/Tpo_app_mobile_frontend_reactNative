import React from 'react';
import { View, Image } from 'react-native';
import { Text, Card, AirbnbRating } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import I18n from "../../assets/localization/I18n";



export default function Comment(props) {

  return (
    <View  >
      
    <Card  containerStyle={{backgroundColor : colorPalette.Cream , alignItems: 'center'}}>
      <View style={{flexDirection: 'row', justifyContent : 'space-between'}}>
       <View  style={{alignItems: 'center'}} >
         <Text h4 style={{color: colorPalette.Black}}>{props.userName }</Text>
         <Text>{props.comment}</Text>
         <Text>{I18n.t('vegan')}</Text>
         <AirbnbRating 
                defaultRating={props.score}
                reviews = {[]}
                size = {20}
                selectedColor = {colorPalette.Orange}
            ></AirbnbRating> 
       </View>
      
      </View>
         </Card>
   
     
 </View>
  )
}

