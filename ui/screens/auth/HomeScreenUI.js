import { CONSTANTS } from "../../../config"
import { MyButton } from "../../components/button";
import { View } from 'react-native';
import {Logo} from "../../components/Logo";
import { colorPalette } from '../../styles/colors';

export const HomeScreenUI = ({
  onUserBtnHandler,
  onOwnerBtnHandler,
  props,
}) =>
{
  return (
    <View style={{flexDirection : 'column', 
      height : '100%',
      alignItems : 'center', backgroundColor : colorPalette.White}}>
          <View style={{width : '100%', height : '15%', backgroundColor : colorPalette.White}}></View>
          <Logo></Logo>
          <View style={{width : '100%', height : '15%', backgroundColor : colorPalette.White}}></View>
          <MyButton title = {CONSTANTS.SCREEN_TEXTS.USER_LABEL} width = '70%' height = '15%' onPress = {onUserBtnHandler}></MyButton>
          <MyButton title = {CONSTANTS.SCREEN_TEXTS.OWNER_LABEL} width = '70%' height = '15%' onPress = {onOwnerBtnHandler}></MyButton>
      </View>
  )
}