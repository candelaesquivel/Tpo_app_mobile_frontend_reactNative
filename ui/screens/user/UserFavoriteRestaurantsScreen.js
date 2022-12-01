import React, { useCallback } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { ROUTES } from '../..';
import { userWS, restaurantWS } from '../../../networking/endpoints';
import { UserFavoriteRestaurantsScreenUI}  from '../user/UserFavoriteRestaurantsScreenUI';
import { selectRestaurant } from '../../../redux/slices/userReducer';

function UserFavoritesRestaurantsScreen({navigation , props}) {
  
  const [restaurants, setRestaurants] = useState([]);
  const [triggerSearch, setTrigggerSearch] = useState(false);
  
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const userId = useSelector(state => state.user.userId);

  const fillFavoriteRestaurantList = async () => {
    const restos = await userWS.getFavoriteRestaurants(userId, dispatch);
    setRestaurants(restos);
  }

  useFocusEffect(
    useCallback(() => {

      if (isFocused || triggerSearch)
        fillFavoriteRestaurantList();

        return () => {
          setTrigggerSearch(false);

          if (!isFocused)
            setRestaurants([]);
      }
    }, [triggerSearch, isFocused])
  );

  const onFavoriteIconPress = async (restaurantId) => {
    const result = await userWS.changeRestaurantFavoriteStatus(userId, restaurantId, dispatch);
    setTrigggerSearch(true);
  }

  const onPhotoPress = async (restaurantId) => {
    dispatch(selectRestaurant(restaurantId));
    try {
      const restaurant = await restaurantWS.getRestaurantInfo(restaurantId, dispatch);
      console.log(restaurant);

      if (restaurant)
        navigation.navigate(ROUTES.RESTAURANT_VIEW_USER, restaurant);
    } catch (error) {
      
    }
  }

  return (
  <UserFavoriteRestaurantsScreenUI
    restaurants={restaurants}
    onPhotoPressHandler={onPhotoPress}
    onFavoriteIconPressHandler={onFavoriteIconPress}
  >
  </UserFavoriteRestaurantsScreenUI>
  )
}

export default UserFavoritesRestaurantsScreen;

