import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { dishesWS } from '../../../networking/endpoints';
import { dishSchemas } from '../../formSchemas/dishSchemas';
import {AddDishScreenUI} from './AddDishScreenUI';

function AddDishScreen({navigation, props}) {

  const formik = useFormik({
    initialValues : {
      name : '',
      price : 0,
      ingredients : [],
      discount : 0,
      isVegan : false,
      isGlutenFree : false,
      category : 'Plato Caliente',
      photos : [],
    },
    
    validationSchema : dishSchemas.createDish,
    onSubmit(values) {
      onSavePress();
    }
  });
  
  const currRestaurant = useSelector(state => state.user.restaurantSelectedId);
  const [showDishCreateAlert, setShowCreateDishAlert] = useState(false);

  const onIngredientChange = (text) => {
    formik.setFieldValue('ingredients', text.split(','));
  }

  const onDiscountChange = (value) => {
    formik.setFieldValue('discount', value);
  }
  
  const onIsVeganChange = (value) => {
    formik.setFieldValue('isVegan', value);
  }

  const onIsGlutenFreeChange = (value) => {
    formik.setFieldValue('isGlutenFree', value);
  }

  const onDismissAlert = (e) => {
    navigation.goBack();
  }

  const onSavePress = async () => {
    
    const dishData = {...formik.values};

    try {
      const newDish = await dishesWS.createDish(currRestaurant, dishData);
      if (newDish){
        setShowCreateDishAlert(true);
        console.warn('Dish Created');
      }
      else{
        console.warn('Dish Cr')
      }
    } catch (error) {
      
    }
  }

  return (

   <AddDishScreenUI
    name={formik.values.name}
    price={formik.values.price}
    ingredients={formik.values.ingredients.toString()}
    discount={formik.values.discount}
    isVegan={formik.values.isVegan}
    isGlutenFree={formik.values.isGlutenFree}
    showCreateDishAlert={showDishCreateAlert}

    nameError={formik.errors.name}
    priceError={formik.errors.price}
    ingredientsError={formik.errors.ingredients}
    categoryError={formik.errors.category}

    onDismissAlertHandler={onDismissAlert}
    onNameChangedHandler={formik.handleChange('name')}
    onPriceChangedHandler={formik.handleChange('price')}
    onIngredientChangeHandler={onIngredientChange}
    onDiscountChangeHandler={onDiscountChange}
    onIsVeganChangeHandler={onIsVeganChange}
    onIsGlutenFreeChangeHandler={onIsGlutenFreeChange}
    onSavePressHandler={formik.handleSubmit}

   >
   </AddDishScreenUI>

    
  )
}

export default AddDishScreen;


