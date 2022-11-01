import { Dimensions, View } from "react-native";
import { Logo } from "../ui/components/Logo";
import { Icon } from "@rneui/base";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

import { useSelector } from 'react-redux'
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../ui";


function DrawerHeader({props}){

  const navigation = useNavigation();

  const userName = useSelector((state) => {
    return state.session.userName;
  })

  const onIconPress = (event) => {
    
  }

  return (
    <View style={style.container}>
      <Logo width={60} height={60}></Logo>
      <Icon onPress={onIconPress} name = 'account-circle' size = {48}></Icon>
      <Text>{userName}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container : {
    height : Dimensions.get('window').height * 0.3,
    alignItems : 'center',
  }
})

export default DrawerHeader;
