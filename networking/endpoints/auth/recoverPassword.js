import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function recoverPassword(email){

  return axios.post(URL_SERVICES.RECOVER_PASSWORD, {
    email : email
  }).then(response => {

    if (response.status === 200)
      return true;

    return false;

  }).catch(err => {
    console.log(CONSTANTS.ERROR_MSGS.ERROR_RECOVER_PASSW, err.response.data);
  });  
}