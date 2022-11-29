import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function getDishData(restaurantId, dishId)
{
  const URL = URL_SERVICES.DISH_GET_INFO.replace('restaurantId', restaurantId).replace('dishId', dishId);
  
  return axios.get(URL).then((resp) => {
    return resp.data;
  }).catch(err => {
    console.error(CONSTANTS.ERROR_MSGS.ERROR_GET_DISH, err.response.data)
    return null;
  }).finally(() => {
  })
};