import URL_SERVICES from '../config/config';

async function boundGoogleData({email, name, id, photo}){
  const user = {
    role : "user",
    google : {
      name : name,
      email : email,
      id : id,
      photo : photo,
    },
    custom : {
      name : 'null',
      email : 'null',
      password : 'null',
    }
  };
  
  const userData = JSON.stringify(user);

  console.log("User: ", userData);

  let result = await fetch(URL_SERVICES.BOUND_GOOGLE_DATA, {
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


export default boundGoogleData;