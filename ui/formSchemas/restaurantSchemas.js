import * as yup from 'yup';
import { CONSTANTS } from '../../config';

export const restaurantSchema = {
  createRestaurant : yup.object().shape({
    name : yup.string().min(2).required(CONSTANTS.ERROR_MSGS.RESTO_NAME_REQUIRED),
    foodTypes : yup.array().required(CONSTANTS.ERROR_MSGS.RESTO_FOOD_TYPE_REQUIRED),
    priceRange : yup.string().required(CONSTANTS.ERROR_MSGS.RESTO_FOOD_TYPE_REQUIRED),
    address : yup.object().shape({
      streetName : yup.string().required(),
      streetNumber : yup.string().required(),
      neighborhood : yup.string().required(),
      city : yup.string().required(),
      state : yup.string().required(),
      country : yup.string().required()
    }).required(),
    zipCode : yup.string().required(),
  })
}