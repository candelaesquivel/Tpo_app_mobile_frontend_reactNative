import axios from "axios";
import URL_SERVICES from "../config/config"
import { MAX_HASH_LENGHT } from "../config/security";

async function createAccountOwner(userData)
{ 
  const user = {
    role : 'owner',
    // google : {
    //   name : '',
    //   email : '',
    //   id : '',
    // },
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
    console.err("WS Register Error: ", err);
    return false;
  }).finally(() => {

  })
}

export default createAccountOwner;