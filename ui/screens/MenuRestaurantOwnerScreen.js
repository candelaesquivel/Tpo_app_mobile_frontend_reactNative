import { View, StyleSheet } from 'react-native'
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
        <DishFlatList dishes={dishes}></DishFlatList>
        <View style={styles.icon}>
          <Icon
            size={50}
            name = 'pluscircle'
            type = 'antdesign'
            onPress={onCreateDishPress}
            containerStyle={StyleSheet.icon}	
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
  bottom: "2%",                                                    
  right: "2%", 

},
});
