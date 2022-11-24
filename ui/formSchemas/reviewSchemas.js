import * as yup from 'yup';
import { CONSTANTS } from '../../config';

export const reviewSchema = {
  createReview : yup.object().shape({
    review : yup.string()
    .min(CONSTANTS.MIN_LENGTH_REVIEW_TEXT, ({ }) => CONSTANTS.ERROR_MSGS.REVIEW_TEXT_MIN_LENGTH)
    .required(CONSTANTS.ERROR_MSGS.REVIEW_TEXT_REQUIRED),
    rating : yup.number().min(1).max(5)
  })
}