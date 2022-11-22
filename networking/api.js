import axios from "axios";
import { TIMEOUT, URL_API } from "../config/config";

axios.defaults.baseURL = URL_API;
axios.defaults.timeout = TIMEOUT;

function setClientToken(token){
  axios.defaults.headers.common = {
    'Authorization' : token
  };
};

module.exports = {
  axios,
  setClientToken
};