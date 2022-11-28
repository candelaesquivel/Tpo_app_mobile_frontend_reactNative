import React from 'react';
import { View } from 'react-native';
import { Icon } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import { Input } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '..';


export default function MySearchBar({
  searchText = '',
  textError = '',
  onTextChangeHandler = (text) => {},
  ...props
}) {

  const navigation = useNavigation();
  const onFilterIconPress = (event) => {
    navigation.navigate(ROUTES.FILTERS_SCREEN_STACK);
  }

  return (
    <View style={{alignItems : 'center' , width: '100%' , marginTop: "6%"}}>
      <Input
        defaultValue={searchText}
        onChangeText={onTextChangeHandler}
        errorMessage = {textError}
        leftIcon={<Icon name = 'search' color={colorPalette.White}></Icon>}
        rightIcon={<Icon onPress={onFilterIconPress} name = 'filter-list' color={colorPalette.White}></Icon>}
        placeholderTextColor={colorPalette.White}
        placeholder={'Buscar'}
        inputContainerStyle={{backgroundColor: colorPalette.Cream, 
          borderBottomColor : 'transparent',
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
          borderColor : 'transparent',
          underlineColorAndroid :'transparent',
          backgroundColor : 'transparent'
        }}
        underlineColorAndroid =  {'transparent'}
      >
      </Input>

    </View>
  )
}

