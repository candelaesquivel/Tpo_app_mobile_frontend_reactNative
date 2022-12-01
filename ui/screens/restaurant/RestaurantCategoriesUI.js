import { View , Text , StyleSheet , Dimensions , ScrollView} from 'react-native'
import React, { useState , useEffect} from 'react'

import { MyButton } from "../../components/button";
import { CONSTANTS } from "../../../config";
import { Theme } from '../../styles/Theme';
import { colorPalette } from '../../styles/colors';
import { InputText } from "../../components/InputText";
import { Dropdown } from 'react-native-element-dropdown';

export const RestaurantCategoriesUI = ({
  categories = [],
  selectedCategory = '',
  newCategoryText = '',
  newCategoryError = '',
  onSelectedCategoryChangeHandler = () => {},
  onNewCategoryChangeHandler= () => {},
  onSaveCategoryPressHandler=() => {},
  onDeleteCategoryPressHandler=() => {},
  ...props
}) =>
{

  const categoryData = categories.map((item, idx) => {
    return {
      label : item,
      value : idx,
    }
  })

  return (
    <View style={styles.global}>
      <Text style={styles.words}>
          Selecciona categorias de la lista si deseas eliminar
      </Text>
      <Dropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={categoryData}
        maxHeight={300}
        labelField="label"
        valueField="value"
        value={categoryData.find(item => item.label === selectedCategory)}
        placeholder={CONSTANTS.SCREEN_TITLES.CATEGORY_DROPDOWN}
        onChange={(item) => onSelectedCategoryChangeHandler(item.label)}
      />
      <MyButton
          onPress={onDeleteCategoryPressHandler}
          title= {CONSTANTS.SCREEN_TEXTS.DELETE_LABEL}
          width={ Dimensions.get("window").width*0.5}
          height={Dimensions.get("window").height*0.07}
      ></MyButton>

      <Text style={styles.words}>
          {CONSTANTS.SCREEN_TITLES.CATEGORY_TEXT}
      </Text>
        
      <Text style={styles.words}>
          Escriba una categoria en el texto si desea agregarla
      </Text>
        <InputText
          borderWidth = {1}
          textColor = {colorPalette.Black}
          placeholder=""
          defaultValue = {newCategoryText}
          onChangeText={onNewCategoryChangeHandler}
          color={colorPalette.White}
          placeholderTextColor = {colorPalette.Black}
        ></InputText>

        <View style={styles.buttonContainer}>
          <MyButton
          onPress={onSaveCategoryPressHandler}
          title= {CONSTANTS.SCREEN_TEXTS.SAVE_LABEL}
          width={ Dimensions.get("window").width*0.5}
          height={Dimensions.get("window").height*0.07}
        ></MyButton>
        <View style={styles.space}></View>
        
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  global :{
      width :Dimensions.get("window").width,
      height :Dimensions.get("window").height,
      alignItems : "center"
  },

    inputText: {
       width :Dimensions.get("window").width,
       height :Dimensions.get("window").height*0.1,
       marginBottom : Dimensions.get("window").width*0.1
    },
    buttonContainer : {
      alignItems : 'center',
      height :Dimensions.get("window").height*0.1,
      marginBottom :Dimensions.get("window").height*0.02, 
      marginTop :Dimensions.get("window").height*0.02, 
    },
    words :{
      fontSize: Theme.font.MEDIUM,
      color: colorPalette.Black,
      marginLeft : "4%" ,
      marginBottom : "3%",
      marginLeft : Dimensions.get("window").width*0.05,
    },

    dropdown: {
      width :Dimensions.get("window").width*0.9,
      height :Dimensions.get("window").height*0.09,
      borderColor: colorPalette.Orange,
      borderRadius: Theme.sizes.SMALL_ROUNDED,
      paddingHorizontal: 10, borderWidth:1,
      marginBottom :Dimensions.get("window").height*0.04, 
      marginTop :Dimensions.get("window").height*0.08, 
    },

    placeholderStyle: {
      fontSize: Theme.font.SMALL,
    },
    selectedTextStyle: {
      fontSize: Theme.font.SMALL,
    },
    space :{

      height :Dimensions.get("window").height*0.03,
    }


});