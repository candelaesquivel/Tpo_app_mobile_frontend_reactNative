import URL_SERVICES from "../config/config";
import axios from "axios";

const defaultDish = {
  name: "Pizza Margarita",
  price: 1000,
  discount: 0,
  description: "Pizza con tomate, queso y albahaca",
  category: "Criolla",
  ingredients: [
    "tomate",
    "queso",
    "albahaca"
  ],
  isVegan: false,
  isGlutenFree: false
}

function createDish(restaurantId, dishData = defaultDish){

  const URL = URL_SERVICES.DISH_CREATE.replace('restaurantId', restaurantId);

  console.log('URL:', URL);

  return axios.post(URL, dishData).then(response => {
    console.log('Dish Data:', response.data);
    return response.status;
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    console.log('Dish created');
  })
}

export default createDish;