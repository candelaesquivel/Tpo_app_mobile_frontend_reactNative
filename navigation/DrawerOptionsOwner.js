import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ROUTES } from "../ui";
import { DeleteIcon, LogoutIcon } from "./DrawerIcons";
import DrawerHeader from "./DrawerHeader";
import { useDispatch } from 'react-redux'
import {CONSTANTS} from '../config/index';
import { logoutUser } from "../redux/slices/userReducer";

const DrawerOptionsOwner = (props) => {

  const navigator = useNavigation();

  const dispatch = useDispatch();

  const onDeletePress = (event) => {
    navigator.navigate(ROUTES.DELETE_ACCOUNT_OWNER_STACK);
  }

  const onLogoutPress = (event) => {
    dispatch(logoutUser());
    navigator.navigate(ROUTES.LOGIN_OWNER);
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
        icon = {DeleteIcon}
        label={CONSTANTS.SCREEN_TEXTS.DELETE_ACOOUNT_LABEL}
        onPress={onDeletePress}
      />
    </DrawerContentScrollView>
  )
}

export default DrawerOptionsOwner;
