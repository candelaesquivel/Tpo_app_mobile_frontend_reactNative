import URL_SERVICES from "../config/config";
import axios from "axios";

async function deleteAccount(userId){
  const URL = URL_SERVICES.DELETE_ACCOUNT.replace('id', userId);

  return axios.delete(URL).
  then(resp => {
    return true;
  }).catch(err => {
    console.error(err);
    return false;
  }).finally( () => {
  });
}

export default deleteAccount;