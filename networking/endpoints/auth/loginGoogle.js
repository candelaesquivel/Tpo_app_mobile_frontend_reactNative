import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function loginGoogle(userInfo){

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

  return axios.post(URL_SERVICES.BOUND_GOOGLE_DATA, googleData).then(res => {
    return res.data;
  }).catch(err => {
    console.log('Error on Google Login: ', err.response.data);
    return null;
  }).finally(() => {
  })
};