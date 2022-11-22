import { View} from 'react-native'
import React, {  } from 'react'
import MySearchBar from '../../components/MySearchBar'
import { RestaurantFlatListUser } from '../../components/RestaurantFlatListUser';
import { CONSTANTS } from '../../../config';
import EmptyScreenMessage from '../../components/EmptyScreenMessage';


const UserFavoriteRestaurantsScreenUI = ({
    restaurants = [],
    onPhotoPressHandler,
    onFavoriteIconPressHandler,
    props}) => {
    
  return (
    <View>
      <MySearchBar></MySearchBar>
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
            onPhotoPress={onPhotoPressHandler}
            onFavoriteTouched={onFavoriteIconPressHandler}>
          </RestaurantFlatListUser>
        }
      </View>
    </View>
  )
}



export {UserFavoriteRestaurantsScreenUI}