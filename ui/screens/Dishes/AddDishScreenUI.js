import { View, ScrollView , StyleSheet , Dimensions} from 'react-native'
import React, { useState } from 'react'
import { colorPalette } from '../../styles/colors'
import I18n from "../../../assets/localization/I18n";
import { MyButton } from '../../components/button'
import  Icon from 'react-native-vector-icons/MaterialIcons';
import Carousal from '../../components/carousal';
import { Theme } from '../../styles/Theme';
import { dishesWS } from '../../../networking/endpoints';
import { useSelector } from 'react-redux';
import { CONSTANTS } from '../../../config';
import { CustomAlert } from '../../components/CustomAlert';
import{DishForm} from "./DishForm"

  
export const AddDishScreenUI = ({
    name = '',
    price = 0,
    ingredients = '',
    discount = 0,
    isVegan = false,
    isGlutenFree = false,

    onIsGlutenFreeChangeHandler,
    onIsVeganChangeHandler,
    onSavePressHandler,
    onDismissAlertHandler,
    onNameChangedhandler,
    onPriceChangedHandler,
    onDiscountChangeHandler,
    onIngredientChangeHandler,

    props
  }) => {
  
    const [showCreateDishAlert, setShowCreateDish] = useState(false);

   

    return (
        <ScrollView>
           <CustomAlert 
            isVisible={showCreateDishAlert} 
            msgText={CONSTANTS.SCREEN_TEXTS.DISH_CREATED_MSG}
            iconName='restaurant'
            onRequestCloseHandler={onDismissAlertHandler}>
          </CustomAlert>
          <Carousal></Carousal>
            <View style={styles.iconGlobal}>
                <Icon name = 'add' size={30} style={styles.iconPlus}></Icon>
            </View>
            <View style={styles.global}>
                <DishForm
                  name={name} onNameChanged={onNameChangedhandler}
                  price={price} onPriceChanged={onPriceChangedHandler}
                  ingredients={ ingredients} onIngredientChange={onIngredientChangeHandler}
                  discount={discount} onDiscountChange={onDiscountChangeHandler}
                  isVegan={isVegan} onIsVeganChange={onIsVeganChangeHandler}
                  isGlutenFree={isGlutenFree} onIsGlutenFreeChange={onIsGlutenFreeChangeHandler}
                ></DishForm>
    
                <View style={styles.buttons}>
                        <MyButton
                        title= {I18n.t('chose')} 
                        width={ Dimensions.get("window").width*0.4}
                        height={Dimensions.get("window").height*0.07}
                        ></MyButton>
    
                        <MyButton
                        title= {I18n.t('addNewCategory')} 
                        width={ Dimensions.get("window").width*0.4}
                        height={Dimensions.get("window").height*0.07}
                        ></MyButton>
                     
                </View>
                   
                <View style={styles.buttonsTwo}>
    
                < MyButton
                    onPress={onSavePressHandler}
                    title={I18n.t('save')}
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
        marginRight: 3 , 
        marginTop : 3 
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
        marginLeft : 4 , 
        marginBottom : 3
    },
    switchContainer : {
        flexDirection:'row',
        marginBottom : 3
         
    },
    buttons : {
        flexDirection: 'row' , 
        marginLeft : 6
        },
  
    buttonsTwo : {
        flexDirection: 'column' , 
        alignItems : "center" ,
        width : "100%",
        height : "75%" , 
        
    },
  
  });
 