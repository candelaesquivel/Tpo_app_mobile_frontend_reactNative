import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function updateUserData(userId, userData){

  const USER_URL = URL_SERVICES.UPDATE_USER_DATA.replace('id', userId);

  return await axios.patch(USER_URL, userData)
  .then(response => {
    return response.data;
  })
  .catch(error => {
    console.log('Error on WS Update User: ', error.response.data);
  })
}