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
                backgroundColor : props.color,
                padding : 10,
        /**arreglar barra que aparece por debajo */
            }}
            >
        </Input>
    )
}