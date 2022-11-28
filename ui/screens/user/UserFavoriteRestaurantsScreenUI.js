import { View} from 'react-native'
import React, {  } from 'react'
import MySearchBar from '../../components/MySearchBar'
import { RestaurantFlatListUser } from '../../components/RestaurantFlatListUser';
import { CONSTANTS } from '../../../config';
import EmptyScreenMessage from '../../components/EmptyScreenMessage';


const UserFavoriteRestaurantsScreenUI = ({
    restaurants = [],
    onPhotoPressHandler = (event) => {},
    onFavoriteIconPressHandler = (event) => {},
    props}) => {
    
  return (
    <View>
      <View>
        {
          restaurants.length === 0 && 
          <EmptyScreenMessage
          message={CONSTANTS.SCREEN_TEXTS.NOT_FAVORITES}
          ></EmptyScreenMessage>
        }
        {
          restaurants.length !== 0 && 
          <RestaurantFlatListUser 
            restaurants={restaurants}
            onPhotoPressHandler={onPhotoPressHandler}
            onFavoriteIconPressHandler={onFavoriteIconPressHandler}>
          </RestaurantFlatListUser>
        }
      </View>
    </View>
  )
}



export {UserFavoriteRestaurantsScreenUI}