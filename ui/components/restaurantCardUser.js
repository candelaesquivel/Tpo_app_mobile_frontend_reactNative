import React from 'react';
import { View } from 'react-native';
import { Text, Card, Icon } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import Images from '../../assets/images/index';


export default function RestaurantCardUser(props) {

  return (
    <View  style={{alignItems : 'center' , width: '100%' }}>
    <Card>
      <View style={{flexDirection: 'row', justifyContent : 'space-between'}}>
     <Images.logo width={100} height={100}></Images.logo>
       <View width={200}  style={{justifyContent : 'space-evenly', marginLeft:10}} >
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

