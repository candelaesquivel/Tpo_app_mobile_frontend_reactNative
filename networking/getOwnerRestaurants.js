import URL_SERVICES from "../config/config"
import axios from 'axios';

async function getOwnerRestaurants(ownerId)
{
  console.log("On Get Restaurants");

  const url = URL_SERVICES.RESTAURANTS_OWNER.replace('id', ownerId);

  console.log("URL:", url);

  return axios.get(url).then( (response) => {
    let restos = [];

    response.data.forEach(itr => {
      restos.push({
        name : itr.name,
        address : itr.address.neighborhood + ' ' + itr.address.streetNumber,
        score : itr.averageRating.$numberDecimal,
        restaurantId : itr.id,
      });
    });

    return restos;

  }).catch(err =>{
    console.log(err);
  }).finally(() => {
    console.log('Everything is ok');
  })
}

export default getOwnerRestaurants;