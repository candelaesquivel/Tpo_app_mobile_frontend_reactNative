import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { UserProfileScreenUI } from './UserProfileScreenUI';
import {launchImageLibrary} from 'react-native-image-picker';
import { userWS } from '../../../networking/endpoints';
import { loginUser } from '../../../redux/slices/userReducer';
import { useFormik } from 'formik';
import { useToast } from 'native-base';
import { CONSTANTS } from '../../../config';
import { ROUTES } from '../..';
import { userSchemas } from '../../formSchemas/userSchema';

export default function UserProfileScreen({navigation, route, props}) {

  const userName = useSelector(state => state.user.userName);
  const userId = useSelector(state => state.user.userId);
  const userState = useSelector(state => state.user);
  const userPictures = useSelector(state => state.user.pictures);
  const userRole = useSelector(state => state.user.role);

  const formik = useFormik({
    initialValues : {
      name : userName,
      userId : userId,
      pictures : userPictures,
    },
    validationSchema : userSchemas.userName,
    async onSubmit(values){
      await onSavePress();
    }
  });

  const toast = useToast();

  const dispatch = useDispatch();

  const onSavePress = async () => {

    try {
      const result = await userWS.updateUserData(userId, formik.values, dispatch);

      if (result){
        dispatch(loginUser(result));

        setTimeout(() => {
          if (userRole === CONSTANTS.ROLES.USER_ROLE)
            navigation.navigate(ROUTES.HOME_NORMAL_USER);
          else
            navigation.navigate(ROUTES.OWNER_HOME);
        }, 200);

      }


    } catch (error) {
      
    }
  }

  const onImgUploadPress = async (e) => {

    try {
      const result = await launchImageLibrary({
        mediaType : 'photo',
        includeBase64 : true,
      });

      if (result){
        formik.setFieldValue('pictures', result.assets);
      }
    } catch (error) {
    }
  }

  return (
    <UserProfileScreenUI
      userName={formik.values.name}
      userNameError={formik.errors.name}
      onNameChangeHandler={formik.handleChange('name')}
      onSavePressHandler={formik.handleSubmit}
      onImgUploadHandler={onImgUploadPress}
    >
    </UserProfileScreenUI>
  )
}

