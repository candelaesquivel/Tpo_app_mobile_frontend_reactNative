import { View, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Icon } from "@rneui/themed";
import { colorPalette } from '../styles/colors';
import { ROUTES } from '..';
import { GetDishesFromRestaurant } from '../../networking';
import { useState } from 'react';
import { DishOwnerList } from '../components/dishesOwnerList';


function MenuRestaurantOwnerScreen({navigation,props}) {

  const [dishes, setDishes] = useState([]);
  const [triggerSearch, setTrigggerSearch] = useState(false);

  const fillDishList = async () => {
    const newDishes = await GetDishesFromRestaurant('63558c31e775bce680b6ae56');
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

  const onCreateMenuPressed = async (event) => {
    const newDishes = await GetDishesFromRestaurant('63558c31e775bce680b6ae56');
    console.log("Dish Data: ", newDishes)
    setDishes(newDishes);
    // navigation.navigate(ROUTES.DISH_CREATE)
  }

  return (
    <View style={styles.global}> 
      <View style={{alignItems:'center'}}>
        <DishOwnerList dishes={dishes}></DishOwnerList>
        <View style={styles.icon}>
          <Icon
            size={50}
            name = 'pluscircle'
            type = 'antdesign'
            onPress={onCreateMenuPressed}
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
