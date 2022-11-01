import URL_SERVICES from "../config/config";
import axios from "axios";

function deleteAccount(userId){
  const URL = URL_SERVICES.DELETE_ACCOUNT.replace('id', userId);

  return axios.delete(URL).
  then(resp => {
    console.log(resp.data);
    return true;
  }).catch(err => {
    console.log(err);
    return false;
  }).finally( () => {
    console.log('User Deleted Web Service End');
  });
}

export default deleteAccount;