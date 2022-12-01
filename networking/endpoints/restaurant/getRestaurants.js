import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { getHttpCodeMessage } from "../../../config/utilities";
import { setClientToken } from "../../api";
import { showErrorToast, showSuccessToast} from "../../../redux/slices/feedBackReducer";

export async function getRestaurants(searchParams, dispatch = undefined)
{ 

  return axios.get(URL_SERVICES.RESTAURANTS_LIST, 
    {
      params : {
        ...searchParams,
      },
  }).then((response) => {
    if (response.data){
      const msg = getHttpCodeMessage(response.status, CONSTANTS.ENPOINT_TYPE.GET_ALL_RESTAURANTS);

      if (dispatch && msg)
        dispatch(showSuccessToast(msg));
    }
    return response.data;
  }).catch(err => {
    if (err.response){
      const msg = getHttpCodeMessage(err.response.status, CONSTANTS.ENPOINT_TYPE.GET_ALL_RESTAURANTS);

      if (dispatch && msg)
        dispatch(showErrorToast(msg));
    }
  });
}