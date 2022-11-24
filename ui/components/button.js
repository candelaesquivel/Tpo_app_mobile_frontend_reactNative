import { Button } from "@rneui/themed";
import { colorPalette } from "../styles/colors";

export function MyButton(props) {
    return (
        <Button
        onPress={props.onPress}
            title={props.title}
            buttonStyle={{
                borderRadius : 30,
                backgroundColor : props.backgroundColor ? props.backgroundColor :  colorPalette.Orange
            }}

            containerStyle={{
                width : props.width,
                height : props.height
            }}

            titleStyle={{
                fontSize : 20,
              
            }}
        >
        </Button>
    )
}