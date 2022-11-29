import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function getRestaurants(searchParams)
{ 

  return axios.get(URL_SERVICES.RESTAURANTS_LIST, 
    {
      params : {
        ...searchParams,
      },
  }).then((response) => {
    return response.data;
  }).catch(err => {
    console.log(CONSTANTS.ERROR_MSGS.ERROR_GET_RESTAURANTS_SEARCH, err.response.data);
  });
}