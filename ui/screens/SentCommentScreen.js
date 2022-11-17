import { View , StyleSheet , Dimensions} from "react-native";
import { NavBar } from "../components/navBar";
import { colorPalette } from "../styles/colors";
import { AirbnbRating, Text, ThemeConsumer } from "@rneui/themed";
import I18n from "../../assets/localization/I18n";
import { Theme } from '../styles/Theme';
import { InputText } from '../components/InputText'
import { useSelector
 } from "react-redux";
 import { useState } from "react";
 import { MyButton } from "../components/button";
 import createReview from "../../networking/createReview"
import { ROUTES } from "..";
import { CONSTANTS } from "../../config";
import { SentCommentScreenUI } from "./misc/SentCommentScreenUI";

export default function SentCommentScreen({navigation, props}){

    const currRestaurant = useSelector(state => state.session.restaurantSelectedId);
    const userId = useSelector(state => state.session.userId);

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


  