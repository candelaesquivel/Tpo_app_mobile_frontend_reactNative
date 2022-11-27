import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { MyButton } from './button'
import { CONSTANTS } from '../../config';
import { colorPalette } from '../styles/colors';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export const WeekButtons = ({
  timesData = [],
  onTimeSelectedHandler = (dayIndex, date) => {},
  ...props
}) => {

  let currDay = 0;

  const daysOfWeek = [
    CONSTANTS.SCREEN_TEXTS.MONDAY_LETTER,
    CONSTANTS.SCREEN_TEXTS.TUESDAY_LETTER,
    CONSTANTS.SCREEN_TEXTS.WEDNESDAY_LETTER,
    CONSTANTS.SCREEN_TEXTS.THURSDAY_LETTER,
    CONSTANTS.SCREEN_TEXTS.FRIDAY_LETTER,
    CONSTANTS.SCREEN_TEXTS.SATURDAY_LETTER,
    CONSTANTS.SCREEN_TEXTS.SUNDAY_LETTER,
  ];

  const onTimeSelected = (event, date) => {

    if (event.type === 'set'){
      onTimeSelectedHandler(currDay, date);
    }
  }


  const onButtonPress = (dayIndex) => {

    if (timesData.length === 0)
      return;

    currDay = dayIndex;

    const currValue = timesData[dayIndex] ? new Date(timesData[dayIndex]) : new Date();

    DateTimePickerAndroid.open({
      value : currValue,
      mode : 'time',
      display : 'spinner',
      is24Hour : true,
      onChange : onTimeSelected,
    });
  }

  return (
    <View style={{marginTop:20, marginBottom : 20, flexDirection : "row"}}>
        {
          daysOfWeek.map((item, idx) => {

            var enabled = false;
            if (idx < timesData.length){
              enabled = timesData[idx] !== undefined
            }

            return (
              <View key={idx}>
                <View style={{width : 10}}></View>
                <MyButton
                  onPress={(e) => onButtonPress(idx)}
                  key={idx}
                  title={item}
                  width={40}
                  height={40}
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