import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateUserData } from '../../../networking/updateUserData';
import { updateUserDataAction } from '../../../redux/actions';
import { ToastAndroid } from 'react-native';
import { CONSTANTS } from '../../../config';
import { UserProfileScreenUI } from './UserProfileScreenUI';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { uploadUserImg } from '../../../networking/uploadUserImg';

export default function UserProfileScreen({navigation, route, props}) {

  const userName = useSelector(state => state.session.userName);
  const userId = useSelector(state => state.session.userId);

  const [userData, setUserData] = useState({
    name : userName,
    userId : userId,
    photo : null,
  });

  const dispatch = useDispatch();

  const [name, setName] = useState(userName);

  const onSavePress = async (e) => {

    // const result = await updateUserData(userId, userData);

    // if (result)
    // {
    //   dispatch(updateUserDataAction(result));
    //   ToastAndroid.show(CONSTANTS.SCREEN_TEXTS.USER_DATA_UPDATED, ToastAndroid.SHORT);
    // }

    try {
      console.log('Tryying Upload');
      const result = await uploadUserImg(userId, userData.photo);
      console.log('Upload finished')
    } catch (error) {
      
    }
  }

  const onNameChange = ({ nativeEvent: { eventCount, target, text} }) => {
    setName(text);
  }

  const onImgUploadPress = async (e) => {

    try {
      const result = await launchImageLibrary({
        mediaType : 'photo'
      });

      if (result){
        console.log('Not Error:');
        setUserData({
          ...userData,
          photo : result.assets[0],
        });
      }
    } catch (error) {
      console.log('Error:');
      console.log(error);
    }
  }

  console.log('User Data: ', userData);

  return (
    <UserProfileScreenUI
      userName={userName}
      onNameChangeHandler={onNameChange}
      onSavePressHandler={onSavePress}
      onImgUploadHandler={onImgUploadPress}
    >
    </UserProfileScreenUI>
  )
}

