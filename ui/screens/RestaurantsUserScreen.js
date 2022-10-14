import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import MySearchBar from '../components/MySearchBar'
import RestaurantCardUser from '../components/restaurantCardUser'
import screenNames from '../screenNames'
import { useState } from 'react'

export function RestaurantsUserScreen({navigation , props}) {
    const resto =[]

    const [isFavorite, setFavorite] = useState(true);

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

  return (

    <View style={{alignItems:'center'}}>
      <MySearchBar></MySearchBar>
      
      <RestaurantCardUser
            name='Rodizio'
            address='honduras 50000'
            score={10}
            favorite={isFavorite}
            onFavoriteTouched = {onFavoriteTouched}
            onRestaurantNameTouched={onRestaurantNameTouched}

            ></RestaurantCardUser>

      
     {/* {
       resto.map((restaurant,i) => (

            <restaurantCardUser
            name={restaurant.name}
            address={restaurant.address}
            score={restaurant.score}
            favorite={restaurant.favorite}

            ></restaurantCardUser>

        ))

      crtl+k+c} */}
  
    </View>
  )
}