import { StyleSheet , ToastAndroid} from 'react-native'
import React, { useState } from 'react'
import { colorPalette } from '../../styles/colors'
import { Theme } from '../../styles/Theme';
import { useDispatch, useSelector } from 'react-redux';
import { dishesWS } from '../../../networking/endpoints';
import {ROUTES} from '../..';
import { CONSTANTS } from '../../../config';
import { DishModifyScreenUI } from './DishModifyScreenUI';
import { useFormik } from 'formik';
import {dishSchemas} from '../../formSchemas/dishSchemas';
import { launchImageLibrary } from 'react-native-image-picker';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useCallback } from 'react';
import { categoriesWS } from '../../../networking/endpoints';

function DishModifyScreen({navigation, route, props}){
   
  const dishId = route.params.id;

  const formik = useFormik({
    initialValues : {
      name : route.params.name ? route.params.name : '',
      price : route.params.price ? route.params.price : 0,
      ingredients : route.params.ingredients ? route.params.ingredients : '',
      discounts : route.params.discounts ? route.params.discounts : 0,
      isVegan : route.params.isVegan ? route.params.isVegan : false,
      isGlutenFree : route.params.isGlutenFree ? route.params.isGlutenFree : false,
      category : route.params.category ? route.params.category : '',
      pictures : route.params.pictures ? route.params.pictures : [],
    },
    
    validationSchema : dishSchemas.createDish,
    onSubmit(values) {
      onSavePress();
    }
  });

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showConfirmPhotoDelete, setShowConfirmPhotoDelete] = useState(false);

  const [categories, setCategories] = useState([])
  const restaurantId = useSelector(state => state.user.restaurantSelectedId);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const fillCategoriesList = async () => {
    try {
      const newCategories = await categoriesWS.getCategoriesFromRestaurant(restaurantId, dispatch);
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
        if (!isFocused)
          setCategories([])
      }
    }, [isFocused])
  );

  

  const onSavePress = async () => {

    const dishData = {...formik.values};

    try {
      const result = await dishesWS.updateDish(restaurantId, dishId, dishData, dispatch);

      if (result){
        setTimeout(() => {
          ToastAndroid.show(CONSTANTS.SCREEN_TEXTS.DISH_UPDATED_MSG, ToastAndroid.SHORT);
          navigation.goBack();
        }, 200);
      }
      
    } catch (error) {
      console.log('Error Update Call WS: ', error)
    }
  }
  
  const onDeletePress = (event) => {
    setShowConfirmDelete(true);
  }

  const onConfirmDeletePress = async (event) => {
    try {
      const result = await dishesWS.deleteDish(restaurantId, dishId, dispatch);
      if (result)
        navigation.navigate(ROUTES.MENU_RESTAURANT_OWNER_STACK);
    } catch (error) {
      console.warn(error);
      
    }
  }

  const onCancelDeletePhotoPress = (event) => {
    setShowConfirmPhotoDelete(false);
  }

  const onConfirmDeletePhotoPress = (photoFileName) => {
    setShowConfirmPhotoDelete(false);

    const pictures = [];

    formik.values.pictures.forEach(item => {
      if (!item)
        return;

        if (item.fileName !== photoFileName)
          pictures.push(item);
    });

    formik.setFieldValue('pictures', pictures);
  }

  const onCancelDeletePress = (event) => {
    setShowConfirmDelete(false);
  }

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

  const onCategorySelectedChange = (item) => {
    formik.setFieldValue('category', item);
  }

  const onDeletePhotoPress = async (event) => {
    setShowConfirmPhotoDelete(true);
  }

  const onUploadImgPress = async (event) => {

    try {
      const images = await launchImageLibrary({
        mediaType : 'photo',
        includeBase64 : true,
      });

      if (images){
        const pictures = [].concat(formik.values.pictures, images.assets);
        formik.setFieldValue('pictures', pictures);
      }

    } catch (error) {
      
    }
  }

  const onAddCategoryPress = (event) => {
    navigation.navigate(ROUTES.CATEGORY_SCREEN);
  }

  return (
      <DishModifyScreenUI
        name={formik.values.name}
        price={formik.values.price.toString()}
        ingredients={formik.values.ingredients}
        discount={formik.values.discounts}
        isVegan={formik.values.isVegan}
        isGlutenFree={formik.values.isGlutenFree}
        pictures = {formik.values.pictures}
        category = {formik.values.category}
        categories={categories}

        onAddCategoryPressHandler={onAddCategoryPress}
        onNameChangedHandler={formik.handleChange('name')}
        onPriceChangedHandler={formik.handleChange('price')}
        onIngredientChangeHandler={onIngredientChange}
        onDiscountChangeHandlerHandler={onDiscountChange}
        onIsVeganChangeHandler={onIsVeganChange}
        onIsGlutenFreeChangeHandler={onIsGlutenFreeChange}
        onUploadImgPressHandler={onUploadImgPress}

        onSavePressHandler={onSavePress}
        onDeletePressHandler={onDeletePress}

        showConfirmDelete={showConfirmDelete}
        onConfirmDeleteBtnHandler={onConfirmDeletePress}
        onCancelBtnHandler={onCancelDeletePress}

        onCategorySelectedChangeHandler={onCategorySelectedChange}

        showConfirmDeletePhoto={showConfirmPhotoDelete}
        onConfirmDeletePhotoHandler={onConfirmDeletePhotoPress}
        onCancelDeletePhotoHandler={onCancelDeletePhotoPress}
        onDeletePhotoPressHandler={onDeletePhotoPress}

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

