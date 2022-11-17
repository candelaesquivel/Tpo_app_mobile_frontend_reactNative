import { View, Text, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import I18n from "../../assets/localization/I18n";
import { colorPalette } from '../styles/colors';
import { InputText } from '../components/InputText';
import { Icon } from '@rneui/base'
import { MyButton } from '../components/button';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateUserData } from '../../networking/updateUserData';
import { updateUserDataAction } from '../../redux/actions';
import { ToastAndroid } from 'react-native';
import { CONSTANTS } from '../../config';
import { UserProfileScreenUI } from './profile/UserProfileScreenUI';

export default function UserProfileScreen({navigation, route, props}) {

  const userName = useSelector(state => state.session.userName);
  const userId = useSelector(state => state.session.userId);

  const dispatch = useDispatch();

  const [name, setName] = useState(userName);

  const onSavePress = async (e) => {

    const result = await updateUserData(userId, {name : name});

    if (result)
    {
      dispatch(updateUserDataAction(result));
      ToastAndroid.show(CONSTANTS.SCREEN_TEXTS.USER_DATA_UPDATED, ToastAndroid.SHORT);
    }
  }

  const onNameChange = ({ nativeEvent: { eventCount, target, text} }) => {
    setName(text);
  }

  return (
    <UserProfileScreenUI>
      userName={userName}
      onNameChangeHandler={onNameChange}
      onSavePressHandler={onSavePress}
    </UserProfileScreenUI>
  )
}

