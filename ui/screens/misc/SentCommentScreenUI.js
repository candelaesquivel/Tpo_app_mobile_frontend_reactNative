import { View , StyleSheet , Dimensions} from "react-native";
import { NavBar } from "../../components/navBar";
import { colorPalette } from "../../styles/colors";
import { AirbnbRating, Text, ThemeConsumer } from "@rneui/themed";
import { Theme } from '../../styles/Theme';
import { InputText } from '../../components/InputText'
import { useSelector
 } from "react-redux";
 import { useState } from "react";
 import { MyButton } from "../../components/button";
 import createReview from "../../../networking/createReview"
import { ROUTES } from "..";
import { CONSTANTS } from "../../../config";

const SentCommentScreenUI = ({
    reviewDatarating,
    onRatingChangedHandler,
    onPriceChangedHandler,
    onCreatePressHandler,
    props}) => {
  
    return (
        <View style={styles.global}>
            <Text style={styles.words}>{CONSTANTS.SCREEN_TEXTS.RATING_LABEL}</Text>
            <View style={styles.rating}>
                <AirbnbRating 
                    defaultRating={reviewDatarating}
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
                onChange = {onPriceChangedHandler}
            ></InputText>

            <View style={styles.buttonsTwo}>
            < MyButton
                onPress={onCreatePressHandler}
                title={CONSTANTS.SCREEN_TEXTS.EMAIL_SENT_MSG}
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