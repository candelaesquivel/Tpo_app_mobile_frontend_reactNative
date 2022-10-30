import { View } from 'react-native'
import React, { useEffect } from 'react'
import MySearchBar from '../components/MySearchBar'
import screenNames from '../screenNames'
import { useState } from 'react';
import I18n from '../../assets/localization/I18n'
import { MyButton } from '../components/button';
import { GetFavoriteRestaurants } from '../../networking';
import { RestaurantFlatListUser } from '../components/RestaurantFlatListUser';


function UserFavoritesRestaurantsScreen({navigation , props}) {
  
  const [restaurants, setRestaurants] = useState([]);
  const [triggerSearch, setTrigggerSearch] = useState(false);

  const [isFavorite, setFavorite] = useState(true);

  const fillFavoriteRestaurantList = async () => {
    const restos = await GetFavoriteRestaurants('635ddf0387204979748381de');
    setRestaurants(restos);
  }

  useEffect(() => {
    navigation.setOptions({
      title : I18n.t('favorites')
    })
  })

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

  const onFavoriteTouched = (event) => {
    console.log('On Favorite Pressed');
    setFavorite(!isFavorite);
  }

  const onGetPressed = async (event) => {
    const restos = await GetFavoriteRestaurants('635ddf0387204979748381de');
    console.log(restos);
    setRestaurants(restos);
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