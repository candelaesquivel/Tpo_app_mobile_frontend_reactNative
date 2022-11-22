import React, { useCallback, useState }  from 'react'
import { ROUTES } from '../..';
import { useSelector } from 'react-redux';
import { userWS } from '../../../networking/endpoints';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { HomeLandingOwnerUI } from './HomeLandingOwnerUI';

function HomeOwnerUI({navigation, props}) {

  const [restaurants, setRestaurants] = useState([]);
  const isFocused = useIsFocused();

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
        setRestaurants([]);
      }
    }, [isFocused])
  );

  const onCreateRestaurantPressed = (event) => {
    navigation.navigate(ROUTES.CREATE_RESTAURANT_STACK)
  }

  return (
    <HomeLandingOwnerUI
      restaurants={restaurants}
      onCreateRestaurantHandler={onCreateRestaurantPressed}
    >

    </HomeLandingOwnerUI>
  )
}

export default HomeOwnerUI;




