import URL_SERVICES from "../config/config"
import axios from 'axios';

async function getOwnerRestaurants(ownerId)
{
  const url = URL_SERVICES.RESTAURANTS_OWNER.replace('id', ownerId);

  return axios.get(url).then( (response) => {
    return response.data;
  }).catch(err =>{
    console.error("Error on Get Owner Restaurants: ", err);
  }).finally(() => {
  })
}

export default getOwnerRestaurants;