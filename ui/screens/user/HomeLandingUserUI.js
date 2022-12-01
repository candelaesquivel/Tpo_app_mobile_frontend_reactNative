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

    const ListHeaderComponent = (search = '', onSearchBarTextChangeHandler = () => {}) => {
      return (
        <MySearchBar
          searchText = {search}
          onTextChangeHandler={onSearchBarTextChangeHandler}
        >
        </MySearchBar>
      )
    }

    return (
      <RestaurantFlatListUser
          flatListHeader={ListHeaderComponent(searchText, onSearchBarTextChangeHandler)}
          restaurants={restaurants}
          onFavoriteIconPressHandler={onFavoriteIconPressHandler}
          onPhotoPressHandler={onPhotoPressHandler}
        ></RestaurantFlatListUser>
    )
  }
  
  

  
  export {HomeLandingUserUI}