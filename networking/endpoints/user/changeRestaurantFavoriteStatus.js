import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { showErrorToast, showSuccessToast} from "../../../redux/slices/feedBackReducer";

export async function changeRestaurantFavoriteStatus(userId, restaurantId, dispatch)
{ 
  const URL = URL_SERVICES.CHANGE_RESTAURANT_FAVORITE.replace('id', userId);
  return axios.patch(URL, {
    restaurantId : restaurantId
  }).then(res => {
    dispatch(showSuccessToast('User Favorite Updated'));
    return;
  }).catch(err => {
    dispatch(showErrorToast(err.response.data.message));
    console.error(CONSTANTS.ERROR_MSGS.ERROR_REST_FAV, err);
    return;
  });
}

