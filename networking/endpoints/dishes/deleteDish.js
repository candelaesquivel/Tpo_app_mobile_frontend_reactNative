import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function deleteDish(restaurantId, dishId){

  const URL = URL_SERVICES.DISH_DELETE.replace('restaurantId', restaurantId).
  replace('dishId', dishId);

  return axios.delete(URL)
  .then(resp => {
    return resp.status === 200;
  }).catch(err => {
    console.error(err.response.data);
  }).finally(() => {

  });
}