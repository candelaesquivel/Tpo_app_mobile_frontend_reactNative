import URL_SERVICES from '../config/config';
import {MAX_HASH_LENGHT} from '../config/security';

async function loginOwner(userData) {
  const user = {
    email: userData.email,
    password: userData.password,
  };

  const jsonData = JSON.stringify(user);

  console.log('User Login Data: ', jsonData);

  let result = await fetch(URL_SERVICES.LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonData,
  })
    .then(res => {
      console.log('Status: ', res.status);

      if (res.status === 201) {
        return true;
      }

      return false;
    })
    .catch(err => {
      console.log(err);
      return false;
    });

  return result;
}

export default loginOwner;
