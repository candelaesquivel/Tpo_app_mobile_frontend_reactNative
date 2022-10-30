import axios from "axios";
import URL_SERVICES from "../config/config";

const defaultDish = {
  price : 1200,
}

function updateDish(restaurantId, dishId, dishData = defaultDish){

  const URL = URL_SERVICES.DISH_MODIFY.replace('restaurantId', restaurantId).replace(
    'dishId',
    dishId
  );

  console.log("URL: ", URL);

  return axios.patch(URL, {
    price : 1200
  }).then(resp => {
    console.log(resp.data);

  }).catch(err => {
    console.log(err);
  }).finally(() => {
    console.log('Dish Update Succesful')
  })
}

export default updateDish;