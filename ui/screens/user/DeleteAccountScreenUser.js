
import { useDispatch, useSelector } from "react-redux";
import { CONSTANTS } from "../../../config";
import { ToastAndroid } from "react-native";
import {DeleteAccountScreenUI} from './DeleteAccountScreenUI';
import { userWS } from "../../../networking/endpoints";
import { logoutUser } from "../../../redux/slices/userReducer";
import { useFormik } from "formik";
import { authSchemas } from "../../formSchemas/authSchemas";

function DeleteAccountScreenUser({navigation, props}){

  const userId = useSelector(state => state.user.userId);
  const dispatcher = useDispatch();

  const formik = useFormik({
    initialValues : {
      email : '',
      password : '',
    },
    validationSchema : authSchemas.deleteAccount,

    onSubmit(values){
      onDeletePress();
    },
  });

    const onDeletePress = async () => {
      const userData = {
        email : formik.values.email,
        password : formik.values.password,
      };

      const isDeleted = await userWS.deleteAccount(userId, formik.values);

      if (isDeleted)
      {
        dispatcher(logoutUser());

        setTimeout(() => {
          ToastAndroid.show(CONSTANTS.SCREEN_TEXTS.ACCOUNT_DELETED, ToastAndroid.SHORT);
          navigation.popToTop();
        }, 200);
      }
    }

    return (
     <DeleteAccountScreenUI
        email = {formik.values.email}
        password = {formik.values.password}
        onEmailChangeHandler={formik.handleChange('email')}
        onPasswordChangeHandler={formik.handleChange('password')}
        onDeletePressHandler={formik.handleSubmit}
        emailError = {formik.errors.email}
        
     ></DeleteAccountScreenUI>
    )
}

export default DeleteAccountScreenUser;

