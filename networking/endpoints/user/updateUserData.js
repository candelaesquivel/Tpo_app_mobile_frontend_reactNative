import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { getHttpCodeMessage } from "../../../config/utilities";
import { setClientToken } from "../../api";
import { showErrorToast, showSuccessToast} from "../../../redux/slices/feedBackReducer";

export async function updateUserData(userId, userData, dispatch = undefined){

  const USER_URL = URL_SERVICES.UPDATE_USER_DATA.replace('id', userId);

  return await axios.patch(USER_URL, userData)
  .then(response => {
    if (response.data){
      const msg = getHttpCodeMessage(response.status, CONSTANTS.ENPOINT_TYPE.UPDATE_USER);

      if (dispatch && msg)
        dispatch(showSuccessToast(msg));
    }
    return response.data;
  })
  .catch(error => {
    if (err.response){
      const msg = getHttpCodeMessage(err.response.status, CONSTANTS.ENPOINT_TYPE.UPDATE_USER);

      if (dispatch && msg)
        dispatch(showErrorToast(msg));
    }
    else if (err.message.includes('timeout')){
      if (dispatch)
        dispatch(showErrorToast(CONSTANTS.ERROR_MSGS.SERVER_ERROR));
    }
  })
}