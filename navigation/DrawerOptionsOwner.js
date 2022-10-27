import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import { View } from "react-native";
import I18n from "../assets/localization/I18n";
import { ROUTES } from "../ui";
import { Text } from "react-native";
import { DeleteIcon, LogoutIcon } from "./DrawerIcons";
import { Icon } from "@rneui/base";
import { Logo } from "../ui/components/Logo";

const DrawerOptionsOwner = (props) => {

  const [userName, setUserName] = useState('Candela');

  const navigator = useNavigation();

  const onDeletePress = (event) => {
    console.log('On Delete Drawer Option Press');
    navigator.navigate(ROUTES.DELETE_ACCOUNT_OWNER_STACK);
  }

  const onLogoutPress = (event) => {
    console.log('On Logout Press Drawer Option Owner');
    navigator.navigate(ROUTES.LOGIN_OWNER);
  }

  return (
    <DrawerContentScrollView {...props}>
      <View style={{height : 150, alignItems : 'center'}}>
        <Logo width={60} height={60}></Logo>
        <Icon name = 'account-circle' size = {24}></Icon>
        <Text>{userName}</Text>
      </View>
      <DrawerItemList {...props}>
      </DrawerItemList>
      <DrawerItem
        icon={LogoutIcon}
        label={I18n.t('logout')}
        onPress={onLogoutPress}
      />
      <DrawerItem
        icon = {DeleteIcon}
        label={I18n.t('deleteAccount')}
        onPress={onDeletePress}
      />
    </DrawerContentScrollView>
  )
}

export default DrawerOptionsOwner;