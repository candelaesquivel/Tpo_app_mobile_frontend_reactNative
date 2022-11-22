import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function getRestaurants(userId)
{
  return axios.get(URL_SERVICES.RESTAURANTS_LIST, 
    {
      params : {
        userId : userId
      },
  }).then((response) => {
    return response.data;
  });
}