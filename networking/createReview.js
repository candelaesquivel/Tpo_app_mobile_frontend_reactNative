import URL_SERVICES from "../config/config";
import axios from "axios";



async function createReview(restaurantId,userId, reviewData){

  const URL = URL_SERVICES.CREATE_REVIEW.replace('restaurantId', restaurantId).replace('userId', userId);

  return axios.post(URL, reviewData).then(response => {
    return response.status;
  }).catch(err => {
    console.error(err);
  }).finally(() => {
  })
}

export default createReview;