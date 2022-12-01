import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { getHttpCodeMessage } from "../../../config/utilities";
import { setClientToken } from "../../api";
import { showErrorToast, showSuccessToast} from "../../../redux/slices/feedBackReducer";

export async function createReview(restaurantId,userId, reviewData, dispatch = undefined){

  const URL = URL_SERVICES.CREATE_REVIEW.replace('restaurantId', restaurantId).replace('userId', userId);

  return axios.post(URL, reviewData).then(response => {
    if (response.data){
      const msg = getHttpCodeMessage(response.status, CONSTANTS.ENPOINT_TYPE.CREATE_REVIEW);

      if (dispatch && msg)
        dispatch(showSuccessToast(msg));
    }
    return response.status === 200
  }).catch(err => {

    if (err.response){
      const msg = getHttpCodeMessage(err.response.status, CONSTANTS.ENPOINT_TYPE.CREATE_REVIEW);

      if (dispatch && msg)
        dispatch(showErrorToast(msg));
    }
    else if (err.message.includes('timeout')){
      if (dispatch)
        dispatch(showErrorToast(CONSTANTS.ERROR_MSGS.SERVER_ERROR));
    }
    return false;
  })
}