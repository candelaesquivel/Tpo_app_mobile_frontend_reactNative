import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import MySearchBar from '../components/MySearchBar'
import RestaurantCardUser from '../components/restaurantCardUser'

export default function RestaurantsUserScreen({navigation , props}) {
    const resto =[]

    useEffect(() => {
        navigation.setOptions({
            title : 'props.addressUser'
        })
    })

  return (

    <View style={{alignItems:'center'}}>
      <MySearchBar></MySearchBar>
      
      <RestaurantCardUser
            name='Rodizio'
            address='honduras 50000'
            score={10}
            favorite={true}

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