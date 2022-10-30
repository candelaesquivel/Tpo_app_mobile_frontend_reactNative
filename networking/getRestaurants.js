import axios from "axios";
import URL_SERVICES from "../config/config"

async function getRestaurants(userId)
{
  console.log("On Get Restaurants");

  let restaurants = [];

  return axios.get(URL_SERVICES.RESTAURANTS_LIST, 
    {
      params : {
        userId : userId
      },
  }).then((response) => {
    let restos = [];

    response.data.forEach(itr => {
      restos.push({
        name : itr.name,
        address : itr.address.neighborhood + ' ' + itr.address.streetNumber,
        score : itr.averageRating.$numberDecimal,
        restaurantId : itr._id, // Is _id because the list is not created by populate method in Mongodb
        isFavorite : itr.isFavorite
      });
    });

    return restos;
  });
}

export default getRestaurants;