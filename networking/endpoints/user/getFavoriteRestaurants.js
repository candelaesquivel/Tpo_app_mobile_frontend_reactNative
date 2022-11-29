import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function getFavoriteRestaurants(userId)
{
  const URL = URL_SERVICES.FAVORITE_RESTAURANTS_NORMAL_USER.replace('id', userId);
  return axios.get(URL).then( (response) => {
    return response.data;
  }).catch(err =>{
    console.error(CONSTANTS.ERROR_MSGS.ERROR_GET_REST_FAV, err.response.data);
    return;
  })
}
