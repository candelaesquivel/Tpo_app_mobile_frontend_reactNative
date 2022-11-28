import { useSelector
 } from "react-redux";
 import { useState } from "react";
import { ROUTES } from "../..";
import {SentCommentScreenUI} from './SentCommentScreenUI';
import { reviewWS } from "../../../networking/endpoints";
import { useFormik } from "formik";
import {reviewSchema} from '../../formSchemas/reviewSchemas';

export default function SentCommentScreen({navigation, props}){

    const currRestaurant = useSelector(state => state.user.restaurantSelectedId);
    const userId = useSelector(state => state.user.userId);

    const formik = useFormik({
      initialValues : {
        comment : '',
        rating : 1,
      },
      validationSchema : reviewSchema.createReview,
      onSubmit(values){
        onCreatePress();
      }
    })

    const onRatingChange = (value) => {
      formik.setFieldValue('rating', value)
    }

    const onCreatePress = async () => {
      try {
        const result= await reviewWS.createReview(currRestaurant, userId, formik.values);
        if (result)
          navigation.goBack();
      } catch (error) {
        
      }
    }

    console.log('Formik sent review: ', formik.values);
    
    return (
     <SentCommentScreenUI
        comment={formik.values.comment}
        rating={formik.values.rating}
        onCommentChangeHandler={formik.handleChange('comment')}
        onRatingChangedHandler={onRatingChange}
        onCreatePressHandler={formik.handleSubmit}
     >
     </SentCommentScreenUI>
    )
}


  