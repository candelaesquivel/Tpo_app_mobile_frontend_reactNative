import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useDispatch } from "react-redux";
import { ROUTES } from "../ui";
import DrawerHeader from "./DrawerHeader";
import { LogoutIcon, DeleteIcon } from "./DrawerIcons";
import { CONSTANTS } from "../config";
import { logoutUser } from "../redux/slices/userReducer";

const DrawerOptionsUser = (props) => {

  const navigator = useNavigation();
  const dispatch = useDispatch();

  const onDeletePress = (event) => {
    navigator.navigate(ROUTES.DELETE_ACCOUNT_OWNER_STACK);
  }

  const onLogoutPress = (event) => {
    dispatch(logoutUser());
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