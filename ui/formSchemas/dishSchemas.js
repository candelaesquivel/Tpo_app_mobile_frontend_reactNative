import * as yup from 'yup';
import { CONSTANTS } from '../../config';

export const dishSchemas = {
  createDish : yup.object().shape({
    name : yup.string().min(2,CONSTANTS.ERROR_MSGS.MIN_NAME).required(CONSTANTS.ERROR_MSGS.DISH_NAME_REQUIRED),
    price : yup.number().typeError(CONSTANTS.ERROR_MSGS.NUMBER_ERROR).required(CONSTANTS.ERROR_MSGS.DISH_PRICE_REQUIRED),
    ingredients : yup.string().min(2,CONSTANTS.ERROR_MSGS.MIN_INGREDIENTS).required(CONSTANTS.ERROR_MSGS.DISH_INGREDIENTS_REQUIRED),
    category : yup.string().required(CONSTANTS.ERROR_MSGS.DISH_CATEGORY_REQUIRED),
  }),

  category : yup.object().shape({
    category : yup.string().min(2).required(CONSTANTS.ERROR_MSGS.DISH_NAME_REQUIRED),
  }),
};