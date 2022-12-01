import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { getHttpCodeMessage } from "../../../config/utilities";
import { setClientToken } from "../../api";
import { showErrorToast, showSuccessToast} from "../../../redux/slices/feedBackReducer";

export async function loginOwner(userData, dispatch = undefined)
{

  return axios.post(URL_SERVICES.LOGIN, {
    email : userData.email,
    password : userData.password,
  }).then(response => {
    response.data.role = CONSTANTS.ROLES.OWNER_ROLE;
    const token = response.data.token;
    setClientToken(token)
    
    if (response.data){
      const msg = getHttpCodeMessage(response.status, CONSTANTS.ENPOINT_TYPE.LOGIN_GOOGLE);

      if (dispatch && msg)
        dispatch(showSuccessToast(msg));
    }

    return response.data;
  }).catch(err => {
    if (err.response){
      const msg = getHttpCodeMessage(err.response.status, CONSTANTS.ENPOINT_TYPE.LOGIN_GOOGLE);

      if (dispatch && msg)
        dispatch(showErrorToast(msg));
    }
    else if (err.message.includes('timeout')){
      if (dispatch)
        dispatch(showErrorToast(CONSTANTS.ERROR_MSGS.SERVER_ERROR));
    }
    return null;
  })
};