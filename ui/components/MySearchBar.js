import React from 'react';
import { View } from 'react-native';
import { Icon } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import { Input } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '..';
import { Theme } from '../styles/Theme';
import {CONSTANTS} from '../../config';


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
        placeholder={CONSTANTS.SCREEN_TEXTS.SEARCH}
        inputContainerStyle={{backgroundColor: colorPalette.Cream, 
          borderBottomColor : Theme.color.TRANSPARENT,
          borderRadius : Theme.sizes.SMALL_ROUNDED
        }}
        leftIconContainerStyle={{
          paddingLeft : 10
        }}
        rightIconContainerStyle = {{
          paddingRight : 10
        }}
        inputStyle={{ color: colorPalette.White,
          borderBottomWidth : 0,
          borderColor : Theme.color.TRANSPARENT,
          underlineColorAndroid :Theme.color.TRANSPARENT,
          backgroundColor : Theme.color.TRANSPARENT
        }}
        underlineColorAndroid =  {Theme.color.TRANSPARENT}
      >
      </Input>

    </View>
  )
}

