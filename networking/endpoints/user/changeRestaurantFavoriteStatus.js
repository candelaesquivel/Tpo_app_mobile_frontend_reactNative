import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function changeRestaurantFavoriteStatus(userId, restaurantId)
{ 
  const URL = URL_SERVICES.CHANGE_RESTAURANT_FAVORITE.replace('id', userId);
  return axios.patch(URL, {
    restaurantId : restaurantId
  }).then(res => {
    return;
  }).catch(err => {
    console.error("Error on Toggle Restaurant Favorite Status: ", err);
    return;
  });
}

