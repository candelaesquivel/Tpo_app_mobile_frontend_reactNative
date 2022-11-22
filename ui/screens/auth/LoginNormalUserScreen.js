import { useEffect, useState } from "react";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { ROUTES } from "../..";
import GetLocation from 'react-native-get-location'
import { useDispatch, useSelector } from "react-redux";
import { CONSTANTS } from "../../../config";
import { LoginNormalUserUI } from "./LoginNormalUserUI";
import { loginUser } from "../../../redux/slices/userReducer";
import { authWS } from "../../../networking/endpoints";

function LoginUserScreen({navigation, props}){
  
    const dispatch = useDispatch();

    const isLogged = useSelector(state => state.user.isLogged);

    const checkLogStatus = async () => {
      const isGoogleSigned = await _isSignedIn();
      if (isLogged)
        navigation.navigate(ROUTES.HOME_NORMAL_USER_SCREEN);
      else if (isGoogleSigned)
        await _signOut();
    }

    useEffect(() => {
      checkLogStatus();
    }, [isLogged]);

    GoogleSignin.configure({
        androidClientId: '721847506667-mg9d8oci85eocn8aelu7n33ijfpvccbk.apps.googleusercontent.com',
        profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px,
        offlineAccess: false,
      });    

      
      _isSignedIn = async () => {
        return await GoogleSignin.isSignedIn();
      };

      _signIn = async () => {
        //Prompts a modal to let the user sign in into your application.
        try {
          await GoogleSignin.hasPlayServices({
            //Check if device has Google Play Services installed.
            //Always resolves to true on iOS.
            showPlayServicesUpdateDialog: true,
          });
          const info = await GoogleSignin.signIn();

          GetLocation.getCurrentPosition({timeout:50000, enableHighAccuracy:true})
            .then(async latestLocation => {

              let userData = {
                email : info.user.email, 
                name : info.user.name, 
                id : info.user.id, 
                photo : info.user.photo,
                latitude: latestLocation.latitude,
                longitude: latestLocation.longitude,
                role : CONSTANTS.ROLES.USER_ROLE,
                accessToken : 'this is a token',
              }

              // Navigate to the Home screen when the user has successfully signed in
              if (userData.email != null){
                const userInfo = await authWS.loginGoogle(userData);
                userData.id = userInfo.id;
                dispatch(loginUser(userData));
              }
            })
            .catch(error => {
              console.warn("Error getting location: ", error);
            })

        } catch (error) {
          console.log('Message', error.message);
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('User Cancelled the Login Flow');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log('Signing In');
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log('Play Services Not Available or Outdated');
          } else {
            console.log('Some Other Error Happened');
            console.log(error);
          }
        }
      };

      _signOut = async () => {
        //Remove user session from the device.
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
        } catch (error) {
          console.error(error);
        }
      };

      _revokeAccess = async () => {
        //Remove your application from the user authorized applications.
        try {
          await GoogleSignin.revokeAccess();
          console.log('deleted');
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <LoginNormalUserUI
          onGoogleSignInHandler={_signIn}
        >

        </LoginNormalUserUI>
    )
}

export default LoginUserScreen;