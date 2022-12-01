import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { getHttpCodeMessage } from "../../../config/utilities";
import { setClientToken } from "../../api";
import { showErrorToast, showSuccessToast} from "../../../redux/slices/feedBackReducer";

export async function createRestaurant(ownerId, restaurantData, dispatch = undefined){

  const dataToSent = {
    ...restaurantData,
    ownerId : ownerId
  };

  return await axios.post(URL_SERVICES.CREATE_RESTAURANT, dataToSent)
  .then(resp => {

    if (resp.data){
      const msg = getHttpCodeMessage(resp.status, CONSTANTS.ENPOINT_TYPE.CREATE_RESTAURANT);

      if (dispatch && msg)
        dispatch(showSuccessToast(msg));
    }

    return resp.data;
  }).catch(err => {

    if (err.response){
      const msg = getHttpCodeMessage(err.response.status, CONSTANTS.ENPOINT_TYPE.CREATE_RESTAURANT);

      if (dispatch && msg)
        dispatch(showErrorToast(msg));
    }
    else if (err.message.includes('timeout')){
      if (dispatch)
        dispatch(showErrorToast(CONSTANTS.ERROR_MSGS.SERVER_ERROR));
    }
  })
}