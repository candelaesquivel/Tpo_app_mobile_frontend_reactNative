import { CONSTANTS } from "../../../config"
import { View, StyleSheet, Text, Switch } from "react-native"
import { Theme } from "../../styles/Theme"
import { colorPalette } from "../../styles/colors"
import { InputText } from "../../components/InputText"

const DishForm = ({
  name = '',
  price = 0,
  ingredients = '',
  discount = 0,
  isVegan = false,
  isCeliac = false,
  onNameChanged,
  onPriceChanged,
  onIngredientChange,
  onIsCeliacChange,
  onIsVeganChange,
  props}) => {

  return (
  <View style={styles.globalTwo}>
    <Text style={styles.words}>
        {CONSTANTS.SCREEN_TEXTS.NAME_LABEL}    
    </Text>
    <InputText 
    defaultValue={name}
    onChange = {onNameChanged}
    textColor = {colorPalette.Black}
    placeholder=""
    color={colorPalette.White}
    placeholderTextColor = {colorPalette.Black}
    ></InputText>

    <Text style={styles.words}>
      {CONSTANTS.SCREEN_TEXTS.PRICE_LABEL}
    </Text>
    <InputText
    defaultValue={price}
    onChange={onPriceChanged}
    keyboardType = {'numeric'} 
    textColor = {colorPalette.Black}
    placeholder=""
    color={colorPalette.White}
    placeholderTextColor = {colorPalette.Black}
    ></InputText>

    <Text style={styles.words}>
        {CONSTANTS.SCREEN_TEXTS.INGREDIENTS_LABEL}        
    </Text>
    <InputText
    defaultValue={ingredients}
    onChange={onIngredientChange}
    textColor = {colorPalette.Black}
    placeholder=""
    color={colorPalette.White}
    placeholderTextColor = {colorPalette.Black}
    ></InputText>

    <Text style={styles.words}>
        {CONSTANTS.SCREEN_TEXTS.DISCOUNT_LABEL}       
    </Text>
    <Text style={styles.words}>
        STEPPER          
    </Text>
    
      <View style={styles.switchContainer}>
        <Text style={styles.words}>
            {CONSTANTS.SCREEN_TEXTS.VEGAN_LABEL}    
        </Text>
        <View style={{width:'18%'}}></View>
        <Switch
            onChange={onIsVeganChange}
            value={isVegan} />
    </View>
    <View style={styles.switchContainer}>
        <Text style={styles.words}>
            {CONSTANTS.SCREEN_TEXTS.CELIAC_LABEL}       
        </Text>
        <Switch
            onChange={onIsCeliacChange}
            value={isCeliac} />
    </View>
    <Text style={styles.words}>
      {CONSTANTS.SCREEN_TEXTS.CATEGORY_LABEL}    
    </Text>
    </View>
  )
}


const styles = StyleSheet.create({
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

export {DishForm}