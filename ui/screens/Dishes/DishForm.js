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
        trackStyle={styles.thumbStyleOne}
        thumbStyle={styles.thumbStyle}
        thumbProps={{
        children: (
            <Icon
            name="circle"
            type="font-awesome"
            size={15}
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
            onChange={onIsGlutenFreeChange}
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
  slider : {
    width: Dimensions.get('window').width*0.8, 
    height : Dimensions.get('window').height*0.05,
    marginLeft :"5%"
  },
  thumbStyleOne : { 
    height: "10%", 
    backgroundColor:  I18n.t('transparent') , 
    },
  
  thumbStyle : { 
    height: 12, 
    width: 12, 
    backgroundColor: I18n.t('transparent')
   },
   
});

export {DishForm}