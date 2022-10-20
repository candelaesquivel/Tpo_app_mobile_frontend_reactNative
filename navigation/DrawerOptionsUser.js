import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import I18n from "../assets/localization/I18n";
import { ROUTES } from "../ui";

const DrawerOptionsUser = (props) => {

  const navigator = useNavigation();

  const onDeletePress = (event) => {
    console.log('On Delete Drawer Option Press');
    navigator.navigate(ROUTES.DELETE_ACCOUNT_OWNER_STACK);
  }

  const onLogoutPress = (event) => {
    console.log('On Logout Press Drawer Option Owner');
    navigator.navigate(ROUTES.LOGIN_NORMAL_USER);
  }

  return (
    <DrawerContentScrollView {...props}>
      <View style={{height : 150}}></View>
      <DrawerItemList {...props}>
      </DrawerItemList>
      <DrawerItem
        label={I18n.t('logout')}
        onPress={onLogoutPress}
      />
      <DrawerItem
        label={I18n.t('deleteAccount')}
        onPress={onDeletePress}
      />
    </DrawerContentScrollView>
  )
}

export default DrawerOptionsUser;