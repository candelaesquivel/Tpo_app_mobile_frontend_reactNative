import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { setClientToken } from "../../api";

export async function loginOwner(userData)
{
  return axios.post(URL_SERVICES.LOGIN, {
    email : userData.email,
    password : userData.password,
  }).then(res => {
    res.data.role = CONSTANTS.ROLES.OWNER_ROLE;
    const token = res.data.token;
    setClientToken(token)
    return res.data;
  }).catch(err => {
    console.error("Error on Login Owner: ", err.response.data);
    return null;
  }).finally(() => {
  })
};