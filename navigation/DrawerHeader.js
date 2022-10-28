import { View } from "react-native";
import { Logo } from "../ui/components/Logo";
import { Icon } from "@rneui/base";
import { Text } from "react-native";

import { useSelector } from 'react-redux'


function DrawerHeader({props}){

  const userName = useSelector((state) => {
    return state.session.userName;
  })

  return (
    <View style={{height : 150, alignItems : 'center'}}>
      <Logo width={60} height={60}></Logo>
      <Icon name = 'account-circle' size = {24}></Icon>
      <Text>{userName}</Text>
    </View>
  )
}

export default DrawerHeader;
