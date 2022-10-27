import URL_SERVICES from '../config/config';
import {MAX_HASH_LENGHT} from '../config/security';

async function createAccountOwner(userData) {
  const user = {
    role: 'owner',
    google: {
      name: '',
      email: '',
      id: '',
    },
    custom: {
      name: '',
      email: userData.email,
      password: userData.password,
    },
  };

  const jsonData = JSON.stringify(user);

  console.log('User: ', jsonData);

  let result = await fetch(URL_SERVICES.REGISTER_OWNER, {
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

export default createAccountOwner;
