import axios from "axios";
import URL_SERVICES from "../config/config";

function getDishesFromRestaurant(restaurantId){
  console.log("On Get Dishes From Menu");

  const url = URL_SERVICES.DISH_LIST.replace('restaurantId', restaurantId);

  console.log("URL:", url);

  return axios.get(url).then( (response) => {
    let dishes = [];

    response.data.forEach(itr => {
      dishes.push({
        name : itr.name,
        address : itr.category,
        price : itr.price.$numberDecimal,
        discount : itr.discount.$numberDecimal
      });
    });

    return dishes;

  }).catch(err =>{
    console.log(err);
    return [];
  }).finally(() => {
    console.log('Everything is ok');
  })
}

export default getDishesFromMenu;