import { View, Text  , FlatList, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import MySearchBar from '../components/MySearchBar'
import RestaurantCardUser from '../components/restaurantCardUser'
import screenNames from '../screenNames'
import { useState } from 'react'

function RestaurantsUserScreen({navigation , props}) {
 
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

     const RESTAURANTS = [
      {
      name : 'Rodizio' ,
      address : 'Honduras 5000',
      score : 5 ,
      favorite : true ,
      onFavoriteTouched : true ,
      onRestaurantNameTouched :false,
      },
      {
        name : 'Le Pain' ,
        address : 'Av Belgrano 400',
        score : 2 ,
        favorite : true ,
        onFavoriteTouched : false ,
        onRestaurantNameTouched :false,
        },
        {
          name : 'Marcelo' ,
          address : 'Peru 768',
          score : 1 ,
          favorite : true ,
          onFavoriteTouched : true ,
          onRestaurantNameTouched :false,
          },
     ];

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
    <ScrollView
    stickyHeaderIndices={[0]}
    
    >
   
  
        <MySearchBar ></MySearchBar>

          <FlatList
              data={RESTAURANTS}
              renderItem={renderItem}
              keyExtractor ={item => item.name}
              />

      
      {/* <RestaurantCardUser
            name='Rodizio'
            address='honduras 50000'
            score={10}
            favorite={isFavorite}
            onFavoriteTouched = {onFavoriteTouched}
            onRestaurantNameTouched={onRestaurantNameTouched}

            ></RestaurantCardUser> */}

      
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
  
    
    </ScrollView>
    
  )

 
}

export default RestaurantsUserScreen;