import { View } from 'react-native'
import React, { useEffect } from 'react'
import MySearchBar from '../components/MySearchBar'
import screenNames from '../screenNames'
import { useState } from 'react';
import I18n from '../../assets/localization/I18n'
import { GetFavoriteRestaurants } from '../../networking';
import { RestaurantFlatListUser } from '../components/RestaurantFlatListUser';
import { useDispatch, useSelector } from 'react-redux';

function UserFavoritesRestaurantsScreen({navigation , props}) {
  
  const [restaurants, setRestaurants] = useState([]);
  const [triggerSearch, setTrigggerSearch] = useState(false);

  const userId = useSelector(state => state.session.userId);

  const fillFavoriteRestaurantList = async () => {
    const restos = await GetFavoriteRestaurants(userId);
    setRestaurants(restos);
  }

  useEffect(() => {

    if (!triggerSearch)
    {
      fillFavoriteRestaurantList();
      setTrigggerSearch(true);
    }

  }, [restaurants, triggerSearch])

  const onRestaurantNameTouched = (event) => {
    console.log('On Restaurant Name Touched');
    navigation.navigate(screenNames.RESTAURANT_VIEW_USER);
  }

  return (
    <View>
      <MySearchBar></MySearchBar>
      <View>
        <RestaurantFlatListUser restaurants={restaurants}></RestaurantFlatListUser>
      </View>
    </View>
  )
}

export default UserFavoritesRestaurantsScreen;