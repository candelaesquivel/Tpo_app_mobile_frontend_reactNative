import { View, Text } from 'react-native'
import React from 'react'
import { MyButton } from './button'
import { CONSTANTS } from '../../config';

export const WeekButtons = ({
  weekButtonValues = [],
  weekButtonHandler,
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

  return (
    <View style={{marginTop:20, marginBottom : 20, flexDirection : "row"}}>
        {
          daysOfWeek.map((item, idx) => {
            return (
              <View key={idx}>
                <View style={{width : 10}}></View>
                <MyButton
                  onPress={weekButtonHandler}
                  key={idx}
                  title={item}
                  width={40}
                  height={40}>
                </MyButton>
              </View>
            )
          })
        }
    </View>
  )
}