import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";
import { getHttpCodeMessage } from "../../../config/utilities";
import { setClientToken } from "../../api";
import { showErrorToast, showSuccessToast} from "../../../redux/slices/feedBackReducer";

export async function getDishesFromRestaurant(restaurantId, dispatch = undefined){
  const url = URL_SERVICES.DISH_LIST.replace('restaurantId', restaurantId);

  return axios.get(url).then( (response) => {
    let dishes = []

    response.data.forEach(itr => {
      
      let idx = dishes.findIndex(dishData => dishData.category === itr.category);

      if (idx === -1)
      {
          idx = dishes.push({
          category : itr.category,
          data : []
        });

        idx = idx - 1;
      }

      dishes[idx].data.push(itr);
    });

    if (response.data){
      const msg = getHttpCodeMessage(response.status, CONSTANTS.ENPOINT_TYPE.GET_RESTAURANT_DISHES);

      if (dispatch && msg)
        dispatch(showSuccessToast(msg));
    }

    return dishes;

  }).catch(err =>{
    if (err.response){
      const msg = getHttpCodeMessage(err.response.status, CONSTANTS.ENPOINT_TYPE.GET_RESTAURANT_DISHES);

      if (dispatch && msg)
        dispatch(showErrorToast(msg));
    }
    return [];
  }).finally(() => {
  })
}