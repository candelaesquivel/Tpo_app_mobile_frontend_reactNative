import URL_SERVICES from "../config/config"
import axios from 'axios';

async function getFavoriteRestaurants(userId)
{
  console.log("On Get Favorite Restaurants");

  let restaurants = [];

  const url = URL_SERVICES.FAVORITE_RESTAURANTS_NORMAL_USER.replace('id', userId);


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
    console.error('Error on Get Favorite Restaurants: ', err);
  }).finally(() => {
  })
}

export default getFavoriteRestaurants;