import axios from "axios";
import URL_SERVICES from "../config/config"

async function getDishData(restaurantId, dishId)
{
  const URL = URL_SERVICES.DISH_MODIFY.replace('restaurantId', restaurantId).replace('dishId', dishId);
  
  console.log("URL: ", URL);

  return axios.get(URL).then((resp) => {
    console.log("data:", resp.data);
    resp.data.discounts = resp.data.discounts.$numberDecimal;
    resp.data.price = resp.data.price.$numberDecimal;
    return resp.data;
  }).catch(err => {
    console.log("error: ", err)
  }).finally(() => {
    console.log('Dish founded');
  })
}

export default getDishData;