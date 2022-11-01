import { View} from 'react-native'
import React from 'react'
import MySearchBar from '../components/MySearchBar'
import screenNames from '../screenNames'
import { useState } from 'react';
import getRestaurants from '../../networking/getRestaurants';
import { useSelector } from 'react-redux'
import { RestaurantFlatListUser } from '../components/RestaurantFlatListUser'
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useCallback } from 'react';
import toggleRestaurantFavorite from '../../networking/toggleRestaurantFavorite';


function RestaurantsUserScreen({navigation , props}) {
  
  const [restaurants, setRestaurants] = useState([]);
  const [triggerSearch, setTrigggerSearch] = useState(false);
  const isFocused = useIsFocused();

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

  const onRestaurantNameTouched = (event) => {
    console.log('On Restaurant Name Touched');
    navigation.navigate(screenNames.RESTAURANT_VIEW_USER);
  }

  const onFavoriteIconPress = async (restaurantId) => {
    const result = await toggleRestaurantFavorite(userId, restaurantId);
    setTrigggerSearch(true);
  }

  return (
    <View>
      <MySearchBar></MySearchBar>
      <View>
      <RestaurantFlatListUser restaurants={restaurants} onFavoriteTouched={onFavoriteIconPress}></RestaurantFlatListUser>
      </View>
    </View>
  )
}

export default RestaurantsUserScreen;