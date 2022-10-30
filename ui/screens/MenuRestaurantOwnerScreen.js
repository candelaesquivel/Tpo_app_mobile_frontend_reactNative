import { View, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Icon } from "@rneui/themed";
import { colorPalette } from '../styles/colors';
import { ROUTES } from '..';
import { GetDishesFromRestaurant } from '../../networking';
import { useState } from 'react';
import { DishFlatList } from '../components/DishFlatList';
import { useSelector } from 'react-redux';


function MenuRestaurantOwnerScreen({navigation,props}) {

  const [dishes, setDishes] = useState([]);
  const [triggerSearch, setTrigggerSearch] = useState(false);

  const restoId = useSelector((state) => state.session.restaurantSelectedId);

  const fillDishList = async () => {
    const newDishes = await GetDishesFromRestaurant(restoId);
    setDishes(newDishes);
  }

  useEffect(() => {
    if (!triggerSearch)
    {
      fillDishList();
      setTrigggerSearch(true);
    }

  }, [dishes, triggerSearch])

  const onCreateDishPress = (event) => {
    console.log('On Created Dish Press');
    navigation.navigate(ROUTES.ADD_DISH_STACK)
  }

  const onDishPhotoPress = (event) => {
    console.log('On Dish Photo Press');
    navigation.navigate(ROUTES.DISH_DETAILS_OWNER_STACK);
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
