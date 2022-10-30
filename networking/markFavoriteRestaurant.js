import URL_SERVICES from "../config/config";
import axios from 'axios';
import { CONSTANTS } from "../config";

async function toggleRestaurantFavorite(userId, restaurantId)
{ 
  const URL = URL_SERVICES.CHANGE_RESTAURANT_FAVORITE.replace('id', userId);

  return axios.post(URL, {
    restaurantId : restaurantId
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    console.log('Login Succesful')
  })
}

export default toggleRestaurantFavorite;
