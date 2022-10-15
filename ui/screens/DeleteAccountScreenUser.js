import { View } from "react-native";
import { NavBar } from "../components/navBar";
import { colorPalette } from "../styles/colors";
import { Text } from "@rneui/themed";
import { MyButton } from "../components/button";
import { Icon } from "@rneui/themed";
import { InputText } from "../components/InputText";
import I18n from "../../assets/localization/I18n";
import { useEffect } from "react";

function DeleteAccountScreenUser({navigation, props}){

    useEffect( () => {
        navigation.setOptions({
            title : 'Eliminar Cuenta'
        })
    }, [navigation])

    return (
        <View style={{flexDirection : 'column', alignItems : 'center', marginTop : 23}}>
            <View style={{height : 35, backgroundColor : colorPalette.White}}></View>
            <Icon name = 'admin-panel-settings' size={96} color={colorPalette.Orange}></Icon>
            <Text
                h4
                h4Style={{textAlign:'center'}}
                style={{marginBottom : 10}}
            >
                {I18n.t('messageDeleteAccount')}
            </Text>
            <View style = {{
                borderRadius : 30,
                backgroundColor : '#FEA667',
                height : 190,
                width : 300,
                justifyContent : 'space-evenly'
            }}>
            <InputText
                placeholder = 'Ingrese contraseña'
                color = {colorPalette.Orange}
                >
            </InputText>
            <InputText 
                placeholder = 'Repita contraseña'
                color = {colorPalette.Orange}
            ></InputText>
            </View>
            <View style={{height : 15, backgroundColor : colorPalette.White}}></View>
            <MyButton title = 'Eliminar' width = {245}></MyButton>
        </View>
    )
}

export default DeleteAccountScreenUser;