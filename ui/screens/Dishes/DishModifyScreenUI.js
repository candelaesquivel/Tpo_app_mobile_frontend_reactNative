
import React, { useState } from 'react'
import { CONSTANTS } from "../../../config"
import { Theme } from "../../styles/Theme"
import { colorPalette } from "../../styles/colors"
import  Icon from 'react-native-vector-icons/MaterialIcons';
import { View, ScrollView , StyleSheet , Dimensions} from 'react-native'
import Carousal from '../../components/carousal';
import { MyButton } from '../../components/button';
import { DishForm } from './DishForm';

const DishModifyScreenUI = ({
  
  dishDataName,
  dishDataprice,
  dishDataingredients,
  dishDatadiscounts,
  dishDataisVegan,
  dishDataisGlutenFree,
  onSavePressHandler,
  onDeletePressHandler,
  onNameChangedHandler,
  onPriceChangedHandler,
  onIngredientChangeHandler,
  onDiscountChangeHandlerHandler,
  onIsVeganChangeHandler,
  onIsGlutenFreeChangeHandler,
  onDeleteOptionsHandler,
  onDeleteModalTouchHandler,

  props}) => {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  return (
    <ScrollView>
    {/* TODO :  <AlertWithOptions isVisible={showConfirmDelete} onOptionPress={onDeleteOptionsHandler}></AlertWithOptions>
    <CustomAlert isVisible={showDeleteModal} onRequestCloseHandler={onDeleteModalTouchHandler} msgText={CONSTANTS.SCREEN_TEXTS.NOT_FAVORITES}></CustomAlert>  */}
   <Carousal></Carousal>
      <View style={styles.iconGlobal}>
          <Icon name = 'add' size={30} style={styles.iconPlus}></Icon>
      </View>
      <View style={styles.global}>

          <DishForm
            name={dishDataName} onNameChanged={onNameChangedHandler}
            price={dishDataprice} onPriceChanged={onPriceChangedHandler}
            ingredients={dishDataingredients} onIngredientChange={onIngredientChangeHandler}
            discount={dishDatadiscounts} onDiscountChange={onDiscountChangeHandlerHandler}
            isVegan={dishDataisVegan} onIsVeganChange={onIsVeganChangeHandler}
            isGlutenFree={dishDataisGlutenFree} onIsGlutenFreeChange={onIsGlutenFreeChangeHandler}
          ></DishForm>


          <View style={styles.buttons}>
                  <MyButton
                  title= {CONSTANTS.SCREEN_TEXTS.CHOOSE_LABEL} 
                  width={ Dimensions.get("window").width*0.4}
                  height={Dimensions.get("window").height*0.07}
                  fontSizeTitle={18}
                  ></MyButton>

                  <MyButton
                  title= {CONSTANTS.SCREEN_TEXTS.ADD_NEW_CATEGORY_LABEL} 
                  width={ Dimensions.get("window").width*0.4}
                  height={Dimensions.get("window").height*0.07}
                  ></MyButton>
               
          </View>
             
          <View style={styles.buttonsTwo}>

          < MyButton
            onPress={onSavePressHandler}
              title={CONSTANTS.SCREEN_TEXTS.SAVE_LABEL}
              width={ Dimensions.get("window").width*0.5}
              height={Dimensions.get("window").height*0.07}
              ></MyButton>

          < MyButton
              onPress = {onDeletePressHandler}
              title= {CONSTANTS.SCREEN_TEXTS.DELETE_DISH_LABEL}
              width={ Dimensions.get("window").width*0.5}
              height={Dimensions.get("window").height*0.07}
              ></MyButton>
          </View>
      
      </View>
    </ScrollView>
  )
}


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

export {DishModifyScreenUI}