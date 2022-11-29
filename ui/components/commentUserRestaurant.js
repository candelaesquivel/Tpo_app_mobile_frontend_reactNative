import { View, Text , FlatList, StyleSheet, Dimensions} from 'react-native'
import React from 'react'
import Comment from './comment'
import I18n from '../../assets/localization/I18n';
import { Theme } from '../styles/Theme';
import { colorPalette } from '../styles/colors';

function CommentUserRestaurant({comments, props}) {
  
const renderItem = ({ item }) => (

      <Comment
        userName={item.name}
        score={item.rating}
        comment={item.comment}
      ></Comment>   
        
      ); 

  return ( 
      <FlatList
          data={comments}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          ListFooterComponent={<View style={{height : Dimensions.get('window').height * 0.12}}></View>}
          /> 
  )
}

export default CommentUserRestaurant;

const styles = StyleSheet.create({
  global:{
    flexDirection : "column",
    alignItems : "center",
    height :  Dimensions.get('window').height*0.23,
    width :  Dimensions.get('window').width,
    backgroundColor : colorPalette.Orange,
    marginBottom : 10
  },
 title :{
    fontSize: Theme.font.MEDIUM,
    color: colorPalette.Black, 
    fontWeight: Theme.font.FONTWEIGHT, 
    marginStart :"5%",    
  },
});