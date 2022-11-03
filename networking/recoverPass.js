import URL_SERVICES from "../config/config"
import { MAX_HASH_LENGHT } from "../config/security";

async function recoverPass(email)
{ 
  const data = {
    email : email,
  }

  const jsonData = JSON.stringify(data);

  console.log("Data: ", jsonData);

  let result = await fetch(URL_SERVICES.RECOVER_PASSWORD, {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : jsonData
  }).then(res => {

    if (res.status === 201)
      return true;
    
    return false;
  }).
  catch(err => {
    console.error("Error on Recover Pass: ", err);
    return false;
  })

  return result;
}

export default recoverPass;