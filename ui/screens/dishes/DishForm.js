import { CONSTANTS } from "../../../config"
import { View, StyleSheet, Text, Switch, Dimensions} from "react-native"
import { Theme } from "../../styles/Theme"
import { colorPalette } from "../../styles/colors"
import { InputText } from "../../components/InputText"
import { Slider } from "@rneui/themed"
import I18n from "../../../assets/localization/I18n"
import  Icon from 'react-native-vector-icons/MaterialIcons';

const DishForm = ({
  name = '',
  price = 0,
  ingredients = '',
  discount = 0,
  isVegan = false,
  isGlutenFree = false,

  nameError='',
  priceError='',
  ingredientsError='',
  categoryError='',

  onNameChanged,
  onPriceChanged,
  onDiscountChange,
  onIngredientChange,
  onIsGlutenFreeChange,
  onIsVeganChange,
  props}) => {

  return (
  <View style={styles.globalTwo}>
    <Text style={styles.words}>
        {CONSTANTS.SCREEN_TEXTS.NAME_LABEL}    
    </Text>
    <InputText 
    errorMessage={nameError}
    defaultValue={name}
    onChangeText = {onNameChanged}
    textColor = {colorPalette.Black}
    placeholder=""
    color={colorPalette.White}
    placeholderTextColor = {colorPalette.Black}
    ></InputText>

    <Text style={styles.words}>
      {CONSTANTS.SCREEN_TEXTS.PRICE_LABEL}
    </Text>
    <InputText
    errorMessage={priceError}
    defaultValue={price}
    onChangeText={onPriceChanged}
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
    errorMessage={ingredientsError}
    defaultValue={ingredients}
    onChangeText={onIngredientChange}
    textColor = {colorPalette.Black}
    placeholder=""
    color={colorPalette.White}
    placeholderTextColor = {colorPalette.Black}
    ></InputText>

    <Text style={styles.words}>
        {CONSTANTS.SCREEN_TEXTS.DISCOUNT_LABEL}{discount + ' %'}      
    </Text>
    <View style={styles.slider}>
      <Slider
        value={discount}
        onValueChange={onDiscountChange}
        minimumValue={0}
        maximumValue={100}
        step={1}
        allowTouchTrack={true}
        trackStyle={styles.trackStyle}
        thumbStyle={styles.thumbStyle}
        thumbProps={{
        children: (
            <Icon
            name="circle"
            type="font-awesome"
            size={20}
            reverse
            color={colorPalette.Orange}
      />
        ),
        }}
              />
      </View>
    
      <View style={styles.switchContainer}>
        <Text style={styles.words}>
            {CONSTANTS.SCREEN_TEXTS.VEGAN_LABEL}    
        </Text>
        <View style={{width: '16%'}}></View>
        <Switch
            onValueChange={onIsVeganChange}
            value={isVegan} />
      </View>
      <View style={styles.switchContainer}>
          <Text style={styles.words}>
              {CONSTANTS.SCREEN_TEXTS.CELIAC_LABEL}       
          </Text>
          <Switch
              onValueChange={onIsGlutenFreeChange}
              value={isGlutenFree} />
      </View>
    <Text style={styles.words}>
      {CONSTANTS.SCREEN_TEXTS.CATEGORY_LABEL}    
    </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  globalTwo:{
      width: '100%',
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
  slider : {
    width: Dimensions.get('window').width*0.8, 
    height : Dimensions.get('window').height*0.05,
    marginLeft :"5%"
  },
  trackStyle : {
    height : '10%',
    backgroundColor:  'transparent', 
    },
  
  thumbStyle : { 
    height : 20,
    width : 20,
    backgroundColor: 'transparent'
   },
   
});

export {DishForm}