import { useEffect } from "react";
import I18n from "../../assets/localization/I18n";
import { View } from "react-native";
import { Logo } from "../components/Logo";
import { colorPalette } from "../styles/colors";
import { MyButton } from "../components/button";
import { Text } from "@rneui/themed";
import { InputText } from "../components/InputText";
import screenNames from "../screenNames";

export function LoginRestaurantOwnerScreen({navigation, props}){

    useEffect(() => {
        navigation.setOptions({
            title : I18n.t('logIn')
        })
    }, [navigation])

    const onRecoverTouched = (event) => {
        console.log("Recovery Password Link Touched");
        navigation.navigate(screenNames.RECOVER_PASS_SCREEN);
    }

    const onCreateTouched = (event) => {
        console.log("On Create Owner Account Touched");
        navigation.navigate(screenNames.CREATE_ACCOUNT_OWNER);
    }

    return (
        <View style={{flexDirection : 'column', 
        height : '100%',
        alignItems : 'center', backgroundColor : colorPalette.White}}>
            <View style={{width : '100%', height : '5%', backgroundColor : colorPalette.White}}></View>
            <Logo></Logo>
            <View style = {{ 
                width : '90%', 
                height : '30%',
                borderRadius : 30,
                backgroundColor : colorPalette.LightOrange,
            }}>
                <InputText color = {colorPalette.Orange} placeholder = 'Ingrese Mail'
                height = '50%'
                ></InputText>
                <InputText color = {colorPalette.Orange} placeholder = 'Ingrese Contraseña'></InputText>
            </View>
            <MyButton title = {I18n.t('logIn')}></MyButton>
            <Text style={{color : colorPalette.Orange, marginTop : 10}} onPress={onRecoverTouched}>{I18n.t('forgotPassword')}</Text>
            <Text style={{color : colorPalette.Orange, marginTop : 15}} onPress={onCreateTouched}>{I18n.t('createAccount')}</Text>
        </View>
    )
}