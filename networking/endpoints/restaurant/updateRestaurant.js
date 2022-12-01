import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { getHttpCodeMessage } from "../../../config/utilities";
import { setClientToken } from "../../api";
import { showErrorToast, showSuccessToast} from "../../../redux/slices/feedBackReducer";

export async function updateRestaurant(restoId = '', restoData = {}, dispatch = undefined){

  const URL = URL_SERVICES.UPDATE_RESTAURANT.replace('id', restoId);

  return axios.patch(URL, restoData)
  .then(response => {

    if (response.data){
      const msg = getHttpCodeMessage(response.status, CONSTANTS.ENPOINT_TYPE.UPDATE_RESTAURANT);

      if (dispatch && msg)
        dispatch(showSuccessToast(msg));
    }

    return response.data;
  }).catch(err => {

    if (err.response){
      const msg = getHttpCodeMessage(err.response.status, CONSTANTS.ENPOINT_TYPE.UPDATE_RESTAURANT);

      if (dispatch && msg)
        dispatch(showErrorToast(msg));
    }
    else if (err.message.includes('timeout')){
      if (dispatch)
        dispatch(showErrorToast(CONSTANTS.ERROR_MSGS.SERVER_ERROR));
    }
  })
  
}