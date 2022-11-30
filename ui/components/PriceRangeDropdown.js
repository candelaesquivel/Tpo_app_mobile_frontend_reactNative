import { Dropdown } from "react-native-element-dropdown";
import { CONSTANTS } from "../../config";
import { StyleSheet } from "react-native";
import { colorPalette } from "../styles/colors";
import { Theme } from '../styles/Theme';
import { useState } from "react";

export function PriceRangesDropdown({onChangeHandler, value = '', props}){

  const valueData = CONSTANTS.PRICE_RANGES.find(item => {
    return item.label === value;
  });

  const onChangeValue = (item) => {
    const value = item.label
    if (onChangeHandler)
      onChangeHandler(value)
  }

  return (
    <Dropdown
      style={[styles.dropdown]}
      placeholderStyle={styles.placeholderStyle}  
      itemTextStyle ={styles.placeholderStyle}   
      labelField='label'
      valueField='value'
      value={valueData}
      data={CONSTANTS.PRICE_RANGES}
      placeholder={'Precio'}
      onChange={onChangeValue}
    >
    </Dropdown>
  )
}

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: colorPalette.Orange,
    borderRadius: Theme.sizes.SMALL_ROUNDED,
    paddingHorizontal: 10, borderWidth:1,
  },
   
  placeholderStyle: {
    fontSize: Theme.font.MEDIUM,
    color : colorPalette.Black
  },
});