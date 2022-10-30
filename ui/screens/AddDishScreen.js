import { View, Text , ScrollView , StyleSheet , Dimensions} from 'react-native'
import React, { useState } from 'react'
import {  Switch } from '@rneui/base'
import { colorPalette } from '../styles/colors'
import I18n from "../../assets/localization/I18n";
import { InputText } from '../components/InputText'
import { MyButton } from '../components/button'
import  Icon from 'react-native-vector-icons/MaterialIcons';
import Carousal from '../components/carousal';
import { Theme } from '../styles/Theme';

function AddDishScreen() {
   const [dishName, setDishName]= useState(""); 

  const [dishData, setDishData] = useState({
    name : '',
    price : '',
    ingredients : [],
    discount : '',
    isVegan : false,
    isCeliac : false,
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
  
  const onDiscountChange = ({ nativeEvent: { eventCount, target, text} }) => {
    setDishData({...dishData, 'discount' : text})
  }

  const onIsVeganChange = ({nativeEvent : {eventCount, target, value}}) => {
    setDishData({...dishData, 'isVegan' : value})
  }

  const onIsCeliacChange = ({nativeEvent : {eventCount, target, value}}) => {
    setDishData({...dishData, 'isCeliac' : value})
  }

  const onCategoryChange = ({ nativeEvent: { eventCount, target, text} }) => {
    setDishData({...dishData, 'category' : text})
  }

  return (
    <ScrollView>
     <Carousal></Carousal>
        <View style={styles.iconGlobal}>
            <Icon name = 'add' size={30} style={styles.iconPlus}></Icon>
        </View>
        <View style={styles.global}>
         <View style={styles.globalTwo}>
            <Text style={styles.words}>
                {I18n.t('name')}    
            </Text>
            <InputText 
            placeholder=""
            color={colorPalette.White}
            placeholderTextColor = {colorPalette.Black}
            ></InputText>

            <Text style={styles.words}>
                {I18n.t('price')}        
            </Text>
            <InputText 
            placeholder=""
            color={colorPalette.White}
            placeholderTextColor = {colorPalette.Black}
            ></InputText>

            <Text style={styles.words}>
                {I18n.t('ingredients')}        
            </Text>
            <InputText 
            placeholder=""
            color={colorPalette.White}
            placeholderTextColor = {colorPalette.Black}
            ></InputText>

            <Text style={styles.words}>
                {I18n.t('discount')}          
            </Text>
            <Text style={styles.words}>
                STEPPER          
            </Text>
           
             <View style={styles.switchContainer}>
                <Text style={styles.words}>
                    {I18n.t('vegan')}    
                </Text>
                <View style={{width:'18%'}}></View>
                <Switch
                    value={true} />
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.words}>
                    {I18n.t('celiac')}       
                </Text>
                <Switch
                    value={true} />
            </View>
            <Text style={styles.words}>
             {I18n.t('category')} {""}      
            </Text>

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
                title={I18n.t('save')}
                width={ Dimensions.get("window").width*0.5}
                height={Dimensions.get("window").height*0.07}
                ></MyButton>

            </View>
        
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