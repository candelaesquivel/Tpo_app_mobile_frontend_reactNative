import React from 'react'
import { useState } from 'react';
import { restaurantWS, userWS } from '../../../networking/endpoints';
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useCallback } from 'react';
import { ROUTES } from '../..';
import { HomeLandingUserUI } from './HomeLandingUserUI';
import { selectRestaurant } from '../../../redux/slices/userReducer';

function HomeLandingUser({navigation , props}) {
  
  const [name, setName] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [triggerSearch, setTrigggerSearch] = useState(false);
  const isFocused = useIsFocused();
  const dispatch =useDispatch();

  const userId = useSelector(state => state.user.userId);

  const fillRestaurantList = async () => {
    const restos = await restaurantWS.getRestaurants(userId);
    setRestaurants(restos);
  }

  useFocusEffect(
    useCallback(() => {

      if (isFocused || triggerSearch)
        fillRestaurantList();

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
    const result = await userWS.changeRestaurantFavoriteStatus(userId, restaurantId);
    setTrigggerSearch(true);
  }

  const onPhotoPress = async (restaurantId) => {

    dispatch(selectRestaurant(restaurantId));

    try {
      const restaurant = await restaurantWS.getRestaurantInfo(restaurantId);
      console.log(restaurant);

      if (restaurant)
        navigation.navigate(ROUTES.RESTAURANT_VIEW_USER);
    } catch (error) {
      
    }
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