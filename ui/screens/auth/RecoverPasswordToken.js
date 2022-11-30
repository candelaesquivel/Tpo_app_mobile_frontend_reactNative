import React from 'react'
import {RecoverPasswordTokenUI} from './RecoverPasswordTokenUI'
import { useFormik } from 'formik';
import { authSchemas } from '../../formSchemas/authSchemas';

export default function RecoverPasswordToken(navigation , props) {

  const formik = useFormik({
    initialValues : {
      token : "",
      password : "",
    },
    validationSchema : authSchemas.tokenForgotPassword,
    
  });

  

  return (
    <RecoverPasswordTokenUI
    token = {formik.values.token}
    password = {formik.values.password}
    onTokenHandler={formik.handleChange('token')}
    onPasswordHandler={formik.handleChange('password')}
    tokenError={formik.errors.token}
    passwordError={formik.errors.password}
    ></RecoverPasswordTokenUI>
  )
}