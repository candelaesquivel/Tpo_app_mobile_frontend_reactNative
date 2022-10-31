import URL_SERVICES from '../config/config';
import axios from 'axios';
import { CONSTANTS } from '../config';

async function boundGoogleData(userInfo){

  return axios.post(URL_SERVICES.BOUND_GOOGLE_DATA, {
    role : CONSTANTS.USER_ROLE,
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
  }).then(res => {
    console.log("Google Resp Data:", res.data);
    return res.data;
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    console.log('Google Login Succesful')
  })
}


export default boundGoogleData;