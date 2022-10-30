import { View } from "react-native";
import { Logo } from "../components/Logo";
import { colorPalette } from "../styles/colors";
import { Text } from "@rneui/themed";
import I18n from '../../assets/localization/I18n'
import { useEffect, useState } from "react";
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { ROUTES } from "..";
import boundGoogleData from "../../networking/boundGoogleData";
import GetLocation from 'react-native-get-location'
import { useDispatch, useSelector } from "react-redux";
import {loginUserAction } from '../../redux/actions';
import { CONSTANTS } from "../../config";

function LoginUserScreen({navigation, props}){
  
    const [userInfo, setUserInfo] = useState({});
    const dispatch = useDispatch();

    const isLogged = useSelector(state => state.session.isLogged);

    const checkLogStatus = async () => {
      const isGoogleSigned = await _isSignedIn();
      console.log("Google Sign Status: ", isGoogleSigned);
      if (isLogged)
        navigation.navigate(ROUTES.HOME_NORMAL_USER_SCREEN);
      else if (isGoogleSigned)
        await _signOut();
    }

    useEffect(() => {
      console.log("IS Logged: ", isLogged)
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
              console.log("location " + JSON.stringify(latestLocation));
              console.log("google " + JSON.stringify(info));

              console.log("Google Info: ", info);

              let userData = {
                email : info.user.email, 
                name : info.user.name, 
                id : info.user.id, 
                photo : info.user.photo,
                latitude: latestLocation.latitude,
                longitude: latestLocation.longitude,
                role : CONSTANTS.USER_ROLE,
                accessToken : 'this is a token',
              }

              setUserInfo(userData);
    
              // Navigate to the Home screen when the user has successfully signed in
              if (userData.email != null){
                console.log("userInfo: ", userData);
                const userInfo = await boundGoogleData(userData);
                console.log("User Info: ", userInfo);
                dispatch(loginUserAction(userInfo));
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

    useEffect(() => {
        navigation.setOptions({
            title : I18n.t('logIn')
        })
    })

    return (
        <View style={{flexDirection : 'column', alignItems : 'center', marginTop : 23}}>
            <View style={{height : 40, backgroundColor : colorPalette.White}}></View>
            <Logo></Logo>
            <View style={{height : 40, backgroundColor : colorPalette.White}}></View>
            <Text h2 h2Style={{color : colorPalette.Orange}}> {I18n.t('logIn')} </Text>
            <View style={{height : 40, backgroundColor : colorPalette.White}}></View>
            <GoogleSigninButton
                style={{ width: 312, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Light}
                onPress={_signIn}
            />
        </View>
    )
}

export default LoginUserScreen;