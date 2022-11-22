import { View} from 'react-native'
import React from 'react'
import MySearchBar from '../../components/MySearchBar'
import { RestaurantFlatListUser } from '../../components/RestaurantFlatListUser'


const HomeLandingUserUI = ({
    restaurants = [], 
    onFavoriteIconPressHandler,
    onPhotoPressHandler,
    props}) => {

    return (
        <View>
        <MySearchBar></MySearchBar>
        <View>
        <RestaurantFlatListUser
            restaurants={restaurants}
            onFavoriteTouchHandler={onFavoriteIconPressHandler}
            onPhotoPressHandler={onPhotoPressHandler}
         ></RestaurantFlatListUser>
        </View>
      </View>
    )
  }
  
  

  
  export {HomeLandingUserUI}