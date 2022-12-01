import React from 'react';
import { View, Image , FlatList , StyleSheet, Dimensions } from 'react-native';
import { Text, Card, Icon } from "@rneui/themed";
import { colorPalette } from '../styles/colors';
import I18n from "../../assets/localization/I18n";
import { Theme } from '../styles/Theme';
import { CONSTANTS } from '../../config';
import { CardDivider } from '@rneui/base/dist/Card/Card.Divider';
import { ScrollView } from 'react-native-gesture-handler';
import Carousal from './carousal';


const DishCard = ({
  name = '', 
  isVegan = false, 
  isGlutenFree = false, 
  ingredients = [], 
  pictures = [],
  price = 0}) => 
{

     const DishDetail = ({iconName='', iconType='', detail='', props}) => {
      return (
        <View style={styles.veganCeliacContainer}>
          <Icon name={iconName} type={iconType} size={20} color={colorPalette.Black}></Icon>
          <Text style={styles.veganCeliacText}>{detail}</Text>
        </View>
      )
     }

  return (
    <ScrollView>
      <Carousal data={pictures}></Carousal>
      <Card containerStyle={styles.container}>
        <Card.Title style={styles.titleWord}>{name}</Card.Title>
        {isVegan && <DishDetail iconName='leaf' iconType='font-awesome-5' detail={CONSTANTS.SCREEN_TEXTS.VEGAN_LABEL}></DishDetail>}
        {isGlutenFree && <DishDetail iconName='leaf' iconType='font-awesome-5' detail={CONSTANTS.SCREEN_TEXTS.CELIAC_LABEL}></DishDetail>}
        <View style={styles.ingredientsContainer}>
        {
          ingredients.map((item, idx) => {
            return (
              <View key={idx} style={styles.ingredientItemContainer}>
                <Text style={styles.ingredientsWords}>{'\u2B24' + ' '}{item}</Text>
              </View>
            )
          })
        }
        </View>   
        <Text style={styles.price}>{CONSTANTS.SCREEN_TEXTS.PRICE_SYMBOL}{price}</Text>
      </Card>
    </ScrollView>
    
  )
}

export default DishCard;

const styles = StyleSheet.create({
  title : { 
  alignItems: 'center' ,
  width:'100%'
},
  titleWord : {
  color: colorPalette.Black , 
  fontWeight: Theme.font.FONTWEIGHT,
  fontSize : Theme.font.LARGE,
  },
  container : {
    alignSelf : 'center',
    borderRadius: Theme.sizes.BUTTON_ROUNDED,
    marginTop : 20,
    flexDirection : 'column',
    width : Dimensions.get('screen').width * 0.9,
  },
  veganCeliacContainer :{
    flexDirection: 'row',
    alignItems: 'center'
  },
  veganCeliacText : {
    marginLeft : 5,
    color: colorPalette.Black , 
    fontSize: Theme.font.MEDIUM,
  },
  ingredientItemContainer : {
    flexDirection : 'row',
    alignItems : 'flex-start'
  },

  ingredientsContainer :{
    marginTop : 10,
  },

  ingredientsWords : { 
    fontSize:Theme.font.MEDIUM,
    color: colorPalette.Black,
    marginLeft : "5%"
  },
  price : {
    alignSelf : 'center',
    flexDirection: 'column',
    color: colorPalette.Orange,
    fontSize : Theme.font.MEDIUM
  },
});
