import {Input} from '@rneui/themed';
import {colorPalette} from '../styles/colors';

export function InputText(props) {
  return (
    <Input
      secureTextEntry={props.secureTextEntry}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor}
      inputStyle={{color: colorPalette.White}}
      style={{
        borderRadius: 30,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
        backgroundColor: props.color,
        borderColor: props.borderColor,
        padding: 10,
        marginTop: props.marginTop,
        marginRight: props.marginRight,
        marginLeft: props.marginLeft,
        marginBottom: props.marginBottom,
      }}
      inputContainerStyle={{
        borderColor: props.borderColor,
        borderBottomColor: 'transparent',
        borderRadius: 0,
      }}
      onChange={props.onChange}
    />
  );
}
