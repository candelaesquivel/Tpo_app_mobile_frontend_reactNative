import React from 'react';
import { View , StyleSheet , Dimensions} from 'react-native';
import { Text, Card, Icon } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import Images from '../../assets/images/index';
import { useDispatch, useSelector } from 'react-redux';
import {unselectRestaurantAction} from '../../redux/actions';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '..';
import toggleRestaurantFavorite from '../../networking/toggleRestaurantFavorite';

function RestaurantCardUser({name ='Rodizio',address='',score= 0, favorite=true,
restaurantId = '', props}) {


  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userId = useSelector(state => state.session.userId);

  const onFavoriteTouched = async (event) => {
    const res = await toggleRestaurantFavorite(userId, restaurantId);
    navigation.navigate(ROUTES.FAVORITE_RESTAURANTS_DRAWER);
  }

  const onPhotoPress = async (event) => {
    navigation.navigate(ROUTES.RESTAURANT_VIEW_USER);
  }

  const FavoriteIcon = ({props}) => {

    if (favorite)
      return <Icon onPress={onFavoriteTouched}  name="favorite" color="red"  marginBottom={7}></Icon >;
    else
      return <Icon onPress={onFavoriteTouched} name="favorite-border" color={colorPalette.Black}  marginBottom={7}></Icon >
  }

  return (
    <View  style={styles.global}>
      <Card >
        <View style={styles.globalTwo}>
          <Images.logo 
            width='20%' 
            height={Dimensions.get('window').height*0.13}
            onPress={onPhotoPress}
          ></Images.logo>
          <View width={Dimensions.get('window').width*0.55} style={styles.globalThree} >
            <Text h4>{name}</Text>
            <Text>{address}</Text>
            <View style={styles.globalFour}>
              <Text> {score} </Text>
              <Icon name="star" color={colorPalette.Orange} size={20}></Icon>
            </View> 
          </View>
          <View  style= {styles.globalFive}>
          <FavoriteIcon isFavorite></FavoriteIcon>
          </View>   
        </View>
        </Card>   
 </View>
  )
}

export default RestaurantCardUser;

const styles = StyleSheet.create({
  global:{
    alignItems : 'center' , 
    width: '100%' 
  },
  globalTwo : {
    flexDirection: 'row', 
    justifyContent : 'space-between'
  }
,
globalThree : {
  justifyContent : 'space-evenly', 
  marginLeft:10
},
globalFour : {
  flexDirection: 'row',
  alignItems: 'center'
},
globalFive : {
  flexDirection:'column-reverse'
}

});
