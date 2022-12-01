import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { getHttpCodeMessage } from "../../../config/utilities";
import { setClientToken } from "../../api";
import { showErrorToast, showSuccessToast} from "../../../redux/slices/feedBackReducer";

export async function loginGoogle(userInfo, dispatch = undefined){

  const googleData = {
    role : CONSTANTS.ROLES.USER_ROLE,
    google : {
      name : userInfo.name,
      email : userInfo.email,
      id : userInfo.id,
      photoUrl : userInfo.photo,
    },
    coordinates : {
      latitude : userInfo.latitude,
      longitude : userInfo.longitude
    },
  }
  
  return await axios.post(URL_SERVICES.BOUND_GOOGLE_DATA, googleData).then(response => {

    if (response.data){
      const token = response.data.token;
      setClientToken(token);
      if (response.data){
        const msg = getHttpCodeMessage(response.status, CONSTANTS.ENPOINT_TYPE.LOGIN_GOOGLE);
  
        if (dispatch && msg)
          dispatch(showSuccessToast(msg));
      }

      return response.data;
    }
    
  }).catch(err => {

    console.log(err);
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