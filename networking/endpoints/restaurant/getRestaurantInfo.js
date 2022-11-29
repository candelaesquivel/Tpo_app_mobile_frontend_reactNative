import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";


export async function getRestaurantInfo(restaurantId){

  const URL = URL_SERVICES.RESTAURANT_DETAIL.replace('id', restaurantId);

  return axios.get(URL).then(resp => {
    return resp.data;
  }).catch(err => {
    console.error(CONSTANTS.ERROR_MSGS.ERROR_GET_REST_INFO, err.response.data);
    return null;
  })
}