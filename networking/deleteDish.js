import axios from "axios";
import URL_SERVICES from "../config/config";

export async function deleteDish(restaurantId, dishId){

  const URL = URL_SERVICES.DISH_DELETE.replace('restaurantId', restaurantId).
  replace('dishId', dishId);

  return axios.delete(URL)
  .then(resp => {
    console.log(resp);
    return resp.status;
  }).catch(err => {
    console.log(err);
  }).finally(() => {

  });
}