import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import AddDishScreenUI from './AddDishScreenUI';
import { dishesWS } from '../../../networking/endpoints';
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
   onDismissAlertHandler={onDismissAlert}
   dishDataName={dishData.name}
   onNameChangedHandler={onNameChanged}
   dishDataprice={dishData.price}
   onPriceChangedHandler={onPriceChanged}
   dishDataingredients={dishData.ingredients}
   onIngredientChangeHandler={onIngredientChange}
   dishDatadiscounts={dishData.discounts}
   onDiscountChangeHandler={onDiscountChange}
   dishDataisVegan={dishData.isVegan}
   onIsVeganChangeHandler={onIsVeganChange}
   dishDataisGlutenFree={dishData.isGlutenFree}
   onIsGlutenFreeChangeHandler={onIsGlutenFreeChange}
   onSavePressHandler={onSavePress}
   >
   </AddDishScreenUI>

    
  )
}

export default AddDishScreen;


