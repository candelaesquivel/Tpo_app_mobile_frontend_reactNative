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
        <View style={{width:  Dimensions.get("window").width*0.2 }}></View>
        <Switch
            onValueChange={onIsVeganChange}
            value={isVegan} />
      </View>
      <View style={styles.switchContainer}>
          <Text style={styles.words}>
              {CONSTANTS.SCREEN_TEXTS.CELIAC_LABEL}       
          </Text>
          <View style={{width:  Dimensions.get("window").width*0.026 }}></View>
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
      width: Dimensions.get('window').width,
      alignItems:'flex-start'
    },
    global:{
      flexDirection : 'column',
      alignItems : 'center'
    },
    words :{
      fontSize: Theme.font.MEDIUM,
      color: colorPalette.Black, 
      marginLeft : Dimensions.get('window').width*0.04 , 
      marginBottom : Dimensions.get('window').width*0.03
  },
  switchContainer : {
      flexDirection:'row',
      marginBottom : Dimensions.get('window').width*0.03
       
  },
  buttons : {
      flexDirection: 'row' , 
      marginLeft : Dimensions.get('window').width*0.06
      },

  buttonsTwo : {
      flexDirection: 'column' , 
      alignItems : "center" ,
     
      
  },
  slider : {
    width: Dimensions.get('window').width*0.8, 
    height : Dimensions.get('window').height*0.05,
    marginLeft :Dimensions.get("window").width*0.05,
    marginBottom :Dimensions.get("window").width*0.05
  },
  trackStyle : {
    height : Dimensions.get("window").width*0.01,
    backgroundColor:  Theme.color.TRANSPARENT, 
    },
  
  thumbStyle : { 
    height : 20,
    width :  20,
    backgroundColor: Theme.color.TRANSPARENT
   },
   
});

export {DishForm}