import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { getHttpCodeMessage } from "../../../config/utilities";
import { setClientToken } from "../../api";
import { showErrorToast, showSuccessToast} from "../../../redux/slices/feedBackReducer";

export async function deleteDish(restaurantId, dishId, dispatch = undefined){

  const URL = URL_SERVICES.DISH_DELETE.replace('restaurantId', restaurantId).
  replace('dishId', dishId);

  return axios.delete(URL)
  .then(response => {
    if (response.data){
      const msg = getHttpCodeMessage(response.status, CONSTANTS.ENPOINT_TYPE.DELETE_DISH);

      if (dispatch && msg)
        dispatch(showSuccessToast(msg));
    }
    return response.status === 200;
  }).catch(err => {
    if (err.response){
      const msg = getHttpCodeMessage(err.response.status, CONSTANTS.ENPOINT_TYPE.DELETE_DISH);

      if (dispatch && msg)
        dispatch(showErrorToast(msg));
    }
  })
}