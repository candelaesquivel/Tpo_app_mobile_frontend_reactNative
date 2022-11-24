import { StyleSheet , ToastAndroid} from 'react-native'
import React, { useState } from 'react'
import { colorPalette } from '../../styles/colors'
import { Theme } from '../../styles/Theme';
import { useSelector } from 'react-redux';
import { dishesWS } from '../../../networking/endpoints';
import {ROUTES} from '../..';
import { CONSTANTS } from '../../../config';
import { DishModifyScreenUI } from './DishModifyScreenUI';
import { useFormik } from 'formik';
import {dishSchemas} from '../../formSchemas/dishSchemas';

function DishModifyScreen({navigation, route, props}){
   
  const dishId = route.params.id;

  const formik = useFormik({
    initialValues : {
      name : route.params.name ? route.params.name : '',
      price : route.params.price ? route.params.price : 0,
      ingredients : route.params.ingredients ? route.params.ingredients : [],
      discounts : route.params.discounts ? route.params.discounts : 0,
      isVegan : route.params.isVegan ? route.params.isVegan : false,
      isGlutenFree : route.params.isGlutenFree ? route.params.isGlutenFree : false,
      category : route.params.category ? route.params.category : 'Plato Caliente',
      photos : route.params.photos ? route.params.photos : [],
    },
    
    validationSchema : dishSchemas.createDish,
    onSubmit(values) {
      onSavePress();
    }
  });

  const restaurantId = useSelector(state => state.user.restaurantSelectedId);
 
  const onSavePress = async () => {

    const result = await dishesWS.updateDish(restaurantId, dishId, dishData);

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

  const onIngredientChange = (text) => {
    formik.setFieldValue('ingredients', text.split(','));
  }

  const onDiscountChange = (value) => {
    formik.setFieldValue('discounts', value);
  }
  
  const onIsVeganChange = (value) => {
    formik.setFieldValue('isVegan', value);
  }

  const onIsGlutenFreeChange = (value) => {
    formik.setFieldValue('isGlutenFree', value);
  }

  const onCategoryChange = ({ nativeEvent: { eventCount, target, text} }) => {
    setDishData({...dishData, 'category' : text})
  }

  return (
      <DishModifyScreenUI
        onDeleteOptionsHandler={onDeleteOptionsHandler}
        onDeleteModalTouchHandler={onDeleteModalTouch}
        name={formik.values.name}
        price={formik.values.price.toString()}
        ingredients={formik.values.ingredients.toString()}
        discount={formik.values.discounts}
        isVegan={formik.values.isVegan}
        isGlutenFree={formik.values.isGlutenFree}

        onNameChangedHandler={formik.handleChange('name')}
        onPriceChangedHandler={formik.handleChange('price')}
        onIngredientChangeHandler={onIngredientChange}
        onDiscountChangeHandlerHandler={onDiscountChange}
        onIsVeganChangeHandler={onIsVeganChange}
        onIsGlutenFreeChangeHandler={onIsGlutenFreeChange}

        onSavePressHandler={onSavePress}
        onDeletePressHandler={onDeletePress}

        nameError={formik.errors.name}
        priceError={formik.errors.price}
        ingredientsError={formik.errors.ingredients}
      >
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

