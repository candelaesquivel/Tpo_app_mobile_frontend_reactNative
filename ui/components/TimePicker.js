import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useState } from "react";

export function TimePicker(props){

    const [date, setDate] = useState(new Date(1598051730000));
    return (
        DateTimePickerAndroid.open({
            value : date,
            mode : 'time',
            display : 'spinner',
        })
    )
}