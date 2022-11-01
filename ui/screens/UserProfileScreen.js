import { View, Text, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import I18n from "../../assets/localization/I18n";
import { colorPalette } from '../styles/colors';
import { InputText } from '../components/InputText';
import { Icon } from '@rneui/base'
import { MyButton } from '../components/button';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function UserProfileScreen({navigation, route, props}) {

  const userName = useSelector(state => state.session.userName);
  const [name, setName] = useState(userName);

  return (
    <View style={style.container}>
      <Text style={style.nameLabel}>{I18n.t('name')}</Text>

      <InputText color={colorPalette.White} defaultValue={userName} textColor={colorPalette.Black}></InputText>

      <View style={{flexDirection:'row' ,marginBottom:40}}>
          <Text style={style.addPictureLabel}>{I18n.t('addPicture')} </Text>
          <Icon name='add-photo-alternate' Type='material-community' size={30} color={colorPalette.Orange}></Icon>
      </View>
      <View style={style.btnContainer}>
        <MyButton title='Guardar' width='30%' height='60%'></MyButton>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container : {
    alignItems : 'flex-start',
    width : Dimensions.get('window').width,
    height : Dimensions.get('window').height,
    marginTop : 10,
  },
  nameLabel : {
    marginBottom : 20,
    marginLeft : 20,
    fontSize : 20,
    color : colorPalette.Black
  },
  addPictureLabel :{
    fontSize : 20,
    color : colorPalette.Black,
    width : Dimensions.get('window').width * 0.45,
    marginLeft : 20
  },
  btnContainer : {
    alignSelf : 'center'
  }
})