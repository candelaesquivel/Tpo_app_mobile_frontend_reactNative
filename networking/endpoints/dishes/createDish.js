import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { getHttpCodeMessage } from "../../../config/utilities";
import { setClientToken } from "../../api";
import { showErrorToast, showSuccessToast} from "../../../redux/slices/feedBackReducer";

export async function createDish(restaurantId, dishData, dispatch = undefined){

  const URL = URL_SERVICES.DISH_CREATE.replace('restaurantId', restaurantId);

  return axios.post(URL, dishData)
  .then(response => {
    if (response.data){
      const msg = getHttpCodeMessage(response.status, CONSTANTS.ENPOINT_TYPE.CREATE_DISH);

      if (dispatch && msg)
        dispatch(showSuccessToast(msg));
    }
    return response.data;
  }).catch(err => {
    if (err.response){
      const msg = getHttpCodeMessage(err.response.status, CONSTANTS.ENPOINT_TYPE.CREATE_DISH);

      if (dispatch && msg)
        dispatch(showErrorToast(msg));
    }
  })
};