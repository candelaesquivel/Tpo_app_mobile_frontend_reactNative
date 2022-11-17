import { useState } from "react";
import createAccountOwner from '../../../networking/createAccount';
import { CONSTANTS } from "../../../config";
import { ROUTES } from "../..";
import { ToastAndroid } from "react-native"
import { CreateAccountOwnerUI } from "./CreateAccountOwnerUI";

export function CreateAccountOwnerScreen({navigation, props}) {

    const [userData, setUserData] = useState({
      email : '',
      password : '',
      repeatPassword : ''
    });

    const onRegisterPress = async (e) => {
      const result = await createAccountOwner(userData);

      if (result){
        setTimeout(() => {
          ToastAndroid.show(CONSTANTS.SCREEN_TEXTS.ACCOUNT_CREATED, ToastAndroid.SHORT);
          navigation.navigate(ROUTES.LOGIN_OWNER);
        }, 200);
      }else{

      }
    }

    const onEmailChange = ({ nativeEvent: { eventCount, target, text} }) => {
      setUserData({...userData, 'email' : text})
    }

    const onPassChange = ({nativeEvent : {eventCount, target, text}}) => {
      setUserData({...userData, 'password' : text})
    }

    const onRepeatPassChange = ({nativeEvent : {eventCount, target, text}}) => {
      setUserData({...userData, 'repeatPassword' : text})
    }

    return (
      <CreateAccountOwnerUI
        email = {userData.email}
        password = {userData.password}
        repeatPassword = {userData.repeatPassword}
        onRepeatPassHandler={onRepeatPassChange}
        onPasswordHandler={onPassChange}
        onEmailHandler={onEmailChange}
        onRegisterHandler={onRegisterPress}
      >
      </CreateAccountOwnerUI>
    )
}

export default CreateAccountOwnerScreen;

