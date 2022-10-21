import { View, Text , FlatList} from 'react-native'
import React from 'react'
import Comment from './comment'
import I18n from '../../assets/localization/I18n';

function CommentUserRestaurant() {

    const renderItem = ({ item }) => (
        <View  >
        <Comment
        userName={item.userName}
        comment={item.comment}
        ></Comment> 
        </View>
        ); 

    const COMMENTS = [

            {
              userName:'anonimo1',
              comment: 'jnsdjcdnscjndskcn fajds',
          
              },
              
            {
                userName:'anonimo2',
                comment: 'jnsdjcdnscjndskscn fajds',
            
                },
        
                
            {
                userName:'anonimo3',
                comment: 'jnsdjcdnsdcjndskcn fajds',
            
                },
          
        
       ];
  return (
    <View  >
  
     <Text >{I18n.t('comments')}</Text>

    <FlatList
        data={COMMENTS}
        renderItem={renderItem}
        keyExtractor ={item => item.userName}
        /> 
   
    </View>
  )
}

export default CommentUserRestaurant;