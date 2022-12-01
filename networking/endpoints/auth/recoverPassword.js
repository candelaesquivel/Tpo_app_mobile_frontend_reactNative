import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { getHttpCodeMessage } from "../../../config/utilities";
import { setClientToken } from "../../api";
import { showErrorToast, showSuccessToast} from "../../../redux/slices/feedBackReducer";

export async function recoverPassword(email, dispatch = undefined){

  return axios.post(URL_SERVICES.RECOVER_PASSWORD, {
    email : email
  }).then(response => {

    if (response.data){
      const msg = getHttpCodeMessage(response.status, CONSTANTS.ENPOINT_TYPE.RECOVER_PASS);

      if (dispatch && msg)
        dispatch(showSuccessToast(msg));
    }

    if (response.status === 200)
      return true;

    return false;

  }).catch(err => {
    if (err.response){
      const msg = getHttpCodeMessage(err.response.status, CONSTANTS.ENPOINT_TYPE.RECOVER_PASS);

      if (dispatch && msg)
        dispatch(showErrorToast(msg));
    }
  });  
}