import { View, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { Icon } from "@rneui/themed";
import { colorPalette } from '../styles/colors';
import { ROUTES } from '..';
import { GetDishesFromRestaurant } from '../../networking';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { DishFlatList } from '../components/DishFlatList';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useCallback } from 'react';
import { CONSTANTS } from '../../config';
import EmptyScreenMessage from '../components/EmptyScreenMessage';


function MenuRestaurantOwnerScreen({navigation,props}) {

  const [dishes, setDishes] = useState([]);
  const restoId = useSelector((state) => state.session.restaurantSelectedId);
  const isFocused = useIsFocused();

  const fillDishList = async () => {
    const newDishes = await GetDishesFromRestaurant(restoId);
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
    <View style={styles.global}> 
      <View style={{alignItems:'center'}}>
        {dishes.length === 0 && 
          <EmptyScreenMessage
          message={CONSTANTS.SCREEN_TEXTS.NOT_DISHES}
          ></EmptyScreenMessage>
        }
        {
          dishes.length !== 0 && 
          <DishFlatList dishes={dishes}></DishFlatList>
        }
        <View style={styles.icon}>
          <Icon
            size={50}
            name = 'pluscircle'
            type = 'antdesign'
            onPress={onCreateDishPress}
            containerStyle={styles.icon}	
          >
          </Icon>
        </View>
      </View>
    </View>
      )
}

export default MenuRestaurantOwnerScreen;

const styles = StyleSheet.create({
  category : {
    color: colorPalette.Black ,
     fontSize: 18 ,marginTop :10, fontWeight: 'bold'
  },

  global : {
    alignItems:'center' , 
    height : "100%"
},
icon : {
  position: 'absolute',                                         
  top:  Dimensions.get('screen').width * 0.84,                                                    
  right: Dimensions.get('screen').width * 0.01, 
},
});
