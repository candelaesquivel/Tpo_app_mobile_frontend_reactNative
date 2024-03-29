import { useState } from "react";
import { CONSTANTS } from "../../../config";
import { ROUTES } from "../..";
import { ToastAndroid } from "react-native"
import { CreateAccountOwnerUI } from "./CreateAccountOwnerUI";
import { authWS } from "../../../networking/endpoints";
import { useFormik } from 'formik';
import { authSchemas } from "../../formSchemas/authSchemas";

export function CreateAccountOwnerScreen({navigation, props}) {

    const formik = useFormik({
      initialValues : {
        email : '',
        password : '',
        repeatPassword : '',
      },
      validationSchema : authSchemas.createAccount,
      onSubmit(values) {
        onRegisterPress(values);
      }
    });

    const onRegisterPress = async (e) => {

      const userData = {
        email : formik.values.email,
        password : formik.values.password,
      };

      try {
        const result = await authWS.registerOwner(userData);

        if (result){
          setTimeout(() => {
            ToastAndroid.show(CONSTANTS.SCREEN_TEXTS.ACCOUNT_CREATED, ToastAndroid.SHORT);
            navigation.navigate(ROUTES.LOGIN_OWNER);
          }, 200);
      }else{

      }
      } catch (error) {
        
      }

      
    }

    return (
      <CreateAccountOwnerUI
        email = {formik.values.email}
        password = {formik.values.password}
        repeatPassword = {formik.values.repeatPassword}
        onRepeatPassHandler={formik.handleChange('repeatPassword')}
        onPasswordHandler={formik.handleChange('password')}
        onEmailHandler={formik.handleChange('email')}
        onRegisterHandler={formik.handleSubmit}
        emailError={formik.errors.email}
        passwordError={formik.errors.password}
        repeatPasswordError={formik.errors.repeatPassword}
      >
      </CreateAccountOwnerUI>
    )
}

export default CreateAccountOwnerScreen;

