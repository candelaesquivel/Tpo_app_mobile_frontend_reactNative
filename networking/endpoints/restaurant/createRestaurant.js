import axios from "axios";
import { URL_SERVICES } from "../../../config/config";

export async function createRestaurant(ownerId, restaurantData){

  const data = {
    ...restaurantData,
    ownerId : ownerId
  };

  return await axios.post(URL_SERVICES.CREATE_RESTAURANT, data)
  .then(resp => {
    return resp.data;
  }).catch(err => {
    console.error('WS Error: ', err);
  }).finally(() => {

  })
}