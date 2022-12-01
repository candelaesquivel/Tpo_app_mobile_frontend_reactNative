
import React, { useRef, useState } from 'react'
import { CONSTANTS } from "../../../config"
import { Theme } from "../../styles/Theme"
import { colorPalette } from "../../styles/colors"
import  Icon from 'react-native-vector-icons/MaterialIcons';
import { View, ScrollView , StyleSheet , Dimensions} from 'react-native'
import Carousal from '../../components/carousal';
import { MyButton } from '../../components/button';
import { DishForm } from './DishForm';
import { Image } from 'react-native';
import {AlertConfirm} from '../../components/AlertConfirm';

const DishModifyScreenUI = ({
  
  name = '',
  price = 0,
  ingredients = '',
  discount = 0,
  isVegan = false,
  isGlutenFree = false,
  category = '',
  nameError = '',
  priceError = '',
  ingredientsError = '',
  showConfirmDelete = false,
  pictures = [],
  categories = [],

  onAddCategoryPressHandler=(event) => {},
  onCategorySelectedChangeHandler=(category) => {},
  onUploadImgPressHandler = (event) => {},
  onDeletePhotoPressHandler = (event) => {},
  onSavePressHandler,
  onDeletePressHandler,
  onNameChangedHandler,
  onPriceChangedHandler,
  onIngredientChangeHandler,
  onDiscountChangeHandlerHandler,
  onIsVeganChangeHandler,
  onIsGlutenFreeChangeHandler,

  onConfirmDeleteBtnHandler,
  onCancelBtnHandler,

  showConfirmDeletePhoto = false,
  onConfirmDeletePhotoHandler = () => {},
  onCancelDeletePhotoHandler = () => {},
  props}) => {

  const categoryData = categories.map((item, idx) => {
    return {
      label : item,
      value : idx,
    }
  })

  return (
    <ScrollView>
      <AlertConfirm
        title={CONSTANTS.SCREEN_TEXTS.DELETE_DISH_LABEL}
        bodyMsg={CONSTANTS.SCREEN_TEXTS.DELETE_DISH_CONFIRM_MSG}
        confirmBtnTitle={CONSTANTS.SCREEN_TEXTS.DELETE_LABEL}
        cancelBtnTitle={CONSTANTS.SCREEN_TEXTS.CANCEL_LABEL}
        isOpen={showConfirmDelete}
        onConfirmBtnHandler={onConfirmDeleteBtnHandler}
        onCancelBtnHandler={onCancelBtnHandler}
      >
      </AlertConfirm>
      <Carousal 
        showConfirmDeletePhoto = {showConfirmDeletePhoto}
        data={pictures} 
        onConfirmDeletePhotoHandler={onConfirmDeletePhotoHandler}
        onCancelDeletePhotoHandler={onCancelDeletePhotoHandler}
        onDeletePhotoPressHandler={onDeletePhotoPressHandler}
      >
      </Carousal>
      <View style={styles.iconGlobal}>
          <Icon name = 'add' size={30} style={styles.iconPlus} onPress={onUploadImgPressHandler}></Icon>
      </View>
      <View style={styles.global}>

          <DishForm
            selectedCategory={category}
            categories={categoryData} onCategoryChangeHandler={onCategorySelectedChangeHandler}
            name={name.replace(/\b[a-z]/g,c=>c.toUpperCase())} onNameChanged={onNameChangedHandler} nameError={nameError}
            price={price} onPriceChanged={onPriceChangedHandler} priceError={priceError}
            ingredients={ingredients} onIngredientChange={onIngredientChangeHandler} ingredientsError={ingredientsError}
            discount={discount} onDiscountChange={onDiscountChangeHandlerHandler}
            isVegan={isVegan} onIsVeganChange={onIsVeganChangeHandler}
            isGlutenFree={isGlutenFree} onIsGlutenFreeChange={onIsGlutenFreeChangeHandler}
          ></DishForm>


          <View style={styles.buttons}>
                  <MyButton
                  onPress={onAddCategoryPressHandler}
                  title= {CONSTANTS.SCREEN_TEXTS.ADD_NEW_CATEGORY_LABEL} 
                  width={ Dimensions.get("window").width*0.5}
                  height={Dimensions.get("window").height*0.1}
                  ></MyButton>
               
          </View>
             
          <View style={styles.buttonsTwo}>

          < MyButton
            onPress={onSavePressHandler}
              title={CONSTANTS.SCREEN_TEXTS.SAVE_LABEL}
              width={ Dimensions.get("window").width*0.5}
              height={Dimensions.get("window").height*0.08}
              ></MyButton>

          < MyButton
              onPress = {onDeletePressHandler}
              title= {CONSTANTS.SCREEN_TEXTS.DELETE_DISH_LABEL}
              width={ Dimensions.get("window").width*0.5}
              height={Dimensions.get("window").height*0.08}
              ></MyButton>
          </View>
      
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  iconGlobal :{
      flexDirection:"row-reverse"
  }
  ,
  iconPlus:{
    marginRight: Dimensions.get("window").height*0.03 , 
    marginTop : Dimensions.get("window").height*0.03 
  },
  globalTwo:{
    width:Dimensions.get("window").width*0.9, 
      alignItems:'flex-start'
    },
    global:{
      flexDirection : 'column',
      alignItems : 'center',
      
    },
    words :{
      fontSize: Theme.font.MEDIUM,
      color: colorPalette.Black, 
      marginLeft : Dimensions.get("window").height*0.04 , 
      marginBottom : Dimensions.get("window").height*0.03
  },
  switchContainer : {
      flexDirection:'row',
      marginBottom : Dimensions.get("window").height*0.03
       
  },
  buttons : {
      flexDirection: 'row' , 
      
      },

  buttonsTwo : {
      flexDirection: 'column' , 
      alignItems : "center" ,
      width : Dimensions.get("window").width,
      height : Dimensions.get("window").height*0.16 ,
      
  },
});

export {DishModifyScreenUI}