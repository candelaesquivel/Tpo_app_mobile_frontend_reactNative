import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function getOwnerRestaurants(ownerId)
{
  const url = URL_SERVICES.RESTAURANTS_OWNER.replace('id', ownerId);

  return axios.get(url).then( (response) => {
    return response.data;
  }).catch(err =>{
    console.error(CONSTANTS.ERROR_MSGS.ERROR_GET_REST_OWNER, err);
  }).finally(() => {
  })
}
