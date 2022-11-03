import URL_SERVICES from "../config/config";
import axios from 'axios';
import { CONSTANTS } from "../config";

async function toggleRestaurantFavorite(userId, restaurantId)
{ 
  const URL = URL_SERVICES.CHANGE_RESTAURANT_FAVORITE.replace('id', userId);

  return axios.patch(URL, {
    restaurantId : restaurantId
  }).then(res => {
    return;
  }).catch(err => {
    console.error("Error on Toggle Restaurant Favorite Status: ", err);
  }).finally(() => {
  })
}

export default toggleRestaurantFavorite;
