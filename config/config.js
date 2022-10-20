const URL_API = "http://10.0.2.2:8080/api/v1/";
console.log("url",URL_API);

const RESTAURANT_ROUTE = URL_API + '/restaurants/';
const USER_ROUTE = URL_API + '/users/'

const URL_SERVICES = {
  // AUTH
  REGISTER_OWNER : USER_ROUTE + 'register',
  LOGIN : USER_ROUTE + 'login',
  LOGOUT : USER_ROUTE + 'logout',
  RECOVER_PASSWORD : USER_ROUTE + 'recoverPassword',

  // User Routes
  GET_USER_INFO : USER_ROUTE + '',
  UPLOAD_USER_IMAGE : USER_ROUTE + '/image',
  FAVORITE_RESTAURANTS_NORMAL_USER : USER_ROUTE + 'favorites',
  RESTAURANTS_OWNER : USER_ROUTE + 'restaurants',

  // Restaurants
  RESTAURANTS_LIST : USER_ROUTE + '/',

  // Status Server check
  HEALTH_CHECK : URL_API + 'health',
}

export default URL_SERVICES;