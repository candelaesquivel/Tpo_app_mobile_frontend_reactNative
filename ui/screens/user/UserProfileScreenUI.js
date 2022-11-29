import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { colorPalette } from '../../styles/colors';
import { InputText } from '../../components/InputText';
import { Icon } from '@rneui/base'
import { MyButton } from '../../components/button';
import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../../config';
import { Theme } from '../../styles/Theme';

const UserProfileScreenUI = ({
    userName = '',
    userNameError,
    onNameChangeHandler = (text) => {},
    onSavePressHandler = () => {},
    onImgUploadHandler = (image) => {},
    props}) => {
  
    return (
        <View style={style.container}>
        <Text style={style.nameLabel}>{CONSTANTS.SCREEN_TEXTS.NAME_LABEL}</Text>   
             
        <InputText
         errorMessage = {userNameError}
          onChangeText={onNameChangeHandler}
          color={colorPalette.White} 
          defaultValue={userName} 
          textColor={colorPalette.Black}>
        </InputText>
  
        <View style={{flexDirection:'row' ,marginBottom:40}}>
            <Text style={style.addPictureLabel}>{CONSTANTS.SCREEN_TEXTS.ADD_PICTURE_LABEL} </Text>
            <Icon 
              name='add-photo-alternate' 
              Type='material-community' size={50} 
              color={colorPalette.Orange}
              onPress={onImgUploadHandler}
              >
            </Icon>
        </View>
        <View style={style.btnContainer}>
          <MyButton title={CONSTANTS.SCREEN_TEXTS.SAVE_LABEL} width='30%' height='60%' onPress={onSavePressHandler}></MyButton>
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
      fontSize : Theme.font.MEDIUM,
      color : colorPalette.Black
    },
    addPictureLabel :{
      fontSize : Theme.font.MEDIUM,
      color : colorPalette.Black,
      width : Dimensions.get('window').width * 0.45,
      marginLeft : 20
    },
    btnContainer : {
      alignSelf : 'center'
    }
  })
  
  export {UserProfileScreenUI}