import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ROUTES } from "../ui";
import { DeleteIcon, LogoutIcon } from "./DrawerIcons";
import DrawerHeader from "./DrawerHeader";
import { useDispatch } from 'react-redux'
import {logoutUserAction} from '../redux/actions';
import {CONSTANTS} from '../config/index';

const DrawerOptionsOwner = (props) => {

  const navigator = useNavigation();

  const dispatch = useDispatch();

  const onDeletePress = (event) => {
    console.log('On Delete Drawer Option Press');
    navigator.navigate(ROUTES.DELETE_ACCOUNT_OWNER_STACK);
  }

  const onLogoutPress = (event) => {
    console.log('On Logout Press Drawer Option Owner');

    dispatch(logoutUserAction());

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
