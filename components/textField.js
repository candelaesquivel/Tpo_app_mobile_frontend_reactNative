import { Input } from "@rneui/themed";
import {colorPalette} from "../styles/colors";

export default function InputText(props){
    return (
        <Input 
            props={props}
            placeholder={props.placeholder}
            placeholderTextColor = {colorPalette.White}
            style={{borderRadius : 30, backgroundColor : colorPalette.Orange}}>
        </Input>
    )
}