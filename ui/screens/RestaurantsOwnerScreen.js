import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import RestaurantCardOwner from '../components/restaurantCardOwner'
import I18n from "../../assets/localization/I18n";

import { Icon } from "@rneui/themed";
import { colorPalette } from '../styles/colors';

export default function RestaurantsOwnerScreen({navigation, props}) {

    useEffect(() => {
        navigation.setOptions({
            title : I18n.t('restaurants')
        })
    })


  return (
       <View style={{alignItems:'center'}}>
           
      
            <RestaurantCardOwner
                    name='Rodizio'
                    address='honduras 50000'
                    score={10}

                    ></RestaurantCardOwner>
            <Icon size={50} color={colorPalette.Black} name='pluscircle' type='antdesign' containerStyle={{position: 'fixed', bottom: -585, left: 170}}></Icon>

            
            {/* {
            resto.map((restaurant,i) => (

                    <restaurantCardOwner
                    name={restaurant.name}
                    address={restaurant.address}
                    score={restaurant.score}

                    ></restaurantCardOwner>

                ))

            crtl+k+c} */}
    </View>
  )
}