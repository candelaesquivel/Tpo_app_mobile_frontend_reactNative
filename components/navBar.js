import { Header } from "@rneui/themed";

export default function NavBar(props) {
    return (
        <Header
            backgroundColor="#FF511B"
            centerComponent={{text : props.centerText, style : {color : '#404040', fontFamily : 'Roboto'}}}
            leftComponent={{icon : props.leftIcon, color : '#404040', type : 'material'}}
        >
        </Header>
    )
}