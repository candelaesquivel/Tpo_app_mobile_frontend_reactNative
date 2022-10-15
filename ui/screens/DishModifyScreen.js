import { View } from "react-native";
import { colorPalette } from "../styles/colors";
import { Text } from "@rneui/themed";

function DishModifyScreen({navigation, props}){

    return (
        <View style={{flexDirection : 'column', alignItems : 'center', marginTop : 23}}>
            <View style={{height : 40, backgroundColor : colorPalette.White}}></View>
            <Text h2 h2Style={{color : colorPalette.Orange}}> {"Pantalla de Modificar plato"} </Text>
            <View style={{height : 40, backgroundColor : colorPalette.White}}></View>
        </View>
    )
}

export default DishModifyScreen;