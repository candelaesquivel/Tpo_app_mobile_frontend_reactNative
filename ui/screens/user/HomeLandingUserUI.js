import { View} from 'react-native'
import React from 'react'
import MySearchBar from '../../components/MySearchBar'
import { RestaurantFlatListUser } from '../../components/RestaurantFlatListUser'


const HomeLandingUserUI = ({
    restaurants = [], 
    searchText = '',
    onFavoriteIconPressHandler = (restaurantId) => {},
    onPhotoPressHandler = (restaurantId) => {},
    onSearchBarTextChangeHandler = (text) => {},
    props}) => {

    return (
        <View>
        <MySearchBar
          searchText = {searchText}
          onTextChangeHandler={onSearchBarTextChangeHandler}
        >

        </MySearchBar>
        <View>
        <RestaurantFlatListUser
            restaurants={restaurants}
            onFavoriteIconPressHandler={onFavoriteIconPressHandler}
            onPhotoPressHandler={onPhotoPressHandler}
         ></RestaurantFlatListUser>
        </View>
      </View>
    )
  }
  
  

  
  export {HomeLandingUserUI}