import React from 'react'
import { ROUTES } from '../..';
import { dishesWS } from '../../../networking/endpoints';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useCallback } from 'react';
import { MenuRestaurantOwnerScreenUI } from './MenuRestaurantOwnerScreenUI';
import { CONSTANTS } from '../../../config';
import { selectDish } from '../../../redux/slices/userReducer';


function MenuRestaurantOwnerScreen({navigation,props}) {

  const [dishes, setDishes] = useState([]);
  const restoId = useSelector((state) => state.user.restaurantSelectedId);
  const userRole = useSelector(state => state.user.role);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const fillDishList = async () => {
    const newDishes = await dishesWS.getDishesFromRestaurant(restoId, dispatch);
    setDishes(newDishes);
  }

  useFocusEffect(
    useCallback(() => {

      fillDishList();

      return () => {
        if (!isFocused)
          setDishes([])
      }
    }, [isFocused])
  );

  const onCreateDishPress = (event) => {
    navigation.navigate(ROUTES.ADD_DISH_STACK)
  }

  const onDishPhotoPress = async (dishId) => {

    dispatch(selectDish(dishId));

    try {
      var dishInfo = await dishesWS.getDishData(restoId, dishId, dispatch);

      if (dishInfo){
        navigation.navigate(ROUTES.DISH_MODIFY_STACK, dishInfo);
      }
    } catch (error) {
      
    }
  }

  return (
    <MenuRestaurantOwnerScreenUI
      dishes={dishes}
      onCreateDishPressHandler={onCreateDishPress}
      onDishPhotoPressHandler={onDishPhotoPress}
    ></MenuRestaurantOwnerScreenUI>
      )
}

export default MenuRestaurantOwnerScreen;

