import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { getHttpCodeMessage } from "../../../config/utilities";
import { setClientToken } from "../../api";
import { showErrorToast, showSuccessToast} from "../../../redux/slices/feedBackReducer";

export async function deleteRestaurant(restaurantId, dispatch = undefined){

  const URL = URL_SERVICES.DELETE_RESTAURANT.replace('id', restaurantId);

  return axios.delete(URL).then(response => {
    if (response.data){
      const msg = getHttpCodeMessage(response.status, CONSTANTS.ENPOINT_TYPE.DELETE_RESTAURANT);

      if (dispatch && msg)
        dispatch(showSuccessToast(msg));
    }

    return response.status === 200;

  }).catch(err => {

    if (err.response){
      const msg = getHttpCodeMessage(err.response.status, CONSTANTS.ENPOINT_TYPE.DELETE_RESTAURANT);

      if (dispatch && msg)
        dispatch(showErrorToast(msg));
    }
    else if (err.message.includes('timeout')){
      if (dispatch)
        dispatch(showErrorToast(CONSTANTS.ERROR_MSGS.SERVER_ERROR));
    }
  });
}