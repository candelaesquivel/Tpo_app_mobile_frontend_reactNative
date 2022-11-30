import * as yup from 'yup';
import { CONSTANTS } from '../../config';

export const userSchemas = {
 
  userName : yup.object().shape({
    name : yup.string()
    .min(2, CONSTANTS.ERROR_MSGS.ERROR_NAME_SHORT)
    .max(50, CONSTANTS.ERROR_MSGS.ERROR_NAME_LONG)
    .required(CONSTANTS.ERROR_MSGS.USER_NAME_REQUIRED),
  }),

  
}