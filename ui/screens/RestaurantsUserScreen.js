import { View, Text  , FlatList, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import MySearchBar from '../components/MySearchBar'
import RestaurantCardUser from '../components/restaurantCardUser'
import screenNames from '../screenNames'
import { useState } from 'react'
import { ROUTES } from '..'
function RestaurantsUserScreen({navigation , props}) {
 
    const renderItem = ({ item }) => (
      <View >
      <RestaurantCardUser
            name={item.name}
            address={item.address}
            score={item.score}
            favorite={item.favorite}
            onFavoriteTouched = {onFavoriteTouched}
            onRestaurantNameTouched={onRestaurantNameTouched}
            onPhotoPress={onPhotooPresses}

            ></RestaurantCardUser>
      </View>
      ); 

     const RESTAURANTS = [
      {
      name : 'Rodizio' ,
      address : 'Honduras 5000',
      score : 5 ,
      favorite : true ,
      onFavoriteTouched : true ,
      onRestaurantNameTouched :false,
      onPhotoPress : true,
      },
      {
        name : 'Le Pain' ,
        address : 'Av Belgrano 400',
        score : 2 ,
        favorite : true ,
        onFavoriteTouched : false ,
        onRestaurantNameTouched :false,
        onPhotoPress : true,
        },
        {
          name : 'Marcelo' ,
          address : 'Peru 768',
          score : 1 ,
          favorite : true ,
          onFavoriteTouched : true ,
          onRestaurantNameTouched :false,
          onPhotoPress : true,
          },
     ];

    const [isFavorite, setFavorite] = useState(true);
    const [isPhotoPress, setIsPhotoPress] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            title : 'props.addressUser'
        })
    })

  const onRestaurantNameTouched = (event) => {
    console.log('On Restaurant Name Touched');
    navigation.navigate(screenNames.RESTAURANT_VIEW_USER);
  }

  const onFavoriteTouched = (event) => {
    console.log('On Favorite Pressed');
    setFavorite(!isFavorite);
  }

  const onPhotooPresses = (event) => {
    navigation.navigate(ROUTES.PROFILE_RESTAURANT_USER);
  }

  return (
  <View >  
        <MySearchBar ></MySearchBar>

          <FlatList
              data={RESTAURANTS}
              renderItem={renderItem}
              keyExtractor ={item => item.name}
              />
      
     {/*

      crtl+k+c} */}
  
    
    </View>
    
  )


    }

export default RestaurantsUserScreen;