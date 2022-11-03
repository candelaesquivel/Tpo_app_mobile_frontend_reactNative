import axios from "axios";
import URL_SERVICES from "../config/config";

async function getDishesFromRestaurant(restaurantId){
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

        idx = idx -1;
      }

      const dishInfo = {
        dishId : itr.id,
        name : itr.name,
        price : itr.price.$numberDecimal,
        discount : itr.discounts.$numberDecimal,
        isCeliac : itr.isGlutenFree,
        isVegan : itr.isVegan
      }

      dishes[idx].data.push(dishInfo);


    });

    return dishes;

  }).catch(err =>{
    console.error("Get dishes from Restaurant Error: ", err);
    return [];
  }).finally(() => {
  })
}

export default getDishesFromRestaurant;