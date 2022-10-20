import URL_SERVICES from "../config/config"

async function getRestaurants({distance, foodType, princeRange, rating, name})
{
  console.log("On Get Restaurants");

  let restaurants = [];

  return fetch(URL_SERVICES.RESTAURANTS_LIST, {
    method : 'GET',
    headers : {
      'Content-Type' : 'application/json'
    },
  }).then((res) => res.json().then((json) => {

    json.forEach(element => {
      let resInfo = {
        name : element.name,
        address : element.address.neighborhood + ' ' + element.address.streetNumber,
        score : 0,
        favorite : false
      }

      restaurants.push(resInfo);
    });

    return restaurants;
  }))
  .catch(err => {
    console.log(err);
  })
}

export default getRestaurants;