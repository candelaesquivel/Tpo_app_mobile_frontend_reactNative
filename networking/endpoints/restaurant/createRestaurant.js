import axios from "axios";
import { URL_SERVICES } from "../../../config/config";
import { CONSTANTS } from "../../../config";

export async function createRestaurant(ownerId, restaurantData){

  const dataToSent = {
    ...restaurantData,
    ownerId : ownerId
  };

  return await axios.post(URL_SERVICES.CREATE_RESTAURANT, dataToSent)
  .then(resp => {
    return resp.data;
  }).catch(err => {
    console.error( CONSTANTS.ERROR_MSGS.ERROR_CREATE_REST, err.response.data);
  }).finally(() => {

  })
}