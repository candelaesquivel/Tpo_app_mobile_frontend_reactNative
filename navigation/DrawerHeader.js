import { Dimensions, View } from "react-native";
import { Logo } from "../ui/components/Logo";
import { Icon } from "@rneui/base";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { ImageBackground, Image } from "react-native";

import { useSelector } from 'react-redux'
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../ui";
import { colorPalette } from "../ui/styles/colors";


function DrawerHeader({props}){

  const navigation = useNavigation();

  const userName = useSelector((state) => {
    return state.user.userName;
  })

  let userImg = useSelector(state => state.user.userImg);

  const onIconPress = (event) => {
    navigation.navigate(ROUTES.USER_PROFILE);
  }

  return (
    <View style={style.container}>
       <Logo
       width={Dimensions.get('window').height*0.09} 
       height={Dimensions.get('window').height*0.09}
       ></Logo>
      <View onTouchStart={onIconPress}>
        {!userImg &&       
        <Icon onPress={onIconPress} name = 'account-circle' size = {96}></Icon>
        }
        {userImg && <Image source={{uri : userImg}} style={style.userImg} />}
      </View>
      <Text>{userName}</Text>
    </View>
  )
}

const width = Dimensions.get('screen').width;

const style = StyleSheet.create({
  container : {
    height : Dimensions.get('window').height * 0.4,
    alignItems : 'center',
  },

  userImg: {
   
    borderRadius: 110 / 2,
    borderWidth: 4,
    borderColor: colorPalette.White,
  },
})
export default DrawerHeader;
