import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { getHttpCodeMessage } from "../../../config/utilities";
import { setClientToken } from "../../api";
import { showErrorToast, showSuccessToast} from "../../../redux/slices/feedBackReducer";

export async function getOwnerRestaurants(ownerId, dispatch = undefined)
{
  const url = URL_SERVICES.RESTAURANTS_OWNER.replace('id', ownerId);

  return axios.get(url).then( (response) => {
    if (response.data){
      const msg = getHttpCodeMessage(response.status, CONSTANTS.ENPOINT_TYPE.GET_OWNER_RESTAURANTS);

      if (dispatch && msg)
        dispatch(showSuccessToast(msg));
    }
    return response.data;
  }).catch(err =>{
    if (err.response){
      const msg = getHttpCodeMessage(err.response.status, CONSTANTS.ENPOINT_TYPE.GET_OWNER_RESTAURANTS);

      if (dispatch && msg)
        dispatch(showErrorToast(msg));
    }
  }).finally(() => {
  })
}
