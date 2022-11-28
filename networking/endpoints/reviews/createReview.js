import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { showErrorToast } from "../../../redux/slices/feedBackReducer";

export async function createReview(restaurantId,userId, reviewData, dispatch){

  const URL = URL_SERVICES.CREATE_REVIEW.replace('restaurantId', restaurantId).replace('userId', userId);

  return axios.post(URL, reviewData).then(response => {
    return response.status === 200
  }).catch(err => {
    dispatch(showErrorToast(err.response.data.message))
    console.log(err.response.data.message);
    return false;
  })
}