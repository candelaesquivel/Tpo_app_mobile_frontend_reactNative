import { View} from 'react-native'
import React from 'react'
import MySearchBar from '../components/MySearchBar'
import screenNames from '../screenNames'
import { useState } from 'react';
import getRestaurants from '../../networking/getRestaurants';
import { useDispatch, useSelector } from 'react-redux'
import { RestaurantFlatListUser } from '../components/RestaurantFlatListUser'
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useCallback } from 'react';
import toggleRestaurantFavorite from '../../networking/toggleRestaurantFavorite';
import {restaurantSelectedAction} from '../../redux/actions';
import { ROUTES } from '..';


function RestaurantsUserScreen({navigation , props}) {
  
  const [restaurants, setRestaurants] = useState([]);
  const [triggerSearch, setTrigggerSearch] = useState(false);
  const isFocused = useIsFocused();
  const dispatch =useDispatch();

  const userId = useSelector(state => state.session.userId);

  const fillRestaurantList = async () => {
    const restos = await getRestaurants(userId);
    setRestaurants(restos);
  }

  useFocusEffect(
    useCallback(() => {

      if (isFocused || triggerSearch)
        fillRestaurantList();

        return () => {
          setTrigggerSearch(false);
          setRestaurants([]);
      }
    }, [triggerSearch, isFocused])
  );

  const onFavoriteIconPress = async (restaurantId) => {
    const result = await toggleRestaurantFavorite(userId, restaurantId);
    setTrigggerSearch(true);
  }

  const onPhotoPress = (restaurantId) => {
   dispatch(restaurantSelectedAction(restaurantId))
   navigation.navigate(ROUTES.RESTAURANT_VIEW_USER);
  }

  return (
    <View>
      <MySearchBar></MySearchBar>
      <View>
      <RestaurantFlatListUser
       restaurants={restaurants} 
       onFavoriteTouched={onFavoriteIconPress}
       onPhotoPress={onPhotoPress}
       ></RestaurantFlatListUser>
      </View>
    </View>
  )
}

export default RestaurantsUserScreen;