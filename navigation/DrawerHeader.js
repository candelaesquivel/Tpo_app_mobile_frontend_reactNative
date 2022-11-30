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
import { getBase64Uri } from "../config/utilities";


function DrawerHeader({props}){

  const navigation = useNavigation();

  const userName = useSelector((state) => {
    return state.user.userName;
  })

  const userPictures = useSelector(state => {
    return state.user.pictures;
  });

  const onIconPress = (event) => {
    navigation.navigate(ROUTES.USER_PROFILE);
  }

  const {width, height} = useWindowDimensions();

  const imgFromBack = userPictures.length > 0 ?  getBase64Uri(userPictures[0]) : 'https://bit.ly/broken-link'; 

  return (
    <View style={style.container}>
       <Logo
       width={Dimensions.get('window').height*0.1} 
       height={Dimensions.get('window').height*0.1}
       ></Logo>
      <View onTouchStart={onIconPress}>
        <Avatar
            bg="green.500"
            source={{uri : imgFromBack}}
            size='xl'
          >
          {userPictures.length === 0 && userName[0]}
        </Avatar>
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
