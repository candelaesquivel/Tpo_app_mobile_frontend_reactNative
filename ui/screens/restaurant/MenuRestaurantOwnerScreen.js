import React, { useEffect } from 'react'
import { ROUTES } from '../..';
import { dishesWS } from '../../../networking/endpoints';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useCallback } from 'react';
import { MenuRestaurantOwnerScreenUI } from './MenuRestaurantOwnerScreenUI';

function MenuRestaurantOwnerScreen({navigation,props}) {

  const [dishes, setDishes] = useState([]);
  const restoId = useSelector((state) => state.user.restaurantSelectedId);
  const isFocused = useIsFocused();

  const fillDishList = async () => {
    const newDishes = await dishesWS.getDishesFromRestaurant(restoId);
    setDishes(newDishes);
  }

  useFocusEffect(
    useCallback(() => {

      fillDishList();

      return () => {
        setDishes([])
      }
    }, [isFocused])
  );

  const onCreateDishPress = (event) => {
    navigation.navigate(ROUTES.ADD_DISH_STACK)
  }

  return (
    <MenuRestaurantOwnerScreenUI
    dishes1={dishes}
    onCreateDishPressHandler={onCreateDishPress}
    ></MenuRestaurantOwnerScreenUI>
      )
}

export default MenuRestaurantOwnerScreen;

