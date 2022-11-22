import React from 'react'
import { useState } from 'react';
import { restaurantWS } from '../../../networking/endpoints';
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useCallback } from 'react';
import {restaurantSelectedAction} from '../../../redux/actions';
import { ROUTES } from '../..';
import { HomeLandingUserUI } from './HomeLandingUserUI';

function HomeLandingUser({navigation , props}) {
  
  const [name, setName] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [triggerSearch, setTrigggerSearch] = useState(false);
  const isFocused = useIsFocused();
  const dispatch =useDispatch();

  const userId = useSelector(state => state.user.userId);

  const fillRestaurantList = async () => {
    const restos = await getRestaurants(userId);
    setRestaurants(restos);
  }

  useFocusEffect(
    useCallback(() => {

      if (isFocused || triggerSearch)
        fillRestaurantList();

      console.log('Restaurantants: ', restaurants);
        return () => {
          setTrigggerSearch(false);

          if (!isFocused)
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

   <HomeLandingUserUI
    restaurants={restaurants} 
    onFavoriteIconPressHandler={onFavoriteIconPress}
    onPhotoPressHandler={onPhotoPress}
   >
   </HomeLandingUserUI>

  )
}

export default HomeLandingUser;