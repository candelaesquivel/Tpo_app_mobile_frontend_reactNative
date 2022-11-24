import { MultiSelect } from "react-native-element-dropdown";
import { CONSTANTS } from "../../config";
import { StyleSheet } from "react-native";
import { colorPalette } from "../styles/colors";
import { Theme } from '../styles/Theme';
import { useState } from "react";

export function FoodTypesDropDown({onChangeHandler, selected = [], props}){

  const onSelectItem = (item) => {

    if (onChangeHandler)
      onChangeHandler(item)
  }

  return (
    <MultiSelect
      style={[styles.dropdown]}
      placeholderStyle={styles.placeholderStyle}  
      itemTextStyle ={styles.placeholderStyle}   
      labelField='label'
      valueField='label'
      value={selected}
      data={CONSTANTS.FOOD_TYPES}
      placeholder={'Tipo de Comida'}
      onChange={onSelectItem}
    >
    </MultiSelect>
  )
}

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: colorPalette.Orange,
    borderRadius: 5,
    paddingHorizontal: 10, borderWidth:1,
  },
   
  placeholderStyle: {
    fontSize: Theme.font.MEDIUM,
    color : colorPalette.Black
  },
});