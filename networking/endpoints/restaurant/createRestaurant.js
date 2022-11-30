import axios from "axios";
import { URL_SERVICES } from "../../../config/config";

export async function createRestaurant(ownerId, restaurantData){

  const dataToSent = {
    ...restaurantData,
    ownerId : ownerId
  };

  return await axios.post(URL_SERVICES.CREATE_RESTAURANT, dataToSent)
  .then(resp => {
    return resp.data;
  }).catch(err => {
    console.error('WS Create Restaurant Error: ', err.response.data);
  }).finally(() => {

  })
}