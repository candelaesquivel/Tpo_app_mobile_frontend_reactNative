import { View } from "react-native";
import { NavBar } from "../components/navBar";
import { colorPalette } from "../styles/colors";
import { Text } from "@rneui/themed";
import { MyButton } from "../components/button";
import { Icon } from "@rneui/themed";
import { InputText } from "../components/textField";
import { color } from "@rneui/base/dist";

export function DeleteAccountScreenUser(props){
    return (
        <View style={{flexDirection : 'column', alignItems : 'center', marginTop : 23}}>
            <NavBar
                centerText = 'Eliminar Cuenta'
                leftIcon = 'arrow-back'
            ></NavBar>
            <View style={{height : 35, backgroundColor : colorPalette.White}}></View>
            <Icon name = 'admin-panel-settings' size={96} color={colorPalette.Orange}></Icon>
            <Text
                h4
                h4Style={{textAlign:'center'}}
                style={{marginBottom : 10}}
            >
                Valide el siguiente formulario para proceder a la eliminación de la cuenta
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
                >
            </InputText>
            <InputText placeholder = 'Repita contraseña'></InputText>
            </View>
            <View style={{height : 15, backgroundColor : colorPalette.White}}></View>
            <MyButton title = 'Eliminar' width = {245}></MyButton>
        </View>
    )
}