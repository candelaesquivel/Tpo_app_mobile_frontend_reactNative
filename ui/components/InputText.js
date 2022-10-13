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
                backgroundColor : colorPalette.Orange,
                padding : 10
            }}
            underlineColorAndroid = 'transparent'
            >
        </Input>
    )
}