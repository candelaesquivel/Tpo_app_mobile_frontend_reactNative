import React from 'react';
import { View, Image , StyleSheet , Dimensions} from 'react-native';
import { Text, Card, AirbnbRating } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import I18n from "../../assets/localization/I18n";
import { Theme } from '../styles/Theme';


export default function Comment(props) {

  return (
 
    <Card  containerStyle={styles.global}>
       <View  style={styles.globalTwo} >
         <Text h4 style={{color: colorPalette.Black}}>{props.userName }</Text>
         <Text style={styles.words}>{props.comment}</Text>
        <AirbnbRating 
          defaultRating={props.score}
          reviews = {[]}
          size = {25}
          selectedColor = {colorPalette.Orange}></AirbnbRating> 
      
       </View>
    </Card>     

  )
}

const styles = StyleSheet.create({
  global:{
    backgroundColor : colorPalette.Cream , 
    alignItems: "center",
    width  : Dimensions.get("window").width*0.9,
    height : Dimensions.get("screen").height*0.25,
   
  },
  globalTwo : {
    alignItems: 'center'
   },
  words :{
    fontSize: Theme.font.MEDIUM,
    color: colorPalette.Black, 
    marginBottom : -8
},
});
