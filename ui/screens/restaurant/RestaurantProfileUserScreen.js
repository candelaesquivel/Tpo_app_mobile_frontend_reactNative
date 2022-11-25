import { View, Text , FlatList , StyleSheet , Dimensions, ScrollView} from 'react-native'
import React, { useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES } from '../..';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useCallback } from 'react';
import { RestaurantProfileUserScreenUI } from './RestaurantProfileUserScreenUI';
import { dishesWS, reviewWS } from '../../../networking/endpoints';
import {selectDish} from '../../../redux/slices/userReducer';

function RestaurantProfileUserScreen({navigation, route, name='Mudra',
hourOpen=10,hourOpen2='am',hourClose=20,hourClose2='pm',
calification=4, priceRange='$$$$', latitude=-34.603722, longitude=-58.381592, sprops}) {

  const restoData = {
    name : name,
    rating : calification,
    priceRange : priceRange,
  };
  const [showComments , setShowComments]= useState(false);
  const [showMap , setShowMap]= useState(false);
  const [showDishes , setShowDishes]= useState(false);

  const [dishes, setDishes] = useState([]);
  const [comments, setComments] = useState([]);

  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const restoId = useSelector((state) => state.user.restaurantSelectedId);

  const fillCommentsList = async () => {
    const newComments = await reviewWS.getReviewsOfRestaurant(restoId);
    setComments(newComments);
  }

  const fillDishList = async () => {
    const newDishes = await dishesWS.getDishesFromRestaurant(restoId);
    setDishes(newDishes);
  }

  const onSectionBtnPress = (component) => {

    if (component === 'map')
    {
      setComments([]);
      setDishes([]);
      setShowComments(false);
      setShowDishes(false);
      setShowMap(true);
    }

    if (component === 'menu')
    {
      setComments([]);
      setShowComments(false);
      setShowDishes(true);
      setShowMap(false);
    }

    if (component === 'comment')
    {
      setDishes([]);
      setShowComments(true);
      setShowDishes(false);
      setShowMap(false);
      
    }
  }

  useFocusEffect(
    useCallback(() => {

      if (showComments)
        fillCommentsList();

      if (showDishes)
        fillDishList();

      return () => {

        if (!isFocused){
          setShowComments(false);
          setShowDishes(false);
          setShowMap(false);
          setDishes([]);
          setComments([]);
        }
      }
    }, [isFocused, showDishes, showComments])
  )


  const onSentCommentPress = (event) => {
    navigation.navigate(ROUTES.USER_SENT_COMMENT);
  }

  const onDishPhotoPress = async (dishId) => {

    dispatch(selectDish(dishId));

    try {
      var dishInfo = await dishesWS.getDishData(restoId, dishId);

      if (dishInfo){
        navigation.navigate(ROUTES.DISH_USER_VIEW_STACK, dishInfo);
      }
    } catch (error) {
      
    }
  }

  return (
    <RestaurantProfileUserScreenUI
      name = {name}
      priceRange={priceRange}
      comments={comments}
      dishes={dishes}
      showComments={showComments}
      showMap={showMap}
      showDishes={showDishes}
      onSectionBtnPressHandler={onSectionBtnPress}
      onSentCommentPressHandler={onSentCommentPress}
      onDishPhotoPressHandler={onDishPhotoPress}
      >
    </RestaurantProfileUserScreenUI>
  )
}

export default RestaurantProfileUserScreen;

