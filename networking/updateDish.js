import axios from "axios";
import URL_SERVICES from "../config/config";

function updateDish(restaurantId, dishId, dishData){

  const URL = URL_SERVICES.DISH_MODIFY.replace('restaurantId', restaurantId).replace(
    'dishId',
    dishId
  );

  console.log('Dish Data: ', dishData);

  console.log("URL: ", URL);

  return axios.patch(URL, dishData).then(resp => {
    console.log('Dish Updated:', resp.data);
  }).catch(err => {
    console.log('Error on Update dish: ', err);
  }).finally(() => {
  })
}

export default updateDish;