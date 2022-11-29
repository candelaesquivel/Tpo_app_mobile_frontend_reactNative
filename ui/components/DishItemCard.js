import React from 'react';
import { View ,StyleSheet} from 'react-native';
import { Text, Card, Icon } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import I18n from "../../assets/localization/I18n";
import Images from '../../assets/images/index';
import { Theme } from '../styles/Theme';
import { useDispatch, useSelector } from 'react-redux';
import { CONSTANTS} from '../../config';
import { useNavigation } from '@react-navigation/native';

export default function DishItemCard({
  name = '', 
  discounts = 0, 
  price = 100, 
  dishId = '', 
  isVegan = true, 
  isGlutenFree = true, 
  onDishPhotoPressHandler,
  props}) 
{
  const priceDescount =(price)* ((100-discounts)/100)
  const showDiscount = discounts  > 0

  const onDishPhotoPress = (event) => {
    if (onDishPhotoPressHandler)
      onDishPhotoPressHandler(dishId);
  }

  return (
    <View style={styles.globalOne}>
      <Card>
        <View style={styles.globalTwo}>
          <Images.logo 
            onPress={onDishPhotoPress} 
            width={"30%"}
            height={"90%"} 
          ></Images.logo>
          <View width={"70%"}  style={styles.global} >
            <Text style={styles.words} >{name}</Text>
              {showDiscount && <Text style={styles.discount}> {CONSTANTS.SCREEN_TEXTS.PRICE_SYMBOL}{price}</Text>}
              <View style={styles.globalThree}>
                  <Text style={styles.wordsTwo} marginBottom={30}> {CONSTANTS.SCREEN_TEXTS.PRICE_SYMBOL}{priceDescount} </Text>
                  {
                    showDiscount &&
                    <>
                      <Icon  name="local-offer" color={colorPalette.Orange} size={20}></Icon>
                      <Text style={styles.wordsThree} marginBottom={30}>%{discounts}</Text>   
                    </> 
                  }
              </View>
              <View style={styles.globalFour} >
                  {isVegan && <Icon name="leaf" type='font-awesome-5' color={colorPalette.Black} size={20}></Icon>}
                  {isGlutenFree && <Icon name="feather" type='font-awesome-5' color={colorPalette.Black} size={20}></Icon>}
              </View>
          </View>
        </View>
      </Card>
 </View>
  )
}

const styles = StyleSheet.create({
  globalOne :{
    width: '98%'
  },
  globalTwo: {
    flexDirection: 'row', 
    justifyContent : 'space-between', 
    marginEnd:"5%",
  },
  globalThree : {
    flexDirection: 'row',
    alignItems: 'center'
  },
  globalFour :{
    flexDirection: 'row-reverse',
    alignItems: 'center',
   
  },
  global: {
    justifyContent : 'center' , 
    marginStart : "5%",
    marginTop : "4%"
  },
  discount :{
    color: colorPalette.Orange ,
    textDecorationLine: 'line-through' ,
    fontSize: Theme.font.MEDIUM
    },
    words :{
      fontSize: Theme.font.LARGE,
      color: colorPalette.Black, 
      fontWeight: Theme.font.FONTWEIGHT,
  },
  wordsTwo :{
    color: colorPalette.Black ,
     fontSize: Theme.font.SMALL_TWO
    },
    wordsThree : {
      color: colorPalette.Orange , 
      fontSize: Theme.font.SMALL,
    },

});
