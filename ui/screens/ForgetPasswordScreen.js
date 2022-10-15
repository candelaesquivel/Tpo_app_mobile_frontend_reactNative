import { color, Icon } from "@rneui/base"
import { useEffect } from "react"
import I18n from "../../assets/localization/I18n"
import { View } from "react-native"
import { colorPalette } from "../styles/colors"
import { MyButton } from "../components/button"
import { TextInput } from "react-native"
import { Input } from "@rneui/themed"
import { InputText } from "../components/InputText"

function ForgetPasswordScreen({navigation, props}) {

    useEffect(() => {
        navigation.setOptions({title : I18n.t('recoverPassword')})
    }, [navigation])

    return (
        <View style={{flexDirection : 'column', 
        height : '100%',
        alignItems : 'center', backgroundColor : colorPalette.White}}>
            <View style={{width : '100%', height : '15%', backgroundColor : colorPalette.White}}></View>
            <Icon name='lock' size={96} color={colorPalette.Orange}></Icon>
            <View style={{width : '100%', height : '5%', backgroundColor : colorPalette.White}}></View>

            <View style={{ justifyContent : 'space-evenly', height : '10%', width : '80%', backgroundColor : colorPalette.LightOrange, borderRadius : 30}}>
                <InputText placeholder = {I18n.t('emailInput')} color={colorPalette.Orange}></InputText>
            </View>
            <View style={{width : '100%', height : '5%', backgroundColor : colorPalette.White}}></View>
            <MyButton title = {I18n.t('recoverPasswordBtn')}></MyButton>
        </View>
    )

}

export default ForgetPasswordScreen;