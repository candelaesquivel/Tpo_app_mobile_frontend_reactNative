import { View, Text , Dimensions } from 'react-native'
import React from 'react'
import { MyButton } from './button'
import { CONSTANTS } from '../../config';
import { colorPalette } from '../styles/colors';

export const WeekButtons = ({
  weekButtonValues = [],
  onDayBtnPressHandler,
  props
}) => {

  const daysOfWeek = [
    CONSTANTS.SCREEN_TEXTS.MONDAY_LETTER,
    CONSTANTS.SCREEN_TEXTS.TUESDAY_LETTER,
    CONSTANTS.SCREEN_TEXTS.WEDNESDAY_LETTER,
    CONSTANTS.SCREEN_TEXTS.THURSDAY_LETTER,
    CONSTANTS.SCREEN_TEXTS.FRIDAY_LETTER,
    CONSTANTS.SCREEN_TEXTS.SATURDAY_LETTER,
    CONSTANTS.SCREEN_TEXTS.SUNDAY_LETTER,
  ];
  
  const onButtonPress = (dayIndex) => {

    if (onDayBtnPressHandler)
      onDayBtnPressHandler(dayIndex);
  }

  return (
    <View style={{marginTop:20, marginBottom : 20, flexDirection : "row"}}>
        {
          daysOfWeek.map((item, idx) => {

            if (idx < weekButtonValues.length){
              var enabled = weekButtonValues[idx] === true;
            }

            return (
              <View key={idx}>
                <View style={{width : 10}}></View>
                <MyButton
                  onPress={(e) => onButtonPress(idx)}
                  key={idx}
                  title={item}
                  width={40}
                  height={Dimensions.get('window').height*0.072}
                  backgroundColor = {!enabled ? colorPalette.Black : colorPalette.Orange}
                  >
                </MyButton>
              </View>
            )
          })
        }
    </View>
  )
}