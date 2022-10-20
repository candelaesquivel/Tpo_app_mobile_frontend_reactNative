import URL_SERVICES from "../config/config"

async function createAccountOwner({email, password})
{
  const user = {
    role : "owner",
    google : {
      name : '',
      email : '',
      id : '',
    },
    custom : {
      name : '',
      email : email,
      password : password,
    }
  };
  
  const userData = JSON.stringify(user);

  console.log("User: ", userData);

  let result = await fetch(URL_SERVICES.REGISTER_OWNER, {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : userData
  }).then(res => {
    console.log("Status: ", res.status);
  }).
  catch(err => {
    console.log(err);
  })

  return result;
}

export default createAccountOwner;