import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { UserProfileScreenUI } from './UserProfileScreenUI';
import {launchImageLibrary} from 'react-native-image-picker';
import { userWS } from '../../../networking/endpoints';
import { loginUser } from '../../../redux/slices/userReducer';
import { useFormik } from 'formik';

export default function UserProfileScreen({navigation, route, props}) {

  const userName = useSelector(state => state.user.userName);
  const userId = useSelector(state => state.user.userId);
  const userState = useSelector(state => state.user);

  const formik = useFormik({
    initialValues : {
      name : userName,
      userId : userId,
      photo : '',
    },
    async onSubmit(values){
      await onSavePress();
    }
  });

  const dispatch = useDispatch();

  const onSavePress = async () => {
    console.log('On Save PRessed')
    try {
      const result = await userWS.updateUserData(userId, formik.values);
      dispatch(loginUser(result));

    } catch (error) {
      
    }
  }

  const onImgUploadPress = async (e) => {

    try {
      const result = await launchImageLibrary({
        mediaType : 'photo'
      });

      if (result){
        formik.setFieldValue('photo', result.assets[0]);
      }
    } catch (error) {
      console.log('Error:');
      console.log(error);
    }
  }

  return (
    <UserProfileScreenUI
      userName={formik.values.name}
      onNameChangeHandler={formik.handleChange('name')}
      onSavePressHandler={formik.handleSubmit}
      onImgUploadHandler={onImgUploadPress}
    >
    </UserProfileScreenUI>
  )
}

