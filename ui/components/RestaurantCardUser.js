import React from 'react';
import { View } from 'react-native';
import { Text, Card, Icon } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import Images from '../../assets/images/index';
import { useDispatch, useSelector } from 'react-redux';
import {unselectRestaurantAction} from '../../redux/actions';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '..';
import toggleRestaurantFavorite from '../../networking/toggleRestaurantFavorite';

function RestaurantCardUser({name ='Rodizio',address='',score= 0, favorite=true,
restaurantId = '', onRestaurantNameTouched={},onPhotoPress={}, props}) {


  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userId = useSelector(state => state.session.userId);

  const onFavoriteTouched = async (event) => {
    const res = await toggleRestaurantFavorite(userId, restaurantId);
    navigation.navigate(ROUTES.FAVORITE_RESTAURANTS_DRAWER);
  }

  const FavoriteIcon = ({props}) => {

    if (favorite)
      return <Icon onPress={onFavoriteTouched}  name="favorite" color="red"  marginBottom={7}></Icon >;
    else
      return <Icon onPress={onFavoriteTouched} name="favorite-border" color={colorPalette.Black}  marginBottom={7}></Icon >
  }

  return (
    <View  style={{alignItems : 'center' , width: '100%' }}>
    <Card style ={{width : '40%'}}>
      <View style={{flexDirection: 'row', justifyContent : 'space-between'}}>
      {/* Acomodar Tamano de Imagen  */}
      <Images.logo width='10%' height={100} onPress={onPhotoPress}></Images.logo>
       <View width={200}  style={{justifyContent : 'space-evenly', marginLeft:10}} >
         <Text h4 onPress={onRestaurantNameTouched}>{name}</Text>
         <Text>{address}</Text>
         <View style={{flexDirection: 'row',alignItems: 'center'}}>
            <Text marginBottom={30}>{score} </Text>
            <Icon  name="star" color={colorPalette.Orange} size={20}></Icon>
         </View>
       
       </View>
       <View  style= {{flexDirection:'column-reverse'}}>
        <FavoriteIcon isFavorite></FavoriteIcon>
       </View>
      
      </View>
         </Card>
   
     
 </View>
  )
}

export default RestaurantCardUser;

