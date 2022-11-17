import { useEffect, useState } from "react";
import loginOwner from "../../../networking/loginOwner";
import { ROUTES } from "../..";
import { useSelector, useDispatch } from 'react-redux'

import {logoutUserAction, loginUserAction} from '../../../redux/actions';
import { LoginOwnerUI } from "./LoginOwnerUI";

function LoginOwnerScreen({navigation, props}){

  const isLogged = useSelector((state) => {
    return state.session.isLogged
  });

  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email : '',
    password : '',
  })

  const onEmailChange = ({ nativeEvent: { eventCount, target, text} }) => {
    setUserData({...userData, 'email' : text})
  }

  const onPassChange = ({nativeEvent : {eventCount, target, text}}) => {
    setUserData({...userData, 'password' : text})
  }

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

    const onLoginPressed = async (event) => {

        const loginRes = await loginOwner(userData);

        if (loginRes){
          dispatch(loginUserAction(loginRes))
        }else{
          dispatch(logoutUserAction());
        }

        return;
    }

    return (
      <LoginOwnerUI
        email={userData.email}
        password={userData.password}
        onEmailHandler={onEmailChange}
        onPassHandler={onPassChange}
        onLoginHandler={onLoginPressed}
        onRecoverLinkHandler={onRecoverTouched}
        onCreateLinkHandler={onCreateTouched}
      ></LoginOwnerUI>
    )
}

export default LoginOwnerScreen;


