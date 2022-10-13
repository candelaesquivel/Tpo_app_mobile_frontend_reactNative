import { Input } from "@rneui/themed";
import {colorPalette} from "../styles/colors";

export function InputText(props){
    return (
        <Input 
            props={props}
            placeholder={props.placeholder}
            placeholderTextColor = {colorPalette.White}
            inputStyle={{color : colorPalette.White}}
            style={{
                borderRadius : 30, 
                borderWidth : props.borderWidth,
                borderColor : props.borderColor,
                backgroundColor : props.color,
                borderColor: colorPalette.Black,
                padding : 10
            }}
            inputContainerStyle={{
                borderBottomColor : 'transparent',
                borderRadius : 0
              }}
            >
        </Input>
    )
}