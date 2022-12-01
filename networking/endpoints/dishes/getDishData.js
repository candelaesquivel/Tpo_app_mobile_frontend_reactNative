import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { getHttpCodeMessage } from "../../../config/utilities";
import { setClientToken } from "../../api";
import { showErrorToast, showSuccessToast} from "../../../redux/slices/feedBackReducer";

export async function getDishData(restaurantId, dishId, dispatch = undefined)
{
  const URL = URL_SERVICES.DISH_GET_INFO.replace('restaurantId', restaurantId).replace('dishId', dishId);
  
  return axios.get(URL).then((response) => {
    if (response.data){
      const msg = getHttpCodeMessage(response.status, CONSTANTS.ENPOINT_TYPE.GET_DISH_DETAIL);

      if (dispatch && msg)
        dispatch(showSuccessToast(msg));
    }
    return response.data;
  }).catch(err => {
    if (err.response){
      const msg = getHttpCodeMessage(err.response.status, CONSTANTS.ENPOINT_TYPE.GET_DISH_DETAIL);

      if (dispatch && msg)
        dispatch(showErrorToast(msg));
    }
    return null;
  }).finally(() => {
  })
};