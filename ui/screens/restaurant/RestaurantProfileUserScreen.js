import { View, Text , FlatList , StyleSheet , Dimensions, ScrollView} from 'react-native'
import React, { useState , useEffect} from 'react'
import { GetDishesFromRestaurant } from '../../networking';
import { GetCommentsFromRestaurant } from '../../networking';
import { useSelector } from 'react-redux';
import { ROUTES } from '../..';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useCallback } from 'react';
import { RestaurantProfileUserScreenUI } from './RestaurantProfileUserScreenUI';

function RestaurantProfileUserScreen({navigation, route, name='Mudra',
hourOpen=10,hourOpen2='am',hourClose=20,hourClose2='pm',
calification=4, priceRange='$$$$', latitude=-34.603722, longitude=-58.381592, sprops}) {

  const restoData = {
    name : route.params.name,
    rating : route.params.averageRating.toFixed(2),
    priceRange : route.params.priceRange,
  };
  const [showComments , setShowComments]= useState(false);
  const [showMap , setShowMap]= useState(false);
  const [showDishes , setShowDishes]= useState(false);

  const [dishes, setDishes] = useState([]);
  const [comments, setComments] = useState([]);

  const [forceRender, setForceRender] = useState(false);

  const isFocused = useIsFocused();

  const restoId = useSelector((state) => state.user.restaurantSelectedId);

  const fillCommentsList = async () => {
    const newComments = await GetCommentsFromRestaurant(restoId);
    setComments(newComments);
  }

  const fillDishList = async () => {
    const newDishes = await GetDishesFromRestaurant(restoId);
    setDishes(newDishes);
  }

  const onBtnPress = (component) => {

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


  const onPressComment = (event) => {
    navigation.navigate(ROUTES.USER_SENT_COMMENT);
  }
  return (
    <RestaurantProfileUserScreenUI
      restoDataname={restoData.name}
      restoDatarating={restoData.rating}
      restoDatapriceRange={restoData.priceRange}
      onPressCommentHandler={onPressComment}
      comments1={comments}
      dishes1={dishes}
      showComments={showComments}
      showMap={showMap}
      showDishes={showDishes}
      onBtnPressHandler={onBtnPress}
      hourOpen={10}
      hourOpen2={'am'}
      hourClose={20}
      hourClose2={'pm'}
      
      latitude={-34.603722}
      longitude={-58.381592}
      >
    </RestaurantProfileUserScreenUI>
  )
}

export default RestaurantProfileUserScreen;

