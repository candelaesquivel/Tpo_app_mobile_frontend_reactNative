import axios from "axios";
import URL_SERVICES from "../config/config"

async function getRestaurants(userId)
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

export default getRestaurants;