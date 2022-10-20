import { color, Icon } from "@rneui/base"
import { useEffect, useState } from "react"
import I18n from "../../assets/localization/I18n"
import { View } from "react-native"
import { colorPalette } from "../styles/colors"
import { MyButton } from "../components/button"
import { TextInput } from "react-native"
import { Input } from "@rneui/themed"
import { InputText } from "../components/InputText"
import createAccountOwner from "../../networking/createAccount"

export function CreateAccountOwnerScreen({navigation, props}) {

    const [email, setEmail] = useState('tplaza15@gmail.com');
    const [password, setPassword] = useState('1234');
    const [repeatPassword, setRepeatPassword] = useState('');

    const onRegisterPress = async (e) => {
      const result = await createAccountOwner({email, password});
      console.log("Result Register: ", result);
    }

    useEffect(() => {
        navigation.setOptions({title : I18n.t('createAccount')})
    }, [navigation])

    return (
        <View style={{flexDirection : 'column', 
        height : '100%',
        alignItems : 'center', backgroundColor : colorPalette.White}}>
            <View style={{width : '100%', height : '15%', backgroundColor : colorPalette.White}}></View>
            <Icon name='account-circle' size={96} color={colorPalette.Orange}></Icon>
            <View style={{width : '100%', height : '5%', backgroundColor : colorPalette.White}}></View>

            <View style={{ justifyContent : 'space-evenly', height : '35%', width : '80%', backgroundColor : colorPalette.LightOrange, borderRadius : 30}}>
                <InputText placeholder = {I18n.t('emailInput')} color={colorPalette.Orange}></InputText>
                <InputText placeholder = {I18n.t('passInput')} color={colorPalette.Orange}></InputText>
                <InputText placeholder = {I18n.t('validPassInput')} color={colorPalette.Orange}></InputText>

            </View>
            <View style={{width : '100%', height : '5%', backgroundColor : colorPalette.White}}></View>
            <MyButton title = {I18n.t('createAccount')} onPress = {onRegisterPress}></MyButton>
        </View>
    )

}

export default CreateAccountOwnerScreen;