import { View } from "react-native";
import { Logo } from "../components/Logo";
import { colorPalette } from "../styles/colors";
import { Text } from "@rneui/themed";
import I18n from '../../assets/localization/I18n'
import { useEffect } from "react";
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { ROUTES } from "..";

function LoginUserScreen({navigation, props}){
        

    GoogleSignin.configure({
        androidClientId: '721847506667-mg9d8oci85eocn8aelu7n33ijfpvccbk.apps.googleusercontent.com',
        profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px,
        offlineAccess: false,
      });    

      _isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        this.setState({ isLoginScreenPresented: !isSignedIn });
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
          console.log('User Info --> ', info);
          this.setState({ info });
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

      _getCurrentUser = async () => {
        //May be called eg. in the componentDidMount of your main component.
        //This method returns the current user
        //if they already signed in and null otherwise.
        try {
          const userInfo = await GoogleSignin.getCurrentUser();
          this.setState({ userInfo });
        } catch (error) {
          console.error(error);
        }
      };

      _signOut = async () => {
        //Remove user session from the device.
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          this.setState({ user: null }); // Remove the user from your app's state as well
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

    const onGoogleSignInPress = (e) => {
      console.log("On Google Sign In Press");
      navigation.navigate(ROUTES.HOME_NORMAL_USER_SCREEN);
    }

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
                onPress={onGoogleSignInPress}
            />
        </View>
    )
}

export default LoginUserScreen;