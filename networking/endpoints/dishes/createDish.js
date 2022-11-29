import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function createDish(restaurantId, dishData){

  const URL = URL_SERVICES.DISH_CREATE.replace('restaurantId', restaurantId);

  return axios.post(URL, dishData)
  .then(response => {
    return response.data;
  }).catch(err => {
    console.error('Error on Dish Create WS: ', err.response.data);
  })
};