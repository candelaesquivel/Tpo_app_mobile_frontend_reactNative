import { View } from "react-native";
import { NavBar } from "../components/navBar";
import { colorPalette } from "../styles/colors";
import { Text } from "@rneui/themed";
import { MyButton } from "../components/button";
import { Icon } from "@rneui/themed";
import { InputText } from "../components/textField";
import { color } from "@rneui/base/dist";

export function EmailSentScreen(props){
    return (
        <View style={{flexDirection : 'column', alignItems : 'center', marginTop : 23}}>
            <NavBar
                centerText = 'Email Enviado'
                leftIcon = 'arrow-back'
            ></NavBar>
            <View style={{width : '100%', height : '35%', backgroundColor: colorPalette.White}}></View>
            <Icon name = 'outgoing-mail' size={96} color={colorPalette.Orange}></Icon>
            <Text
                h4
                h4Style={{textAlign:'center'}}
                style={{marginBottom : 10}}
            >
                Se ha enviado a el email las instrucciones de recuperación
            </Text>
        </View>
    )
}