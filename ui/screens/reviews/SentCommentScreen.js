import { useSelector
 } from "react-redux";
 import { useState } from "react";
import { ROUTES } from "../..";
import { SentCommentScreenUI } from "./misc/SentCommentScreenUI";

export default function SentCommentScreen({navigation, props}){

    const currRestaurant = useSelector(state => state.user.restaurantSelectedId);
    const userId = useSelector(state => state.user.userId);

    const [reviewData, setReviewData] = useState({
        rating : 1,
        comment : '',
      });

      const onRatingChanged = (value) => {
        setReviewData({...reviewData, 'rating' : value})
      }
    
      const onPriceChanged = ({ nativeEvent: { eventCount, target, text} }) => {
        setReviewData({...reviewData, 'comment' : text})
      }

      const onCreatePress = async (event) => {
        console.log(reviewData)
        const result= await createReview(currRestaurant,userId, reviewData);
        
        if (result)
          navigation.navigate(ROUTES.RESTAURANT_VIEW_USER);
      }
    
    return (
     <SentCommentScreenUI>
        reviewDatarating={reviewData.rating}
        onRatingChangedHandler={onRatingChanged}
        onPriceChangedHandler={onPriceChanged}
        onCreatePressHandler={onCreatePress}
     </SentCommentScreenUI>
    )
}


  