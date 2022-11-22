import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function deleteAccount(userId){
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
