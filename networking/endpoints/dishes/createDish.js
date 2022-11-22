import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function createDish(restaurantId, dishData){

  const URL = URL_SERVICES.DISH_CREATE.replace('restaurantId', restaurantId);

  return axios.post(URL, dishData).then(response => {
    return response.status;
  }).catch(err => {
    console.log(err);
  })
};