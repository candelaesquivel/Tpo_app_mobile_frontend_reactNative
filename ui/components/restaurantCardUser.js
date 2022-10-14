import React from 'react';
import { View } from 'react-native';
import { Text, Card, Icon } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import Images from '../../assets/images/index';


export default function RestaurantCardUser(props) {

  const FavoriteIcon = (props) => {

    if (props.isFavorite)
      return <Icon onPress={props.onPress}  name="favorite" color="red"  marginBottom={7}></Icon >;
    else
      return <Icon onPress={props.onPress} name="favorite-border" color={colorPalette.Black}  marginBottom={7}></Icon >
  }

  return (
    <View  style={{alignItems : 'center' , width: '100%' }}>
    <Card style ={{width : '40%'}}>
      <View style={{flexDirection: 'row', justifyContent : 'space-between'}}>
      {/* Acomodar Tamano de Imagen  */}
      <Images.logo width='10%' height={100}></Images.logo>
       <View width={200}  style={{justifyContent : 'space-evenly', marginLeft:10}} >
         <Text h4 onPress={props.onRestaurantNameTouched}>{props.name}</Text>
         <Text>{props.address}</Text>
         <View style={{flexDirection: 'row',alignItems: 'center'}}>
            <Text marginBottom={30}>{props.score} </Text>
            <Icon  name="star" color={colorPalette.Orange} size={20}></Icon>
         </View>
       
       </View>
       <View  style= {{flexDirection:'column-reverse'}}>
        <FavoriteIcon isFavorite = {props.favorite} onPress={props.onFavoriteTouched}></FavoriteIcon>
       </View>
      
      </View>
         </Card>
   
     
 </View>
  )
}

