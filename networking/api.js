import axios from "axios";
import { TIMEOUT, URL_API } from "../config/config";

axios.defaults.baseURL = URL_API;
axios.defaults.timeout = TIMEOUT;

export function setClientToken(token){
  console.log('Client Token: ', token);
  axios.defaults.headers.common = {
    'x-access-token' : token
  };
};
