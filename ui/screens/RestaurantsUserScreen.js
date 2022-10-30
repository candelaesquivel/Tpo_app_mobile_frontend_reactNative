import { View, FlatList, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import MySearchBar from '../components/MySearchBar'
import RestaurantCardUser from '../components/restaurantCardUser'
import screenNames from '../screenNames'
import { useState } from 'react';
import { Button } from '@rneui/themed'
import getRestaurants from '../../networking/getRestaurants';
import I18n from '../../assets/localization/I18n'


function RestaurantsUserScreen({navigation , props}) {
  
  const [restaurants, setRestaurants] = useState([]);
  const [triggerSearch, setTrigggerSearch] = useState(false);

  const renderItem = ({ item }) => (
    <View >
      <RestaurantCardUser
          name={item.name}
          address={item.address}
          score={item.score}
          favorite={item.favorite}
          onFavoriteTouched = {item.onFavoriteTouched}
          onRestaurantNameTouched={item.onRestaurantNameTouched}
        ></RestaurantCardUser>
    </View>
  ); 

  const [isFavorite, setFavorite] = useState(true);

  const fillRestaurantList = async () => {
    setRestaurants([]);
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
      <FlatList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor ={item => item.name}
       ></FlatList>
      </View>
    </View>
  )
}

export default RestaurantsUserScreen;