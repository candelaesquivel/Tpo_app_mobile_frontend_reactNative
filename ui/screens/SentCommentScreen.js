import { View } from "react-native";
import { NavBar } from "../components/navBar";
import { colorPalette } from "../styles/colors";
import { AirbnbRating, Text } from "@rneui/themed";
import { MyButton } from "../components/button";
import { Icon } from "@rneui/themed";
import { InputText } from "../components/textField";
import { color } from "@rneui/base/dist";
import { Input } from "@rneui/themed";

export function SentCommentScreen(props){
    return (
        <View style={{flexDirection : 'column', alignItems : 'center', marginTop : 23}}>
            <NavBar
                centerText = 'Enviar Comentario'
                leftIcon = 'arrow-back'
            ></NavBar>
            <View style={{width : '100%', height : '10%', backgroundColor: colorPalette.White}}></View>
            <Text h3>Calificación</Text>
            <AirbnbRating 
                defaultRating={3}
                reviews = {[]}
                size = {30}
                selectedColor = {colorPalette.Orange}
            ></AirbnbRating>
            <View style={{flexDirection : 'row'}}>

            </View>
            <Text>Comentario (opcional)</Text>
            <Input
                inputContainerStyle={{
                    padding : 10,
                    width : '100%',
                    minHeight : '10%',
                    borderRadius : 30,
                    backgroundColor : colorPalette.LightOrange
                }}
                maxLength = {140}
                multiline = {true}

            >
            </Input>
        </View>
    )
}