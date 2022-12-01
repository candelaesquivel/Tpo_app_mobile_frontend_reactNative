import React from 'react'
import { useCallback } from 'react';
import { RestaurantCategoriesUI } from './RestaurantCategoriesUI';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { categoriesWS } from '../../../networking/endpoints';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useState } from 'react';
import { dishSchemas } from '../../formSchemas/dishSchemas';

function RestaurantCategoriesScreen({ navigation, route, props})
 {
  const isFocused = useIsFocused();
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [categories, setCategories] = useState([])
  const restaurantId = useSelector(state => state.user.restaurantSelectedId);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues : {
      category : '',
      selectedCategory : '',
    },
    validationSchema : dishSchemas.category,
    async onSubmit(values){
      await onSaveCategoryPress()
    }
  })

  const fillCategoriesList = async () => {
    try {
      const newCategories = await categoriesWS.getCategoriesFromRestaurant(restaurantId, dispatch)
      if (newCategories){
        setCategories(newCategories);
      }
    } catch (error) {
      
    }
  }

  useFocusEffect(
    useCallback(() => {

      fillCategoriesList();

      return () => {
        
      }
    }, [isFocused, triggerSearch])
  );

  const onSaveCategoryPress = async (event) => {
    try {
      const newCategories = await categoriesWS.createCategory(restaurantId, formik.values.category, dispatch);
      if (newCategories){
        navigation.goBack();
      }
    } catch (error) {
    }
  }

  const onSelectedCategoryChange = (category) => {
    formik.setFieldValue('selectedCategory', category);
  }

  const onDeleteCategoryPress = async (event) => {
    try{
      const newCategories = await categoriesWS.deleteCategory(restaurantId, formik.values.selectedCategory, dispatch);
      if (newCategories){
        navigation.goBack();
      }
    }
    catch(error){

    }
  }

  return (
    <RestaurantCategoriesUI
      categories={categories}
      newCategoryText={formik.values.category}
      newCategoryError={formik.errors.category}
      selectedCategory={formik.values.selectedCategory}
      onSelectedCategoryChangeHandler={onSelectedCategoryChange}
      onSaveCategoryPressHandler={formik.handleSubmit}
      onNewCategoryChangeHandler={formik.handleChange('category')}
      onDeleteCategoryPressHandler={onDeleteCategoryPress}
    >
    </RestaurantCategoriesUI>
  )
}

export default  RestaurantCategoriesScreen;

