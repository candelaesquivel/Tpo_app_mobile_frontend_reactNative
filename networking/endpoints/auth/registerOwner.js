import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { getHttpCodeMessage } from "../../../config/utilities";
import { setClientToken } from "../../api";
import { showErrorToast, showSuccessToast} from "../../../redux/slices/feedBackReducer";

export async function registerOwner(userData, dispatch = undefined)
{ 
  const user = {
    role : 'owner',
    custom : {
      name : '',
      email : userData.email,
      password : userData.password
    }
  };
  
  return axios.post(URL_SERVICES.REGISTER_OWNER, user)
  .then(resp => {

    if (response.data){
      const msg = getHttpCodeMessage(response.status, CONSTANTS.ENPOINT_TYPE.REGISTER_OWNER);

      if (dispatch && msg)
        dispatch(showSuccessToast(msg));
    }

    if (resp.status === 201)
      return true;
    
    return false;

  }).catch(err =>{
    if (err.response){
      const msg = getHttpCodeMessage(err.response.status, CONSTANTS.ENPOINT_TYPE.REGISTER_OWNER);

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