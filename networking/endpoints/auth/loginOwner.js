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
  }).then(res => {
    res.data.role = CONSTANTS.ROLES.OWNER_ROLE;
    const token = res.data.token;
    setClientToken(token)
    
    if (response.data){
      const msg = getHttpCodeMessage(response.status, CONSTANTS.ENPOINT_TYPE.LOGIN_GOOGLE);

      if (dispatch && msg)
        dispatch(showSuccessToast(msg));
    }

    return res.data;
  }).catch(err => {
    if (err.response){
      const msg = getHttpCodeMessage(err.response.status, CONSTANTS.ENPOINT_TYPE.LOGIN_GOOGLE);

      if (dispatch && msg)
        dispatch(showErrorToast(msg));
    }
    return null;
  }).finally(() => {
  })
};