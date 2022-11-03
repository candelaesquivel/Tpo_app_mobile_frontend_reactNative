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
        <View style={styles.global}>
            <Text style={styles.words}>{I18n.t('calification')}</Text>
            <View style={styles.rating}>
                <AirbnbRating 
                    defaultRating={reviewData.rating}
                    onFinishRating={onRatingChanged}
                    reviews = {[]}
                    size = {30}
                    selectedColor = {colorPalette.Orange}
                    ></AirbnbRating>
            </View>     
            <Text style={styles.words}>{I18n.t('comment')}</Text>
            <InputText 
                placeholder=""
                color={colorPalette.Cream}
                height={Dimensions.get("window").height*0.1}
                width={ Dimensions.get("window").width*0.6}
                limitLenght={30}
                onChange = {onPriceChanged}
            ></InputText>

            <View style={styles.buttonsTwo}>
            < MyButton
                onPress={onCreatePress}
                title={I18n.t('send')}
                width={ Dimensions.get("window").width*0.5}
                height={Dimensions.get("window").height*0.07}
                ></MyButton>
            </View>

            </View>
    )
}

const styles = StyleSheet.create({
global : {
    flexDirection : 'column', 
    alignItems : 'center',
    backgroundColor : colorPalette.White,
    height : "100%"
    },
words : {
    marginTop:Dimensions.get("window").width*0.1,  
    marginBottom:"2%", 
    marginTop :"6%",
    fontSize : Theme.font.MEDIUM,
    color : colorPalette.Black,
    },
rating : {
    marginTop : -Dimensions.get("window").width*0.1
    },
    buttonsTwo : {
        flexDirection: 'column' , 
        alignItems : "center" ,
        width : "100%",
        height : "75%" , 
        
    },
  });
  