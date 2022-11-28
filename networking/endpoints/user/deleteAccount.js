import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function deleteAccount(userId, userData){

  const URL = URL_SERVICES.DELETE_ACCOUNT.replace('id', userId);

  return axios.delete(URL, {
    data : userData
  }).
  then(resp => {
    return true;
  }).catch(err => {
    console.error(err.response.data);
    return false;
  }).finally( () => {
  });
}
