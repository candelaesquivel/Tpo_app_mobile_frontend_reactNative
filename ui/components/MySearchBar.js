import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Text, Card, Icon } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import { SearchBar } from '@rneui/themed';
import { Input } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '..';
import I18n from '../../assets/localization/I18n';


export default function MySearchBar() {

  const navigation = useNavigation();
  const onFilterIconPress = (event) => {
    navigation.navigate(ROUTES.FILTERS_SCREEN_STACK);
  }

  return (
    <View style={{alignItems : 'center' , width: '100%' , marginTop: "6%"}}>

      <Input
        leftIcon={<Icon name = 'search' color={colorPalette.White}></Icon>}
        rightIcon={<Icon onPress={onFilterIconPress} name = 'filter-list' color={colorPalette.White}></Icon>}
        placeholderTextColor={colorPalette.White}
        placeholder={'Buscar'}
        inputContainerStyle={{backgroundColor: colorPalette.Cream, 
          borderBottomColor : I18n.t('transparent'),
          borderRadius : 5
        }}
        leftIconContainerStyle={{
          paddingLeft : 10
        }}
        rightIconContainerStyle = {{
          paddingRight : 10
        }}
        inputStyle={{ color: colorPalette.White,
          borderBottomWidth : 0,
          borderColor : I18n.t('transparent'),
          underlineColorAndroid :I18n.t('transparent'),
          backgroundColor : I18n.t('transparent')
        }}
        underlineColorAndroid =  {I18n.t('transparent')}
      >
      </Input>

    </View>
  )
}

