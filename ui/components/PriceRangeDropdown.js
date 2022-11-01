import { Dropdown } from "react-native-element-dropdown";
import { CONSTANTS } from "../../config";
import { StyleSheet } from "react-native";
import { colorPalette } from "../styles/colors";
import { Theme } from '../styles/Theme';
import { useState } from "react";

export function PriceRangesDropdown({onChange = {}, props}){

  const [value, setValue] = useState(null)

  const onSelectItem = (event) => {
    setValue(event);
  }

  return (
    <Dropdown
      style={[styles.dropdown]}
      placeholderStyle={styles.placeholderStyle}  
      itemTextStyle ={styles.placeholderStyle}   
      labelField='label'
      valueField='value'
      value={value}
      data={CONSTANTS.PRICE_RANGES}
      placeholder={'Precio'}
      onChange={onSelectItem}
    >
    </Dropdown>
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