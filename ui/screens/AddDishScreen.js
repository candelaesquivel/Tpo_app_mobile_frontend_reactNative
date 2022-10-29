import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Icon, Switch } from '@rneui/base'
import { colorPalette } from '../styles/colors'
import I18n from "../../assets/localization/I18n";
import { InputText } from '../components/InputText'
import { MyButton } from '../components/button'


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
    <View style={{flexDirection : 'column', alignItems : 'center', marginTop : 23}}>
        <View style={{width:'85%', alignItems:'flex-start'}}>
          <Text
          style={{ fontSize: 20, color: colorPalette.Black}}
          >
              {I18n.t('name')}    
          </Text>
          <InputText textColor={colorPalette.Black} color={colorPalette.White} onChange={onNameChanged}></InputText>

            <Text
            style={{ fontSize: 20, color: colorPalette.Black}}
            >
               {I18n.t('price')}    
            </Text>
            <InputText textColor={colorPalette.Black} color={colorPalette.White} onChange={onPriceChanged}></InputText>

            <Text
            style={{ fontSize: 20, color: colorPalette.Black}}
            >
               {I18n.t('ingredients')}    
            </Text>
            <InputText textColor={colorPalette.Black} color={colorPalette.White} onChange={onIngredientChange}></InputText>

            <Text
            style={{ fontSize: 20, color: colorPalette.Black}}
            >
               {I18n.t('discount')}    
            </Text>
             <InputText textColor={colorPalette.Black} color={colorPalette.White} onChange={onDiscountChange}></InputText>

             <View style={{flexDirection:'row' }}>
            <Text
            style={{ fontSize: 20, color: colorPalette.Black, width:'45%'}}
            >
               {I18n.t('vegan')}    
            </Text>
            <Switch value={dishData.isVegan} onChange={onIsVeganChange}></Switch>

            </View>
            <View style={{height:'3%'}}></View>
            <View style={{flexDirection:'row' }}>
            <Text
              style={{fontSize: 20, color: colorPalette.Black, width:'45%'}}
              >
              {I18n.t('celiac')}    
              </Text>
              <Switch value={dishData.isCeliac} onChange={onIsCeliacChange}></Switch>
            </View>
            <View style={{height:'3%'}}></View>  
            <View style={{flexDirection:'row' }}>
            <Text
                    style={{fontSize: 20, color: colorPalette.Black, width:'45%'}}
                    >
                    {I18n.t('addPicture')}    
                    </Text>
                    <Icon name='add-photo-alternate' Type='material-community' size={30} color={colorPalette.Orange}></Icon>
            </View>

            <Text
            style={{ fontSize: 20, color: colorPalette.Black}}
            >
               {I18n.t('category')}    
            </Text>
            <View style={{flexDirection: 'row', height:'30%'}}>
            <MyButton
            title= {I18n.t('chose')} 
            width='30%'
            height='30%'
            ></MyButton>

            <MyButton
            title= {I18n.t('addNewCategory')} 
            width='30%'
            height='30%'
            ></MyButton>

            </View>
            </View>
    </View>
  )
}

export default AddDishScreen;