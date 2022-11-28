import { View} from 'react-native'
import React from 'react'
import MySearchBar from '../../components/MySearchBar'
import { RestaurantFlatListUser } from '../../components/RestaurantFlatListUser'


const HomeLandingUserUI = ({
    restaurants = [], 
    searchText = '',
    onFavoriteIconPressHandler,
    onPhotoPressHandler,
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
            onFavoriteTouchHandler={onFavoriteIconPressHandler}
            onPhotoPressHandler={onPhotoPressHandler}
         ></RestaurantFlatListUser>
        </View>
      </View>
    )
  }
  
  

  
  export {HomeLandingUserUI}