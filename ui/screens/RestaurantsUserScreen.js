import { View, FlatList, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import MySearchBar from '../components/MySearchBar'
import RestaurantCardUser from '../components/restaurantCardUser'
import screenNames from '../screenNames'
import { useState } from 'react';
import { Button } from '@rneui/themed'
import getRestaurants from '../../networking/getRestaurants';


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
    const rests = await getRestaurants({});
    setRestaurants(rests);
    console.log("Restaurantas Info: ", rests);
  }

  useEffect(() => {

    if (!triggerSearch)
    {
      fillRestaurantList();
      setTrigggerSearch(true);

      navigation.setOptions({
        title : ''
      })
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