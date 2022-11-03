import axios from "axios";
import URL_SERVICES from "../config/config";

export async function createRestaurant(ownerId, restaurantData){

  const URL = URL_SERVICES.CREATE_RESTAURANT.replace('userId', ownerId);

  return await axios.post(URL, restaurantData)
  .then(resp => {
    return resp.data;
  }).catch(err => {
    console.error('WS Error: ', err);
  }).finally(() => {

  })
}