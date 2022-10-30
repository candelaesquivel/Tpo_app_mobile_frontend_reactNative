import URL_SERVICES from "../config/config";
import axios from 'axios';
import { CONSTANTS } from "../config";

async function loginOwner(userData)
{ 
  return axios.post(URL_SERVICES.LOGIN, {
    email : userData.email,
    password : userData.password,
  }).then(res => {
    res.data.role = CONSTANTS.OWNER_ROLE;
    return res.data;
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    console.log('Login Succesful')
  })
}

export default loginOwner;
