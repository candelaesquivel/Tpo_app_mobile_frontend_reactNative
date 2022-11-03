import URL_SERVICES from "../config/config";
import axios from "axios";



function createReview(restaurantId,userId, reviewData){

  const URL = URL_SERVICES.CREATE_REVIEW.replace('restaurantId', restaurantId).replace('userId', userId);

  console.log('URL:', URL);

  return axios.post(URL, reviewData).then(response => {
    console.log('URL:', reviewData);
    return response.status;
  }).catch(err => {
    console.log(err);
  }).finally(() => {
  })
}

export default createReview;