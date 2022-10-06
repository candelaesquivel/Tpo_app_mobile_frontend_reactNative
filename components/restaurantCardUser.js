import React from 'react';
import { View, Image } from 'react-native';
import { Text, Card, Icon } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
export default function RestaurantCardUser(props) {

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
         <Text>{props.address}</Text>
         <View style={{flexDirection: 'row',alignItems: 'center'}}>
            <Text marginBottom={30}>{props.score} </Text>
            <Icon  name="star" color={colorPalette.Orange} size={20}></Icon>
         </View>
       
       </View>
       <View  style= {{flexDirection:'column-reverse'}}>
        {
            props.favorite ? <Icon  name="favorite" color="red"  marginBottom={7}></Icon >
            : <Icon  name="favorite-border" color={colorPalette.Black}  marginBottom={7}></Icon >
        }
       </View>
      
      </View>
         </Card>
   
     
 </View>
  )
}

