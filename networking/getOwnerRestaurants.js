import URL_SERVICES from "../config/config"
import axios from 'axios';

async function wsGetOwnerRestaurants(ownerId)
{
  console.log("On Get Restaurants");

  let restaurants = [];

  const formData = new URLSearchParams();

  const url = URL_SERVICES.RESTAURANTS_OWNER.replace('id', ownerId);

  console.log("URL:", url);

  return axios.get(url).then( (response) => {
    let restos = [];

    response.data.forEach(itr => {
      restos.push({
        name : itr.name,
        address : itr.address.neighborhood + ' ' + itr.address.streetNumber,
        score : itr.averageRating.$numberDecimal
      });
    });

    return restos;

  }).catch(err =>{
    console.log(err);
  }).finally(() => {
    console.log('Everything is ok');
  })

  console.log('url:', URL_SERVICES.RESTAURANTS_OWNER);

  return fetch('http://10.0.2.2:8080/api/v1/users/' + ownerId + '/restaurants', {
    method : 'GET',
    headers : {
      'Content-Type' : 'application/json'
    },
  }).then((res) => res.json().then((json) => {
    console.log(json);
    return [];
  }))
  .catch(err => {
    console.log(err);
  })
}

export default wsGetOwnerRestaurants;