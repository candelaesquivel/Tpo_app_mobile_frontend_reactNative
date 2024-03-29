import { Input } from "@rneui/themed";
import {colorPalette} from "../styles/colors";
import { Theme } from "../styles/Theme";

export function InputText(props){

    return (
        <Input 
          errorMessage={props.errorMessage ? props.errorMessage : ''}
          keyboardType={props.keyboardType ? props.keyboardType : 'default'}
          defaultValue={props.defaultValue ? props.defaultValue : ''}
          secureTextEntry = {props.secureTextEntry}
          placeholder={props.placeholder}
          placeholderTextColor = {props.placeholderTextColor}
          maxLength={props.limitLenght}
          inputStyle={{
            color : props.textColor !== undefined ? props.textColor : colorPalette.White,
           
          }}
          style={{
              borderRadius : Theme.sizes.BUTTON_ROUNDED, 
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
              borderBottomColor : Theme.color.TRANSPARENT,
              borderRadius : 0,
              height : props.inputHeight
            }}
          onChange = {props.onChange}
          onChangeText = {props.onChangeText}
        >
        </Input>
    )
}