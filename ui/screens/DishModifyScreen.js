import { View, Text , ScrollView , StyleSheet , Dimensions} from 'react-native'
import React, { useState } from 'react'
import {  Switch , Slider} from '@rneui/base'
import { colorPalette } from '../styles/colors'
import I18n from "../../assets/localization/I18n";
import { InputText } from '../components/InputText'
import { MyButton } from '../components/button'
import  Icon from 'react-native-vector-icons/MaterialIcons';
import Carousal from '../components/carousal';
import { Theme } from '../styles/Theme';
import { useSelector } from 'react-redux';
import updateDish from '../../networking/updateDish'
import { deleteDish } from '../../networking/deleteDish';
import { CustomAlert } from '../components/CustomAlert';
import {ROUTES} from '../';
import { AlertWithOptions } from '../components/AlertWithOptions';
import { CONSTANTS } from '../../config';
import { DishForm } from './Dishes/DishForm';

function DishModifyScreen({navigation, route, props}){
  
   
    const dishId = route.params.id;

  const [dishData, setDishData] = useState({
    name : route.params.name,
    price : route.params.price,
    isVegan : route.params.isVegan,
    isGlutenFree : route.params.isGlutenFree,
    category : route.params.category,
    ingredients : route.params.ingredients

  });
  const [discount, setDiscount] = useState(dishData.discounts);

  const currRestaurant = useSelector(state => state.session.restaurantSelectedId);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);


  const onSavePress = async (event) => {
    const result = await updateDish(currRestaurant, dishId, dishData);
  }
  
  const onDeletePress = (event) => {
    setShowConfirmDelete(true);
  }

  const onDeleteConfirmTouch = (event) => {
    setShowConfirmDelete(false);
  }

  const onDeleteModalTouch = (event) => {
    navigation.navigate(ROUTES.MENU_RESTAURANT_OWNER_STACK);
  }

  const onDeleteOptionsHandler = async (option) => {
    console.log("Option: ", option)
    if (option == CONSTANTS.SCREEN_TEXTS.YES){
      const result = await deleteDish(currRestaurant, dishId);

      console.log(result);
      if (result === 200)
        navigation.navigate(ROUTES.MENU_RESTAURANT_OWNER_STACK);

    }
    else if (option == CONSTANTS.SCREEN_TEXTS.NO){
      setShowConfirmDelete(false);
    }
  }

  const onNameChanged = ({ nativeEvent: { eventCount, target, text} }) => {
    setDishData({...dishData, 'name' : text})
  }

  const onPriceChanged = ({ nativeEvent: { eventCount, target, text} }) => {
    setDishData({...dishData, 'price' : text})
  }

  const onIngredientChange = ({ nativeEvent: { eventCount, target, text} }) => {
    text.replace(' ', '')
    setDishData({...dishData, 'ingredients' : text})
  }
  
  const onDiscountChange = ({ nativeEvent: { eventCount, target, text} }) => {
    setDishData({...dishData, 'discount' : text})
  }

  const onIsVeganChange = ({nativeEvent : {eventCount, target, value}}) => {
    setDishData({...dishData, 'isVegan' : value})
  }

  const onIsGlutenFreeChange = ({nativeEvent : {eventCount, target, value}}) => {
    setDishData({...dishData, 'isGlutenFree' : value})
  }

  const onCategoryChange = ({ nativeEvent: { eventCount, target, text} }) => {
    setDishData({...dishData, 'category' : text})
  }

  return (

    <ScrollView>
      <AlertWithOptions isVisible={showConfirmDelete} onOptionPress={onDeleteOptionsHandler}></AlertWithOptions>
      <CustomAlert isVisible={showDeleteModal} onRequestCloseHandler={onDeleteModalTouch} msgText={CONSTANTS.SCREEN_TEXTS.NOT_FAVORITES}></CustomAlert>
     <Carousal></Carousal>
        <View style={styles.iconGlobal}>
            <Icon name = 'add' size={30} style={styles.iconPlus}></Icon>
        </View>
        <View style={styles.global}>

            <DishForm
              name={dishData.name} onNameChanged={onNameChanged}
              price={dishData.price} onPriceChanged={onPriceChanged}
              ingredients={dishData.ingredients} onIngredientChange={onIngredientChange}
              discount={dishData.discount} onDiscountChange={onDiscountChange}
              isVegan={dishData.isVegan} onIsVeganChange={onIsVeganChange}
              isGlutenFree={dishData.isGlutenFree} onIsGlutenFreeChange={onIsGlutenFreeChange}
            ></DishForm>


            <View style={styles.buttons}>
                    <MyButton
                    title= {I18n.t('chose')} 
                    width={ Dimensions.get("window").width*0.4}
                    height={Dimensions.get("window").height*0.07}
                    fontSizeTitle={18}
                    ></MyButton>

                    <MyButton
                    title= {I18n.t('addNewCategory')} 
                    width={ Dimensions.get("window").width*0.4}
                    height={Dimensions.get("window").height*0.07}
                    ></MyButton>
                 
            </View>
               
            <View style={styles.buttonsTwo}>

            < MyButton
              onPress={onSavePress}
                title={I18n.t('save')}
                width={ Dimensions.get("window").width*0.5}
                height={Dimensions.get("window").height*0.07}
                ></MyButton>

            < MyButton
                onPress = {onDeletePress}
                title= {I18n.t('deleteDish')}
                width={ Dimensions.get("window").width*0.5}
                height={Dimensions.get("window").height*0.07}
                ></MyButton>
            </View>
        
        </View>
    </ScrollView>
    
  )
}

export default DishModifyScreen;

const styles = StyleSheet.create({
    iconGlobal :{
        flexDirection:"row-reverse"
    }
    ,
    iconPlus:{
        marginRight: "3%" , 
        marginTop : "3%" 
    },
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

