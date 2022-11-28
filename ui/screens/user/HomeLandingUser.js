import React from 'react'
import { useState } from 'react';
import { restaurantWS, userWS } from '../../../networking/endpoints';
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useCallback } from 'react';
import { ROUTES } from '../..';
import { HomeLandingUserUI } from './HomeLandingUserUI';
import { selectRestaurant } from '../../../redux/slices/userReducer';
import { useFormik } from 'formik';

function HomeLandingUser({navigation , props}) {

  const [restaurants, setRestaurants] = useState([]);
  const [triggerSearch, setTrigggerSearch] = useState(false);
  const isFocused = useIsFocused();
  const dispatch =useDispatch();

  const filterParams = useSelector(state => state.user.filters);

  const userId = useSelector(state => state.user.userId);

  const formik = useFormik({
    initialValues : {
      name : '',
    },
  })

  const fillRestaurantList = async () => {
    const searchParams = {
      userId : userId,
      ...formik.values,
      ...filterParams,
    };

    const restos = await restaurantWS.getRestaurants(searchParams);
    setRestaurants(restos);
  }

  useFocusEffect(
    useCallback(() => {

      if (isFocused || triggerSearch)
        fillRestaurantList();

      return () => {
        setTrigggerSearch(false);

        if (!isFocused)
          setRestaurants([]);
      }
    }, [triggerSearch, isFocused, formik.values.name])
  );

  const onFavoriteIconPress = async (restaurantId) => {
    const result = await userWS.changeRestaurantFavoriteStatus(userId, restaurantId);
    setTrigggerSearch(true);
  }

  const onPhotoPress = async (restaurantId) => {

    dispatch(selectRestaurant(restaurantId));

    try {
      const restaurant = await restaurantWS.getRestaurantInfo(restaurantId);
      console.log(restaurant);

      if (restaurant)
        navigation.navigate(ROUTES.RESTAURANT_VIEW_USER, restaurant);
    } catch (error) {
      
    }
  }

  return (

   <HomeLandingUserUI
    restaurants={restaurants} 
    onSearchBarTextChange={formik.values.name}
    onPhotoPressHandler={onPhotoPress}
    onFavoriteIconPressHandler={onFavoriteIconPress}
    onSearchBarTextChangeHandler={formik.handleChange('name')}
   >
   </HomeLandingUserUI>

  )
}

export default HomeLandingUser;