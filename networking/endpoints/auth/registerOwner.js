import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function registerOwner(userData)
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

    if (resp.status === 201)
      return true;
    
    return false;

  }).catch(err =>{
    console.err("WS Register Error: ", err.response.data);
    return false;
  })
}