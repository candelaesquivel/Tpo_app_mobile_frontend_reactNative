import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { getHttpCodeMessage } from "../../../config/utilities";
import { setClientToken } from "../../api";
import { showErrorToast, showSuccessToast} from "../../../redux/slices/feedBackReducer";

export async function deleteAccount(userId, userData, dispatch = undefined){

  const URL = URL_SERVICES.DELETE_ACCOUNT.replace('id', userId);

  return axios.delete(URL, {
    data : userData
  }).
  then(response => {
    if (response.data){
      const msg = getHttpCodeMessage(response.status, CONSTANTS.ENPOINT_TYPE.DELETE_ACCOUNT);

      if (dispatch && msg)
        dispatch(showSuccessToast(msg));
    }
    return true;
  }).catch(err => {
    if (err.response){
      const msg = getHttpCodeMessage(err.response.status, CONSTANTS.ENPOINT_TYPE.DELETE_ACCOUNT);

      if (dispatch && msg)
        dispatch(showErrorToast(msg));
    }
    else if (err.message.includes('timeout')){
      if (dispatch)
        dispatch(showErrorToast(CONSTANTS.ERROR_MSGS.SERVER_ERROR));
    }
    return false;
  })
}
