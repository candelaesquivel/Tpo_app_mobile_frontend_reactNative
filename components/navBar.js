import { Header } from "@rneui/themed";
import { colorPalette } from "../styles/colors";

export function NavBar(props) {
    return (
        <Header
            containerStyle={{borderWidth : 1}}
            backgroundColor={colorPalette.Orange}
            centerComponent={{text : props.centerText, style : {color : colorPalette.Black, fontFamily : 'Roboto'}}}
            leftComponent={{icon : props.leftIcon, color : colorPalette.Black, type : 'material'}}
        >
        </Header>
    )
}