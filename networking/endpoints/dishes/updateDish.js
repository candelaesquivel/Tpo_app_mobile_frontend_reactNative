import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function updateDish(restaurantId, dishId, dishData){

  const URL = URL_SERVICES.DISH_MODIFY.replace('restaurantId', restaurantId).replace(
    'dishId',
    dishId
  );

  return axios.patch(URL, dishData).then(resp => {
    return resp.data;
  }).catch(err => {
    console.error(CONSTANTS.ERROR_MSGS.ERROR_UPD_DISHES, err.response.data);
    return null;
  })
};