import { View , StyleSheet , Dimensions} from 'react-native'
import React, { useCallback, useEffect } from 'react'
import MySearchBar from '../../components/MySearchBar'
import screenNames from '../../screenNames'
import { useState } from 'react';
import { GetFavoriteRestaurants } from '../../../networking';
import { RestaurantFlatListUser } from '../../components/RestaurantFlatListUser';
import { useDispatch, useSelector } from 'react-redux';
import toggleRestaurantFavorite from '../../../networking/toggleRestaurantFavorite';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { Text } from 'react-native';
import { CONSTANTS } from '../../../config';
import EmptyScreenMessage from '../../components/EmptyScreenMessage';
import { restaurantSelectedAction } from '../../../redux/actions';


const UserFavoriteRestaurantsScreenUI = ({
    restaurants = [],
    onPhotoPressHandler,
    onFavoriteIconPressHandler,
  props}) => {
    
  return (
    <View>
      <MySearchBar></MySearchBar>
      <View>
        {restaurants.length === 0 && 
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