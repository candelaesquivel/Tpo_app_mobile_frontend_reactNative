import { Input } from "@rneui/themed";
import {colorPalette} from "../styles/colors";

export function InputText(props){

    return (
        <Input 
          defaultValue={props.defaultValue ? props.defaultValue : ''}
          secureTextEntry = {props.secureTextEntry}
          placeholder={props.placeholder}
          placeholderTextColor = {props.placeholderTextColor}
          inputStyle={{color : props.textColor !== undefined ? props.textColor : colorPalette.White}}
          style={{
              borderRadius : 30, 
              borderWidth : props.borderWidth,
              borderColor : props.borderColor,
              backgroundColor : props.color,
              borderColor : props.borderColor,
              padding : 10,
              marginTop : props.marginTop,
              marginRight : props.marginRight,
              marginLeft : props.marginLeft,
              marginBottom : props.marginBottom,
              height : props.height,
              width : props.width,
              
          }}
          inputContainerStyle={{
              borderColor : props.borderColor,
              borderBottomColor : 'transparent',
              borderRadius : 0
            }}
          onChange = {props.onChange}
        >
        </Input>
    )
}