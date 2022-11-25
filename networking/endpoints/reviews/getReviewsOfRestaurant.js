import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function getReviewsOfRestaurant(restaurantId) {

    const url = URL_SERVICES.COMMENT_LIST.replace('restaurantId', restaurantId);

    return axios.get(url).then( (response) => {
      return response.data;
    }).catch(err =>{
      console.error(err.response.data);
      return [];
    })
  }
  