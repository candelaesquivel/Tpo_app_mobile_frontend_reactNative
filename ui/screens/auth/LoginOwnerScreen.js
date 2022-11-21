import { useEffect, useState } from "react";
import loginOwner from "../../../networking/loginOwner";
import { ROUTES } from "../..";
import { useSelector, useDispatch } from 'react-redux'

import { LoginOwnerUI } from "./LoginOwnerUI";
import { loginUser, logoutUser } from "../../../redux/slices/userReducer";

function LoginOwnerScreen({navigation, props}){

  const isLogged = useSelector(state => state.user.isLogged);

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

        try {
          var userDataRes = await loginOwner(userData);
        } catch (error) {
          dispatch(logoutUser());
        }

        if (userDataRes)
          dispatch(loginUser(userDataRes));
        else{
          dispatch(logoutUser());
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


