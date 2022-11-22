import React, { useCallback } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { restaurantSelectedAction } from '../../../redux/actions';
import { ROUTES } from '../..';
import { userWS } from '../../../networking/endpoints';
import { UserFavoriteRestaurantsScreenUI}  from '../user/UserFavoriteRestaurantsScreenUI';

function UserFavoritesRestaurantsScreen({navigation , props}) {
  
  const [restaurants, setRestaurants] = useState([]);
  const [triggerSearch, setTrigggerSearch] = useState(false);
  
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const userId = useSelector(state => state.user.userId);

  const fillFavoriteRestaurantList = async () => {
    const restos = await userWS.getFavoriteRestaurants(userId);
    setRestaurants(restos);
  }

  useFocusEffect(
    useCallback(() => {

      if (isFocused || triggerSearch)
        fillFavoriteRestaurantList();

        return () => {
          setTrigggerSearch(false);
          setRestaurants([]);
      }
    }, [triggerSearch, isFocused])
  );

  const onFavoriteIconPress = async (restaurantId) => {
    const result = await userWS.changeRestaurantFavoriteStatus(userId, restaurantId);
    setTrigggerSearch(true);
  }

  const onPhotoPress = (restaurantId) => {
    dispatch(restaurantSelectedAction(restaurantId))
    navigation.navigate(ROUTES.RESTAURANT_VIEW_USER);
   }

  return (
  <UserFavoriteRestaurantsScreenUI>
    restaurants={restaurants}
    onPhotoPressHandler={onPhotoPress}
    onFavoriteIconPressHandler={onFavoriteIconPress}
  </UserFavoriteRestaurantsScreenUI>
  )
}

export default UserFavoritesRestaurantsScreen;

