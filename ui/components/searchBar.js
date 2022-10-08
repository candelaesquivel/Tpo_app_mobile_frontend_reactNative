import React from 'react';
import { View, Image } from 'react-native';
import { Text, Card, Icon } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import { SearchBar } from '@rneui/base';


export default function searchBar() {

  return (
    <View style={{alignItems : 'center'}}> 
    <SearchBar
    lightTheme
  
    placeholderTextColor={colorPalette.White}
    placeholder={'...'}
    inputContainerStyle={{backgroundColor: colorPalette.Cream}}
    inputStyle={{ backgroundColor: colorPalette.Cream }}
    containerStyle={{ backgroundColor: colorPalette.Cream , borderBottomColor: colorPalette.Cream , 
       width : '90%', borderRadius: 5 }}
   leftIconContainerStyle={{width: 30}}
   searchIcon={{size: 25 , color : colorPalette.White}}
   /* falta resolver el tema del icono de la derecha , la cruz no cambia de color . Ver que hacemos con el "filtro"*/
 />

 </View>
  )
}

