import * as yup from 'yup';
import { CONSTANTS } from '../../config';

export const dishSchemas = {
  createDish : yup.object().shape({
    name : yup.string().min(2).required(CONSTANTS.ERROR_MSGS.DISH_NAME_REQUIRED),
    price : yup.number().required(CONSTANTS.ERROR_MSGS.DISH_PRICE_REQUIRED),
    ingredients : yup.array().min(1).required(CONSTANTS.ERROR_MSGS.DISH_INGREDIENTS_REQUIRED),
    category : yup.string().required(CONSTANTS.ERROR_MSGS.DISH_CATEGORY_REQUIRED),
  }),
};