import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { dishesWS } from '../../../networking/endpoints';
import {AddDishScreenUI} from './AddDishScreenUI';

function AddDishScreen({navigation, props}) {

  
  const currRestaurant = useSelector(state => state.user.restaurantSelectedId);

  const [dishData, setDishData] = useState({
    name : '',
    price : '',
    ingredients : '',
    discounts : 0,
    isVegan : false,
    isGlutenFree : false,
    photos : [],
    category : 'Plato Caliente',
  });

  const onNameChanged = ({ nativeEvent: { eventCount, target, text} }) => {
    setDishData({...dishData, 'name' : text})
  }

  const onPriceChanged = ({ nativeEvent: { eventCount, target, text} }) => {
    setDishData({...dishData, 'price' : text})
  }

  const onIngredientChange = ({ nativeEvent: { eventCount, target, text} }) => {
    const str = text.split(',');
    setDishData({...dishData, 'ingredients' : str})
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

  const onDismissAlert = (e) => {
    navigation.goBack();
  }

  const onSavePress = async (event) => {
    const status = await dishesWS.createDish(currRestaurant, dishData);

    if (status === 201)
    {
      setShowCreateDish(true);
      console.log('Dish Created');
    }
    else
      console.log("Status: ", status);
  }

  return (

   <AddDishScreenUI
    name={dishData.name}
    price={dishData.price}
    ingredients={dishData.ingredients}
    discount={dishData.discounts}
    isVegan={dishData.isVegan}
    isGlutenFree={dishData.isGlutenFree}

    onDismissAlertHandler={onDismissAlert}
    onNameChangedHandler={onNameChanged}
    onPriceChangedHandler={onPriceChanged}
    onIngredientChangeHandler={onIngredientChange}
    onDiscountChangeHandler={onDiscountChange}
    onIsVeganChangeHandler={onIsVeganChange}
    onIsGlutenFreeChangeHandler={onIsGlutenFreeChange}
    onSavePressHandler={onSavePress}

   >
   </AddDishScreenUI>

    
  )
}

export default AddDishScreen;


