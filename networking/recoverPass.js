import URL_SERVICES from '../config/config';
import {MAX_HASH_LENGHT} from '../config/security';

async function recoverPass(email) {
  const data = {
    email: email,
  };

  const jsonData = JSON.stringify(data);

  console.log('Data: ', jsonData);

  let result = await fetch(URL_SERVICES.RECOVER_PASSWORD, {
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

export default recoverPass;
