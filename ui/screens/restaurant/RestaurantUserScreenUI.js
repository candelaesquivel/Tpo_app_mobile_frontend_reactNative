import { View} from 'react-native'
import React from 'react'
import MySearchBar from '../../components/MySearchBar'
import { RestaurantFlatListUser } from '../../components/RestaurantFlatListUser'


const RestaurantUserScreenUI = ({
    restaurants =[], 
    onFavoriteIconPressHandler,
    onPhotoPressHandler,

    props}) => {
      console.log("restaurantes:    ",restaurants)
    return (
        <View>
        <MySearchBar></MySearchBar>
        <View>
        <RestaurantFlatListUser
            restaurants={restaurants} 
            onFavoriteTouched={onFavoriteIconPressHandler}
            onPhotoPress={onPhotoPressHandler}
         ></RestaurantFlatListUser>
        </View>
      </View>
    )
  }
  
  

  
  export {RestaurantUserScreenUI}