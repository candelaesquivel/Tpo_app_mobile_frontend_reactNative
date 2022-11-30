import { Button } from "@rneui/themed";
import { colorPalette } from "../styles/colors";
import { Theme } from "../styles/Theme";

export function MyButton(props) {
    return (
        <Button
        onPress={props.onPress}
            title={props.title}
            buttonStyle={{
                borderRadius : Theme.sizes.BUTTON_ROUNDED,
                backgroundColor : props.backgroundColor ? props.backgroundColor :  colorPalette.Orange
            }}

            containerStyle={{
                width : props.width,
                height : props.height
            }}

            titleStyle={{
                fontSize : Theme.font.MEDIUM,
              
            }}
        >
        </Button>
    )
}