import { View } from "react-native";
import { Logo } from "../components/Logo";
import { NavBar } from "../components/navBar";
import { colorPalette } from "../styles/colors";
import { Text } from "@rneui/themed";
import { MyButton } from "../components/button";
import I18n from "../../assets/localization/I18n";

export function LoginUserScreen(props){
    return (
        <View style={{flexDirection : 'column', alignItems : 'center', marginTop : 23}}>
            <NavBar
                centerText = 'Inicio de Sesión'
                leftIcon = 'arrow-back'
            ></NavBar>
            <View style={{height : 40, backgroundColor : colorPalette.White}}></View>
            <Logo></Logo>
            <View style={{height : 40, backgroundColor : colorPalette.White}}></View>
            <Text h2 h2Style={{color : colorPalette.Orange}}> {I18n.t('logIn')} </Text>
            <View style={{height : 40, backgroundColor : colorPalette.White}}></View>
            <MyButton title = 'Placeholder Google Sign In'></MyButton>
        </View>
    )
}