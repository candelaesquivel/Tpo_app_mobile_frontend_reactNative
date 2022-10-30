import { View, FlatList} from 'react-native'
import React, { useEffect } from 'react'
import MySearchBar from '../components/MySearchBar'
import RestaurantCardUser from '../components/RestaurantCardUser'
import screenNames from '../screenNames'
import { useState } from 'react';
import getRestaurants from '../../networking/getRestaurants';
import I18n from '../../assets/localization/I18n'
import { useSelector } from 'react-redux'
import { RestaurantFlatListUser } from '../components/RestaurantFlatListUser'


function RestaurantsUserScreen({navigation , props}) {
  
  const [restaurants, setRestaurants] = useState([]);
  const [triggerSearch, setTrigggerSearch] = useState(false);

  const userId = useSelector(state => state.session.userId);

  const fillRestaurantList = async () => {
    const restos = await getRestaurants(userId);
    setRestaurants(restos);
  }

  useEffect(() => {

    navigation.setOptions({
      title : I18n.t('home'),
    })

    if (!triggerSearch)
    {
      fillRestaurantList();
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

  return (
    <View>
      <MySearchBar></MySearchBar>
      <View>
      <RestaurantFlatListUser restaurants={restaurants}></RestaurantFlatListUser>
      </View>
    </View>
  )
}

export default RestaurantsUserScreen;