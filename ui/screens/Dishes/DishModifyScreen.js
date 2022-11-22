import { StyleSheet , ToastAndroid} from 'react-native'
import React, { useState } from 'react'
import { colorPalette } from '../../styles/colors'
import { Theme } from '../../styles/Theme';
import { useSelector } from 'react-redux';
import { dishesWS } from '../../../networking/endpoints';
import {ROUTES} from '../..';
import { CONSTANTS } from '../../../config';
import { DishModifyScreenUI } from './DishModifyScreenUI';

function DishModifyScreen({navigation, route, props}){
  
   
  const dishId = route.params.id;

  const [dishData, setDishData] = useState({
    name : route.params.name,
    price : route.params.price,
    isVegan : route.params.isVegan,
    isGlutenFree : route.params.isGlutenFree,
    category : route.params.category,
    ingredients : route.params.ingredients,
    discounts : route.params.discounts,

  });

  const currRestaurant = useSelector(state => state.user.restaurantSelectedId);
 


  const onSavePress = async (event) => {
    const result = await dishesWS.updateDish(currRestaurant, dishId, dishData);

    if (result){
      setTimeout(() => {
        ToastAndroid.show(CONSTANTS.SCREEN_TEXTS.DISH_UPDATED_MSG, ToastAndroid.SHORT);
        navigation.goBack();
      }, 200);
    }
  }
  
  const onDeletePress = (event) => {
    setShowConfirmDelete(true);
  }

  const onDeleteConfirmTouch = (event) => {
    setShowConfirmDelete(false);
  }

  const onDeleteModalTouch = (event) => {
    navigation.navigate(ROUTES.MENU_RESTAURANT_OWNER_STACK);
  }

  const onDeleteOptionsHandler = async (option) => {
    if (option == CONSTANTS.SCREEN_TEXTS.YES){
      const result = await dishesWS.deleteDish(currRestaurant, dishId);

      console.log(result);
      if (result === 200)
        navigation.navigate(ROUTES.MENU_RESTAURANT_OWNER_STACK);

    }
    else if (option == CONSTANTS.SCREEN_TEXTS.NO){
      setShowConfirmDelete(false);
    }
  }

  const onNameChanged = ({ nativeEvent: { eventCount, target, text} }) => {
    setDishData({...dishData, 'name' : text})
  }

  const onPriceChanged = ({ nativeEvent: { eventCount, target, text} }) => {
    setDishData({...dishData, 'price' : text})
  }

  const onIngredientChange = ({ nativeEvent: { eventCount, target, text} }) => {
    text.replace(' ', '')
    setDishData({...dishData, 'ingredients' : text})
  }
  
  const onDiscountChange = (value) => {
    setDishData({...dishData, 'discounts' : value})
  }

  const onIsVeganChange = ({nativeEvent : {eventCount, target, value}}) => {
    setDishData({...dishData, 'isVegan' : value})
  }

  const onIsGlutenFreeChange = ({nativeEvent : {eventCount, target, value}}) => {
    setDishData({...dishData, 'isGlutenFree' : value})
  }

  const onCategoryChange = ({ nativeEvent: { eventCount, target, text} }) => {
    setDishData({...dishData, 'category' : text})
  }

  return (
<DishModifyScreenUI>
  onDeleteOptionsHandler={onDeleteOptionsHandler}
  onDeleteModalTouchHandler={onDeleteModalTouch}
  dishDataName={dishData.name}
  onNameChangedHandler={onNameChanged}
  onPriceChangedHandler={onPriceChanged}
  onIngredientChangeHandler={onIngredientChange}
  onDiscountChangeHandlerHandler={onDiscountChange}
  onIsVeganChangeHandler={onIsVeganChange}
  onIsGlutenFreeChangeHandler={onIsGlutenFreeChange}
  dishDataprice={dishData.price}
  dishDataingredients={dishData.ingredients}
  dishDatadiscounts={dishData.discounts}
  dishDataisVegan={dishData.isVegan}
  dishDataisGlutenFree={dishData.isGlutenFree}
  onSavePressHandler={onSavePress}
  onDeletePressHandler={onDeletePress}
</DishModifyScreenUI>
    
  )
}

export default DishModifyScreen;

const styles = StyleSheet.create({
    iconGlobal :{
        flexDirection:"row-reverse"
    }
    ,
    iconPlus:{
        marginRight: "3%" , 
        marginTop : "3%" 
    },
    globalTwo:{
        width:'90%', 
        alignItems:'flex-start'
      },
      global:{
        flexDirection : 'column',
        alignItems : 'center'
      },
      words :{
        fontSize: Theme.font.MEDIUM,
        color: colorPalette.Black, 
        marginLeft : "4%" , 
        marginBottom : "3%"
    },
    switchContainer : {
        flexDirection:'row',
        marginBottom : "3%"
         
    },
    buttons : {
        flexDirection: 'row' , 
        marginLeft : "6%"
        },

    buttonsTwo : {
        flexDirection: 'column' , 
        alignItems : "center" ,
        width : "100%",
        height : "75%" , 
        
    },
});

