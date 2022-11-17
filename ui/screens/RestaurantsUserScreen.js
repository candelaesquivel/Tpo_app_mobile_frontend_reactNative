import React from 'react'
import { useState } from 'react';
import getRestaurants from '../../networking/getRestaurants';
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useCallback } from 'react';
import toggleRestaurantFavorite from '../../networking/toggleRestaurantFavorite';
import {restaurantSelectedAction} from '../../redux/actions';
import { ROUTES } from '..';
import { getRestaurantDetails } from '../../networking/getRestaurantInfo';
import { RestaurantUserScreenUI } from './restaurant/RestaurantUserScreenUI';

function RestaurantsUserScreen({navigation , props}) {
  
  const [name, setName] = useState('');
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

  const onNameHandler = (value) => {
    setName(value);
  }

  const onFavoriteIconPress = async (restaurantId) => {
    const result = await toggleRestaurantFavorite(userId, restaurantId);
    setTrigggerSearch(true);
  }

  const onPhotoPress = async (restaurantId) => {
   dispatch(restaurantSelectedAction(restaurantId))

   const restaurant = await getRestaurantDetails(restaurantId);
   navigation.navigate(ROUTES.RESTAURANT_VIEW_USER, restaurant);
  }

  return (
   <RestaurantUserScreenUI>
      restaurants={restaurants} 
      onFavoriteIconPressHandler={onFavoriteIconPress}
      onPhotoPressHandler={onPhotoPress}
   </RestaurantUserScreenUI>
  )
}

export default RestaurantsUserScreen;