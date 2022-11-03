import axios from "axios";
import { CONSTANTS } from "../config";
import URL_SERVICES from "../config/config"

export async function updateUserData(userId, userData){

  const URL = URL_SERVICES.UPDATE_USER_DATA.replace('id', userId);

  return await axios.patch(URL, userData)
  .then(resp => {

    const dictField = resp.data.role === CONSTANTS.ROLES.OWNER_ROLE ? 'custom' : 'google';

    let newUser = {
      userName : resp.data[dictField].name
    }

    return newUser;
  })
  .catch(err => {
    console.error('Error on Update User Data WS: ', err);
    return null;
  })
  .finally(() => {

  })
}