import { Dimensions, Modal, View } from "react-native";
import { Text } from "react-native";
import { colorPalette } from "../styles/colors";
import { StyleSheet } from "react-native";
import { Icon, Overlay } from "@rneui/base";
import {CONSTANTS} from '../../config/index';

const AlertWithOptions = ({isVisible = false, iconName='', msgText = '', 
onOptionPress={onOptionTextPress}, props}) => {

  return (
    <View>
      <Overlay 
        isVisible={isVisible}
        overlayStyle={style.overlay}
      >
        <View style={{flexDirection : 'row', alignSelf  : 'center',
          justifyContent : 'space-between'
        }}>
          <Text 
            style={style.optionText}
            onPress={(e) => {
              onOptionPress(CONSTANTS.SCREEN_TEXTS.YES)
            }}>{CONSTANTS.SCREEN_TEXTS.YES}
          </Text>
          <Text
            style={style.optionText} 
            onPress={(e) => {
              onOptionPress(CONSTANTS.SCREEN_TEXTS.NO)
            }}>{CONSTANTS.SCREEN_TEXTS.NO}
          </Text>
        </View>
      </Overlay>
    </View>
      
  )
}

const style = StyleSheet.create({
  container : {
    flexDirection : 'column',
    alignContent : 'center'
  },

  overlay : {
    borderRadius : 30,
    flexDirection : 'column',
    alignContent : 'center',
    backgroundColor : colorPalette.White,
    width: Dimensions.get('screen').width * 0.9, 
    height: Dimensions.get('screen').height * 0.25, 
    justifyContent : 'space-between'
  },

  firstText: {
    marginVertical: 50,
    textAlign: 'center',
    fontSize: 25,
    color: colorPalette.Orange,
  },

  optionText : {
    color : colorPalette.Orange,
    marginLeft : 30,
    marginBottom : 30,
    fontSize : 20,
  }
})

export {AlertWithOptions}