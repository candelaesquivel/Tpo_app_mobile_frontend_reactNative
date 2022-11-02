import axios from "axios";
import { CONSTANTS } from "../config";
import URL_SERVICES from "../config/config"

const defaultUserData = {
  name : 'Pedrito Perez',
  role : CONSTANTS.ROLES.OWNER_ROLE,
}

export async function updateUserData(userId, userData = defaultUserData){

  const URL = URL_SERVICES.UPDATE_USER_DATA.replace('id', userId);

  return await axios.patch(URL, userData)
  .then(resp => {
    console.log('Response Update: ', resp.data);

    let newUser = {
      userName : resp.data['custom'].name
    }

    console.log('New User:', newUser)

    return newUser;
  })
  .catch(err => {
    console.log('Error on Update User Data WS: ', err);
    return false;
  })
  .finally(() => {
    
  })
}