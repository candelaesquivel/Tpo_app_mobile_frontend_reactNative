import { Dimensions, useWindowDimensions, View } from "react-native";
import { Logo } from "../ui/components/Logo";
import { Icon } from "@rneui/base";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { ImageBackground, Image } from "react-native";

import { useSelector } from 'react-redux'
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../ui";
import { colorPalette } from "../ui/styles/colors";
import { Avatar } from "native-base";


function DrawerHeader({props}){

  const navigation = useNavigation();

  const userName = useSelector((state) => {
    return state.user.userName;
  })

  const userImg = useSelector(state => {
    if (state.user.userImg !== '')
      return 'data:image/png;base64,' + state.user.userImg

    return state.user.userImg;
  });

  const onIconPress = (event) => {
    navigation.navigate(ROUTES.USER_PROFILE);
  }

  const {width, height} = useWindowDimensions();

  console.log('W')

  return (
    <View style={style.container}>
       <Logo
       width={Dimensions.get('window').height*0.1} 
       height={Dimensions.get('window').height*0.1}
       ></Logo>
      <View onTouchStart={onIconPress}>
        {!userImg &&       
        <Icon onPress={onIconPress} name = 'account-circle' size = {96}></Icon>
        }
        {userImg && 
          <Avatar
            source={{
              uri : userImg,
            }}
            size = '2xl'
          >
          </Avatar>
        }
      </View>
      <Text>{userName}</Text>
    </View>
  )
}

const width = Dimensions.get('screen').width;

const style = StyleSheet.create({
  container : {
    height : Dimensions.get('window').height * 0.38,
    alignItems : 'center',
  },

  userImg: {
    borderRadius: 110 / 2,
    borderWidth: 4,
    borderColor: colorPalette.White,
  },
})
export default DrawerHeader;
