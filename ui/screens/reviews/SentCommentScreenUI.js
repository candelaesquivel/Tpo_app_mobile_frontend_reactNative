import { View , StyleSheet , Dimensions} from "react-native";
import { colorPalette } from "../../styles/colors";
import { AirbnbRating, Text } from "@rneui/themed";
import { Theme } from '../../styles/Theme';
import { InputText } from '../../components/InputText'
import { MyButton } from "../../components/button";
import { CONSTANTS } from "../../../config";

const SentCommentScreenUI = ({
    review = '',
    rating = 1,
    onRatingChangedHandler,
    onReviewChangeHandler,
    onCreatePressHandler,
    props}) => {
  
    return (
        <View style={styles.global}>
            <Text style={styles.words}>{CONSTANTS.SCREEN_TEXTS.RATING_LABEL}</Text>
            <View style={styles.rating}>
                <AirbnbRating 
                    defaultRating={rating}
                    onFinishRating={onRatingChangedHandler}
                    reviews = {[]}
                    size = {30}
                    selectedColor = {colorPalette.Orange}
                    ></AirbnbRating>
            </View>     
            <Text style={styles.words}>{CONSTANTS.SCREEN_TEXTS.COMMENT_LABEL}</Text>
            <InputText 
                placeholder=""
                color={colorPalette.Cream}
                height={Dimensions.get("window").height*0.1}
                width={ Dimensions.get("window").width*0.6}
                limitLenght={30}
                onChangeText = {onReviewChangeHandler}
                defaultValue={review}
            ></InputText>

            <View style={styles.buttonsTwo}>
            < MyButton
                onPress={onCreatePressHandler}
                title={CONSTANTS.SCREEN_TEXTS.SENT_COMMENT_LABEL}
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
  
  export {SentCommentScreenUI}