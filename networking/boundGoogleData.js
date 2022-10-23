import { getRelativeCoords } from 'react-native-reanimated';
import URL_SERVICES from '../config/config';

async function boundGoogleData(userInfo){
  const user = {
    role : "user",
    google : {
      name : userInfo.name,
      email : userInfo.email,
      id : userInfo.id,
      photoUrl : userInfo.photo,
    },
    location : {
      latitude : userInfo.latitude,
      longitude : userInfo.longitude
    },
  };
  
  const userData = JSON.stringify(user);

  console.log("BoundGoogleData: ", userData);

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