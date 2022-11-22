import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";


export async function createReview(restaurantId,userId, reviewData){

  const URL = URL_SERVICES.CREATE_REVIEW.replace('restaurantId', restaurantId).replace('userId', userId);

  return axios.post(URL, reviewData).then(response => {
    return response.status;
  }).catch(err => {
    console.error(err);
  }).finally(() => {
  })
}