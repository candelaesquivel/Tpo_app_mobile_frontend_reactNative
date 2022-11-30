import { Dimensions, Modal, View } from "react-native";
import { Text } from "react-native";
import { colorPalette } from "../styles/colors";
import { StyleSheet } from "react-native";
import { Icon, Overlay } from "@rneui/base";
import { Theme } from "../styles/Theme";

const CustomAlert = ({isVisible = false, iconName='', msgText = '', 
onRequestCloseHandler = {}, onYesHandler={}, onNoHandler={}, props}) => {

  return (
    <View onTouchStart={onRequestCloseHandler}>
      <Overlay 
        isVisible={isVisible}
        overlayStyle={style.overlay}
      >
        <View style={style.container}>
          <Text style={style.firstText}>{msgText}</Text>
          <Icon name = {iconName}></Icon>
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
    borderRadius : Theme.sizes.BUTTON_ROUNDED,
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
    fontSize: Theme.font.LARGE,
    color: colorPalette.Orange,
  },
})

export {CustomAlert}