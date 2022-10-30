import axios from "axios";
import URL_SERVICES from "../config/config";

function getDishesFromRestaurant(restaurantId){
  console.log("On Get Dishes From Menu");

  const url = URL_SERVICES.DISH_LIST.replace('restaurantId', restaurantId);

  console.log("URL:", url);

  return axios.get(url).then( (response) => {
    let dishes = []

    console.log(response.data);

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

      console.log("IDX: ", idx);

      console.log(itr.name);
      
      const dishInfo = {
        name : itr.name,
        price : itr.price.$numberDecimal,
        discount : itr.discounts.$numberDecimal
      }

      dishes[idx].data.push(dishInfo);

      console.log(dishes[idx]);

    });

    return dishes;

  }).catch(err =>{
    console.log(err);
    return [];
  }).finally(() => {
    console.log('Everything is ok');
  })
}

export default getDishesFromRestaurant;