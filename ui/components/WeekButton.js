import { View, Text } from 'react-native'
import React from 'react'
import { MyButton } from './button'

export default function WeekButton() {
  return (
    <View style={{marginTop:20, marginBottom : 20 , flexDirection : "row"}}>
        <MyButton
        title={"L"}
        width={40}
        height={40}
        />
        <View style={{width : 10}}></View>
        <MyButton
        title={"M"}
        width={40}
        height={40}
        />
        <View style={{width : 10}}></View>
        <MyButton
        title={"MI"}
        width={40}
        height={40}
        />
        <View style={{width : 10}}></View>
        <MyButton
        title={"J"}
        width={40}
        height={40}
        />
        <View style={{width : 10}}></View>
        <MyButton
        title={"V"}
        width={40}
        height={40}
        />
        <View style={{width : 10}}></View>
        <MyButton
        title={"S"}
        width={40}
        height={40}
        />
        <View style={{width : 10}}></View>
        <MyButton
        title={"D"}
        width={40}
        height={40}
        />
    </View>
  )
}