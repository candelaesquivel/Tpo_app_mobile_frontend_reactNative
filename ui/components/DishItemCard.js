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
import { ROUTES } from '..';
import getDishData from '../../networking/getDishDetails';

export default function DishItemCard({name = '', discount = 0, price = 100, dishId = '', isVegan = true, isCeliac = true, props}) {
  const priceDescount =(price)* ((100-discount)/100)
  
  const role = useSelector(state => state.session.role);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const restaurantId = useSelector(state => state.session.restaurantSelectedId);

  const onPhotoPress = async (event) => {

    const dishData = await getDishData(restaurantId, dishId);

    if (role === CONSTANTS.ROLES.USER_ROLE)
      navigation.navigate(ROUTES.DISH_USER_VIEW_STACK);
    else if (role === CONSTANTS.ROLES.OWNER_ROLE)
      navigation.navigate(ROUTES.DISH_MODIFY_STACK, dishData);
  }

  return (
    <View style={styles.globalOne}>
      <Card>
        <View style={styles.globalTwo}>
          <Images.logo 
            onPress={onPhotoPress} 
            width={"30%"}
            height={"90%"} 
          ></Images.logo>
          <View width={"70%"}  style={styles.global} >
            <Text style={styles.words} >{name}</Text>
            <Text style={styles.discount}> {I18n.t('priceSymbol')}{price}</Text>
              <View style={styles.globalThree}>
                  <Text style={styles.wordsTwo} marginBottom={30}> {I18n.t('priceSymbol')}{priceDescount} </Text>
                  <Icon  name="local-offer" color={colorPalette.Orange} size={20}></Icon>
                  <Text style={styles.wordsThree} marginBottom={30}>%{discount}</Text>   
              </View>
              <View style={styles.globalFour} >
                  {isVegan && <Icon name="leaf" type='font-awesome-5' color={colorPalette.Black} size={20}></Icon>}
                  {isCeliac && <Icon name="feather" type='font-awesome-5' color={colorPalette.Black} size={20}></Icon>}
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
      fontWeight: "bold",
  },
  wordsTwo :{
    color: colorPalette.Black ,
     fontSize: 18
    },
    wordsThree : {
      color: colorPalette.Orange , 
      fontSize: Theme.font.SMALL,
    },

});
