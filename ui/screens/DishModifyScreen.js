import { View, Text , ScrollView} from 'react-native'
import React, { useState } from 'react'
import {  Switch } from '@rneui/base'
import { colorPalette } from '../styles/colors'
import I18n from "../../assets/localization/I18n";
import { InputText } from '../components/InputText'
import { MyButton } from '../components/button'
import  Icon from 'react-native-vector-icons/MaterialIcons';
import Carousal from '../components/carousal';



function DishModifyScreen({navigation, props}){
  

    const [dishName, setDishName]= useState(""); 
  return (
    <ScrollView>
        <Carousal></Carousal>
        <Icon name = 'favorite' size={30}></Icon>
         
        <View style={{flexDirection : 'column', alignItems : 'center', marginTop : 20}}>
     
            <View style={{width:'85%', alignItems:'flex-start'}}>
                <Text
                style={{ fontSize: 20, color: colorPalette.Black}}
                >
                    {I18n.t('name')}    
                </Text>
                <InputText 
                placeholder="Tartar de atun" 
                color={colorPalette.White}
                placeholderTextColor = {colorPalette.Black}
                ></InputText>

                <Text
                style={{ fontSize: 20, color: colorPalette.Black}}
                >
                    {I18n.t('price')}    
                </Text>
                <InputText 
                    placeholder="Tartar de atun" 
                    color={colorPalette.White}
                    placeholderTextColor = {colorPalette.Black}
                ></InputText>

                <Text
                style={{ fontSize: 20, color: colorPalette.Black}}
                >
                    {I18n.t('ingredients')}    
                </Text>
                <InputText 
                    placeholder="Tartar de atun" 
                    color={colorPalette.White}
                    placeholderTextColor = {colorPalette.Black}
                ></InputText>

                <Text
                style={{ fontSize: 20, color: colorPalette.Black}}
                >
                    {I18n.t('discount')}    
                </Text>
                

                    <View style={{flexDirection:'row' }}>
                <Text
                style={{ fontSize: 20, color: colorPalette.Black, width:'45%'}}
                >
                    {I18n.t('vegan')}    
                </Text>
                <Switch
                value={true}
                ></Switch>

                </View>
              
                <View style={{height:'3%'}}></View>
                <View style={{flexDirection:'row' }}>
                <Text
                        style={{fontSize: 20, color: colorPalette.Black, width:'45%'}}
                        >
                        {I18n.t('celiac')}    
                        </Text>
                        <Switch
                        value={false}
                        ></Switch>
                </View>
            
                <View style={{height:'3%'}}></View>  
            

                <Text
                style={{ fontSize: 20, color: colorPalette.Black}}
                >
                    {I18n.t('category')} {"PROMOCION"}  
                </Text>
            
                <View style={{flexDirection: 'row' , height : 150 , marginTop : 10 , marginBottom : -90}}>
                    <MyButton
                    title= {I18n.t('chose')} 
                    width='50%'
                    height='30%'
                    ></MyButton>

                    <MyButton
                    title= {I18n.t('addNewCategory')} 
                    width='50%'
                    height='30%'
                    ></MyButton>
                 
                </View>
               
            <View style={{flexDirection: 'column' , width : "100%",height : 100 , alignItems : "center" }}>

            < MyButton
                title= "Eliminar plato"
                width={200}
                height={50}
                ></MyButton>
            </View>
        
                </View>
                     
        </View>
       
    </ScrollView>
    
  )
}

export default DishModifyScreen;