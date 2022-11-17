import { CONSTANTS } from "../../../config";
import { Text } from "@rneui/themed";
import { View } from "react-native";
import { Logo } from "../../components/Logo";
import { colorPalette } from "../../styles/colors";
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

export const LoginNormalUserUI = ({
  onGoogleSignInHandler,
  props
}) => {
  return (
    <View style={{flexDirection : 'column', alignItems : 'center', marginTop : 23}}>
      <View style={{height : 40, backgroundColor : colorPalette.White}}></View>
      <Logo></Logo>
      <View style={{height : 40, backgroundColor : colorPalette.White}}></View>
      <Text h2 h2Style={{color : colorPalette.Orange}}> {CONSTANTS.SCREEN_TEXTS.LOGIN_LABEL} </Text>
      <View style={{height : 40, backgroundColor : colorPalette.White}}></View>
      <GoogleSigninButton
          style={{ width: 312, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={onGoogleSignInHandler}
      />
    </View>
  )
}