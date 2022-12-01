import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { getHttpCodeMessage } from "../../../config/utilities";
import { setClientToken } from "../../api";
import { showErrorToast, showSuccessToast} from "../../../redux/slices/feedBackReducer";

export async function deleteCategory(restaurantId = '', category = '', dispatch = undefined){

  const URL = URL_SERVICES.DELETE_CATEGORY.replace('restaurantId', restaurantId);

  console.log('DElete Params:', category)

  return axios.delete(URL, {
    data : {category : category}
  })
  .then(response => {
    if (response.data){
      const msg = getHttpCodeMessage(response.status, CONSTANTS.ENPOINT_TYPE.DELETE_CATEGORY);

      if (dispatch && msg)
        dispatch(showSuccessToast(msg));
    }
    return response.data;
  }).catch(err => {
    console.log(err.message);
    if (err.response){
      const msg = getHttpCodeMessage(err.response.status, CONSTANTS.ENPOINT_TYPE.DELETE_CATEGORY);

      if (dispatch && msg)
        dispatch(showErrorToast(msg));
    }
    else if (err.message.includes('timeout')){
      if (dispatch)
        dispatch(showErrorToast(CONSTANTS.ERROR_MSGS.SERVER_ERROR));
    }
  })
};