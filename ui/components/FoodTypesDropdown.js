import { MultiSelect } from "react-native-element-dropdown";
import { CONSTANTS } from "../../config";
import { StyleSheet } from "react-native";
import { colorPalette } from "../styles/colors";
import { Theme } from '../styles/Theme';

export function FoodTypesDropDown({onChangeHandler = () => {}, selected = [], props}){

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
      placeholder={CONSTANTS.SCREEN_TEXTS.TYPE_FOOD}
      onChange={onSelectItem}
    >
    </MultiSelect>
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