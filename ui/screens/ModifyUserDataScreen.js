import { View } from "react-native";
import { Logo } from "../components/Logo";
import { NavBar } from "../components/navBar";
import { colorPalette } from "../styles/colors";
import { Text } from "@rneui/themed";
import { MyButton } from "../components/button";

function ModifyUserDataScreen({navigation, props}){

    return (
        <View style={{flexDirection : 'column', alignItems : 'center', marginTop : 23}}>
            <View style={{height : 40, backgroundColor : colorPalette.White}}></View>
            <Text h2 h2Style={{color : colorPalette.Orange}}> {"Pantalla de Modificar Datos Usuario - Vista Compartida"} </Text>
            <View style={{height : 40, backgroundColor : colorPalette.White}}></View>
            <MyButton title='Guardar PH'></MyButton>
        </View>
    )
}

export default ModifyUserDataScreen;