import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { getHttpCodeMessage } from "../../../config/utilities";
import { setClientToken } from "../../api";
import { showErrorToast, showSuccessToast} from "../../../redux/slices/feedBackReducer";

export async function loginGoogle(userInfo, dispatch){

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
  
  return await axios.post(URL_SERVICES.BOUND_GOOGLE_DATA, googleData).then(res => {

    if (res.data){
      const token = res.data.token;
      setClientToken(token);
      const msg = getHttpCodeMessage(res.status, CONSTANTS.ENPOINT_TYPE.LOGIN_GOOGLE);

      if (dispatch)
        dispatch(showSuccessToast(msg));

      return res.data;
    }
    
  }).catch(err => {

    const msg = getHttpCodeMessage(res.status, CONSTANTS.ENPOINT_TYPE.LOGIN_GOOGLE);

    if (dispatch && msg)
      dispatch(showErrorToast(msg));

    console.log('Error on Google Login: ', err);
    return null;
  })
};