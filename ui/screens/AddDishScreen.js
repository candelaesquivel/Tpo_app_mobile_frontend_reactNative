import { View, ScrollView , StyleSheet , Dimensions} from 'react-native'
import React, { useState } from 'react'
import { colorPalette } from '../styles/colors'
import I18n from "../../assets/localization/I18n";
import { MyButton } from '../components/button'
import  Icon from 'react-native-vector-icons/MaterialIcons';
import Carousal from '../components/carousal';
import { Theme } from '../styles/Theme';
import createDish from '../../networking/createDish';
import { useSelector } from 'react-redux';
import { CONSTANTS } from '../../config';
import { CustomAlert } from '../components/CustomAlert';
import { DishForm } from './Dishes/DishForm';

function AddDishScreen({navigation, props}) {

  const [showCreateDishAlert, setShowCreateDish] = useState(false);
  const currRestaurant = useSelector(state => state.session.restaurantSelectedId);

  const [dishData, setDishData] = useState({
    name : '',
    price : '',
    ingredients : '',
    discounts : 0,
    isVegan : false,
    isGlutenFree : false,
    photos : [],
    category : 'Plato Caliente',
  });

  const onNameChanged = ({ nativeEvent: { eventCount, target, text} }) => {
    setDishData({...dishData, 'name' : text})
  }

  const onPriceChanged = ({ nativeEvent: { eventCount, target, text} }) => {
    setDishData({...dishData, 'price' : text})
  }

  const onIngredientChange = ({ nativeEvent: { eventCount, target, text} }) => {
    const str = text.split(',');
    setDishData({...dishData, 'ingredients' : str})
  }
  
  const onDiscountChange = (value) => {
    setDishData({...dishData, 'discounts' : value})
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

  const onDismissAlert = (e) => {
    navigation.goBack();
  }

  const onSavePress = async (event) => {
    const status = await createDish(currRestaurant, dishData);

    if (status === 201)
    {
      setShowCreateDish(true);
      console.log('Dish Created');
    }
    else
      console.log("Status: ", status);
  }

  return (
    <ScrollView>
      <CustomAlert 
        isVisible={showCreateDishAlert} 
        msgText={CONSTANTS.SCREEN_TEXTS.DISH_CREATED_MSG}
        iconName='restaurant'
        onRequestCloseHandler={onDismissAlert}>
      </CustomAlert>
     <Carousal></Carousal>
        <View style={styles.iconGlobal}>
            <Icon name = 'add' size={30} style={styles.iconPlus}></Icon>
        </View>
        <View style={styles.global}>
            <DishForm
              name={dishData.name} onNameChanged={onNameChanged}
              price={dishData.price} onPriceChanged={onPriceChanged}
              ingredients={dishData.ingredients} onIngredientChange={onIngredientChange}
              discount={dishData.discounts} onDiscountChange={onDiscountChange}
              isVegan={dishData.isVegan} onIsVeganChange={onIsVeganChange}
              isGlutenFree={dishData.isGlutenFree} onIsGlutenFreeChange={onIsGlutenFreeChange}
            ></DishForm>

            <View style={styles.buttons}>
                    <MyButton
                    title= {CONSTANTS.SCREEN_TEXTS.CHOOSE_LABEL} 
                    width={ Dimensions.get("window").width*0.4}
                    height={Dimensions.get("window").height*0.07}
                    ></MyButton>

                    <MyButton
                    title= {CONSTANTS.SCREEN_TEXTS.ADD_NEW_CATEGORY_LABEL} 
                    width={ Dimensions.get("window").width*0.4}
                    height={Dimensions.get("window").height*0.07}
                    ></MyButton>
                 
            </View>
               
            <View style={styles.buttonsTwo}>

            < MyButton
                onPress={onSavePress}
                title={CONSTANTS.SCREEN_TEXTS.SAVE_LABEL}
                width={ Dimensions.get("window").width*0.5}
                height={Dimensions.get("window").height*0.07}
                ></MyButton>

            </View>
         </View>
    </ScrollView>
    
  )
}

export default AddDishScreen;


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