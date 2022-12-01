import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function getDishesFromRestaurant(restaurantId){
  const url = URL_SERVICES.DISH_LIST.replace('restaurantId', restaurantId);

  return axios.get(url).then( (response) => {
    let dishes = []

    response.data.forEach(itr => {
      
      let idx = dishes.findIndex(dishData => dishData.category === itr.category);

      if (idx === -1)
      {
          idx = dishes.push({
          category : itr.category,
          data : []
        });

        idx = idx - 1;
      }

      dishes[idx].data.push(itr);
    });

    return dishes;

  }).catch(err =>{
    console.error("Get dishes from Restaurant Error: ", err.response.data);
    return [];
  }).finally(() => {
  })
}