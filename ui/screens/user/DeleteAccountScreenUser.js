
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {logoutUserAction} from '../../../redux/actions';
import { CONSTANTS } from "../../../config";
import { ToastAndroid } from "react-native";
import {DeleteAccountScreenUI} from './DeleteAccountScreenUI';
import { userWS } from "../../../networking/endpoints";

function DeleteAccountScreenUser({navigation, props}){

  const userId = useSelector(state => state.user.userId);
  const dispatcher = useDispatch();

    useEffect( () => {
        navigation.setOptions({
            title : 'Eliminar Cuenta'
        })
    }, [navigation])

    const onDeletePress = async (event) => {
      const isDeleted = await userWS.deleteAccount(userId);

      if (isDeleted)
      {
        dispatcher(logoutUserAction());

        setTimeout(() => {
          ToastAndroid.show(CONSTANTS.SCREEN_TEXTS.ACCOUNT_DELETED, ToastAndroid.SHORT);
          navigation.popToTop();
        }, 200);

      }
    }

    return (
     <DeleteAccountScreenUI
     onDeletePressHandler={onDeletePress}
     ></DeleteAccountScreenUI>
    )
}

export default DeleteAccountScreenUser;

