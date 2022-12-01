import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dishesWS } from '../../../networking/endpoints';
import { dishSchemas } from '../../formSchemas/dishSchemas';
import {AddDishScreenUI} from './AddDishScreenUI';
import { launchImageLibrary } from 'react-native-image-picker';
import {ROUTES} from '../..';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { categoriesWS } from '../../../networking/endpoints';

function AddDishScreen({navigation, props}) {

  const formik = useFormik({
    initialValues : {
      name : '',
      price : 0,
      ingredients : '',
      discounts : 0,
      isVegan : false,
      isGlutenFree : false,
      category : '',
      pictures : [],
    },
    
    validationSchema : dishSchemas.createDish,
    onSubmit(values) {
      onSavePress();
    }
  });

  const [categories, setCategories] = useState([])
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const restaurantId = useSelector(state => state.user.restaurantSelectedId);

  const fillCategoriesList = async () => {
    try {
      const newCategories = await categoriesWS.getCategoriesFromRestaurant(restaurantId, dispatch);
      if (newCategories){
        setCategories(newCategories);
      }
    } catch (error) {
      
    }
  }

  const currRestaurant = useSelector(state => state.user.restaurantSelectedId);
  const [showDishCreateAlert, setShowCreateDishAlert] = useState(false);

  useFocusEffect(
    useCallback(() => {

      fillCategoriesList();

      return () => {
        
      }
    }, [isFocused])
  );

  const onIngredientChange = (text) => {
    formik.setFieldValue('ingredients', text);
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

  const onDismissAlert = (e) => {
    navigation.goBack();
  }

  const onSavePress = async () => {
    
    try {
      const newDish = await dishesWS.createDish(currRestaurant, {...formik.values}, dispatch);
      if (newDish){
        setShowCreateDishAlert(true);
      }
      else{
      }
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  const onUploadImgPress = async (event) => {

    try {
      const images = await launchImageLibrary({
        mediaType : 'photo',
        includeBase64 : true
      });

      if (images){
        formik.setFieldValue('pictures', images.assets);
      }

    } catch (error) {
      
    }
  }

  const onCategorySelectedChange = (item) => {
    formik.setFieldValue('category', item);
  }

  const onAddCategoryPress = (event) => {
    navigation.navigate(ROUTES.CATEGORY_SCREEN);
  }

  return (

   <AddDishScreenUI
    name={formik.values.name}
    price={formik.values.price}
    categories={categories}
    category = {formik.values.category}
    ingredients={formik.values.ingredients.toString()}
    discount={formik.values.discounts}
    isVegan={formik.values.isVegan}
    isGlutenFree={formik.values.isGlutenFree}
    pictures={formik.values.pictures}
    showCreateDishAlert={showDishCreateAlert}

    onAddCategoryPressHandler={onAddCategoryPress}
    onCategorySelectedChangeHandler={onCategorySelectedChange}

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
    onUploadImgPressHandler={onUploadImgPress}

   >
   </AddDishScreenUI>

    
  )
}

export default AddDishScreen;


