import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function deleteRestaurant(restaurantId){

  const URL = URL_SERVICES.DELETE_RESTAURANT.replace('id', restaurantId);

  try {
    const response = await axios.delete(URL);

    if (response.status === 200)
      return true;
    else
      return false;

  } catch (error) {
    console.log(CONSTANTS.ERROR_MSGS.ERROR_DELETE_REST, error.response.data);
  }
  
}