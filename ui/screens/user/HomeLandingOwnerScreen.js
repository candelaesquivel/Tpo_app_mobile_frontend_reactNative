import React, { useCallback, useState }  from 'react'
import { ROUTES } from '../..';
import { useDispatch, useSelector } from 'react-redux';
import { userWS } from '../../../networking/endpoints';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { HomeLandingOwnerUI } from './HomeLandingOwnerUI';
import { selectRestaurant } from '../../../redux/slices/userReducer';

function HomeOwnerUI({navigation, props}) {

  const [restaurants, setRestaurants] = useState([]);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const ownerId = useSelector((state) => {
    return state.user.userId;
  });

  const fillRestaurantList = async () => {
    const rests = await userWS.getOwnerRestaurants(ownerId);

    if (rests)
      setRestaurants(rests);
  }

  useFocusEffect(
    useCallback(() => {
      fillRestaurantList();

      return () => {
        if (!isFocused)
          setRestaurants([]);
      }
    }, [isFocused])
  );

  const onCreateRestaurantPressed = (event) => {
    navigation.navigate(ROUTES.CREATE_RESTAURANT_STACK)
  }

  const onRestaurantPhotoPress = (restaurantId) => {
    dispatch(selectRestaurant(restaurantId));
  }

  const onRestaurantMenuPress = (restaurantId) => {
    dispatch(selectRestaurant(restaurantId));
    navigation.navigate(ROUTES.MENU_RESTAURANT_OWNER_STACK);
  }

  return (
    <HomeLandingOwnerUI
      restaurants={restaurants}
      onMenuPressHandler={onRestaurantMenuPress}
      onPhotoPressHandler={onRestaurantPhotoPress}
      onCreateRestaurantHandler={onCreateRestaurantPressed}
    >

    </HomeLandingOwnerUI>
  )
}

export default HomeOwnerUI;




