import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";


export async function getRestaurantInfo(restaurantId){

  const URL = URL_SERVICES.RESTAURANT_DETAIL.replace('id', restaurantId);

  return axios.get(URL).then(resp => {
    resp.data.averageRating = Number(resp.data.averageRating.$numberDecimal),
    console.log(resp.data);
    return resp.data;
  }).catch(err => {
    console.error("WS Error: ", err);
    return null;
  })
}