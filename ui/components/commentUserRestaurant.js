import { View, Text , FlatList, StyleSheet, Dimensions} from 'react-native'
import React from 'react'
import Comment from './comment'
import I18n from '../../assets/localization/I18n';
import { Theme } from '../styles/Theme';
import { colorPalette } from '../styles/colors';

function CommentUserRestaurant() {
  const COMMENTS = [

    {
      userName:'anonimo1',
      comment: 'jnsdjcdnscjndskcn fajds',
      score :4
  
      },
      
    {
        userName:'anonimo2',
        comment: 'jnsdjcdnscjndskscn fajds',
       score:2
        },

        
    {
        userName:'anonimo3',
        comment: 'jnsdjcdnsdcjndskcn fajds',
         score:1
        },
        {
          userName:'anonimo4',
          comment: 'jnsdjcdnscjndskcn fajds',
          score :4
      
          },
  

];
  const renderItem = ({ item }) => (

      <Comment
        userName={item.userName}
        comment={item.comment}
        score={item.score}
      ></Comment>   
        
      ); 

  return ( 
      <FlatList
          data={COMMENTS}
          renderItem={renderItem}
          keyExtractor ={item => item.userName}
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
    fontWeight: 'bold', 
    marginStart :"5%",    
  },
});