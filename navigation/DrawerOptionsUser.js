import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useDispatch } from "react-redux";
import I18n from "../assets/localization/I18n";
import { ROUTES } from "../ui";
import DrawerHeader from "./DrawerHeader";
import { logoutUserAction } from "../redux/actions";
import { LogoutIcon, DeleteIcon } from "./DrawerIcons";
import { CONSTANTS } from "../config";

const DrawerOptionsUser = (props) => {

  const navigator = useNavigation();
  const dispatch = useDispatch();

  const onDeletePress = (event) => {
    console.log('On Delete Drawer Option Press');
    navigator.navigate(ROUTES.DELETE_ACCOUNT_OWNER_STACK);
  }

  const onLogoutPress = (event) => {
    console.log('On Logut User Drawer');
    dispatch(logoutUserAction());
    navigator.navigate(ROUTES.LOGIN_NORMAL_USER);
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerHeader {...props}></DrawerHeader>
      <DrawerItemList {...props}>
      </DrawerItemList>
      <DrawerItem
        icon={LogoutIcon}
        label={CONSTANTS.SCREEN_TEXTS.LOGOUT_LABEL}
        onPress={onLogoutPress}
      />
      <DrawerItem
        icon={DeleteIcon}
        label={CONSTANTS.SCREEN_TEXTS.DELETE_ACOOUNT_LABEL}
        onPress={onDeletePress}
      />
    </DrawerContentScrollView>
  )
}

export default DrawerOptionsUser;