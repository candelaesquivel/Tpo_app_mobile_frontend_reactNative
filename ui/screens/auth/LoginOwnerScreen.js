import { useEffect, useState } from "react";
import { ROUTES } from "../..";
import { useSelector, useDispatch } from 'react-redux'

import { LoginOwnerUI } from "./LoginOwnerUI";
import { loginUser, logoutUser } from "../../../redux/slices/userReducer";
import { authWS } from "../../../networking/endpoints";
import { useFormik } from 'formik';
import { authSchemas } from "../../formSchemas/authSchemas";

function LoginOwnerScreen({navigation, props}){

  const isLogged = useSelector(state => state.user.isLogged);
  const formik = useFormik({
    initialValues : {
      email : '',
      password : '',
    },
    validationSchema : authSchemas.login,
    onSubmit(values) {
      onLoginPressed();
    }
  });

  const dispatch = useDispatch();

    useEffect(() => {
        if (isLogged)
          navigation.navigate(ROUTES.OWNER_HOME);

    }, [navigation, isLogged])

    const onRecoverTouched = (event) => {
        navigation.navigate(ROUTES.FORGET_PASSWORD);
    }

    const onCreateTouched = (event) => {
        navigation.navigate(ROUTES.CREATE_ACCOUNT_OWNER);
    }

    const onLoginPressed = async () => {

      const userData = {
        email : formik.values.email,
        password : formik.values.password,
      };

        try {
          var userDataResp = await authWS.loginOwner(userData);
        } catch (error) {
          console.log('Error: ', error);
          dispatch(logoutUser());
        }

        if (userDataResp)
          dispatch(loginUser(userDataResp));
        else{
          dispatch(logoutUser());
        }

        return;
    }

    return (
      <LoginOwnerUI
        email={formik.values.email}
        password={formik.values.password}
        onEmailHandler={formik.handleChange('email')}
        onPassHandler={formik.handleChange('password')}
        onLoginHandler={formik.handleSubmit}
        onRecoverLinkHandler={onRecoverTouched}
        onCreateLinkHandler={onCreateTouched}
        emailError={formik.errors.email}
        passwordError={formik.errors.password}
      ></LoginOwnerUI>
    )
}

export default LoginOwnerScreen;


