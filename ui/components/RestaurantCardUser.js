import React from 'react';
import { View , StyleSheet , Dimensions} from 'react-native';
import { Text, Card, Icon } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import { Avatar } from "native-base";
import { getBase64Uri } from '../../config/utilities';

function RestaurantCardUser({
  name ='Rodizio',
  address='',
  score= 0, 
  favorite=true,
  restaurantId = '', 
  onPhotoPressHandler = (restaurantId) => {}, 
  onFavoriteIconPressHandler = (restaurantId) => {},
  pictures=[],
  props}) {

  const showRating = score > 0;

  const FavoriteIcon = ({props}) => {

    const onFavoriteIconPress = (e) => {
      onFavoriteIconPressHandler(restaurantId);
    }

    if (favorite)
      return <Icon onPress={onFavoriteIconPress} name="favorite" color="red"  marginBottom={7}></Icon >;
    else
      return <Icon onPress={onFavoriteIconPress} name="favorite-border" color={colorPalette.Black}  marginBottom={7}></Icon >
  }

  const onRestaurantPhotoPress = (event) => {
    if (onPhotoPressHandler)
      onPhotoPressHandler(restaurantId);
  }

  const imgFromBack = pictures.length > 0 ?  getBase64Uri(pictures[0]) : 'https://bit.ly/broken-link'; 

  return (
    <View  style={styles.global}>
      <Card >
        <View style={styles.globalTwo}>
          <Avatar
            bg="amber.500"
            source={{uri : imgFromBack}}
            size={'xl'}
            onTouchEnd={onRestaurantPhotoPress}
          >
          </Avatar>
          <View width={Dimensions.get('window').width*0.55} style={styles.globalThree} >
            <Text h4>{name}</Text>
            <Text>{address}</Text>
            {
              showRating && 
              <View style={styles.globalFour}>
                <Text> {Number(score).toFixed(1)} </Text>
                <Icon name="star" color={colorPalette.Orange} size={20}></Icon>
              </View>
            }
             
          </View>
          <View  style= {styles.globalFive}>
          <FavoriteIcon isFavorite></FavoriteIcon>
          </View>   
        </View>
        </Card>   
 </View>
  )
}

export default RestaurantCardUser;

const styles = StyleSheet.create({
  global:{
    alignItems : 'center' , 
    width: Dimensions.get('window').width
  },
  globalTwo : {
    flexDirection: 'row', 
    justifyContent : 'space-between'
  }
,
globalThree : {
  justifyContent : 'space-evenly', 
  marginLeft:10
},
globalFour : {
  flexDirection: 'row',
  alignItems: 'center'
},
globalFive : {
  flexDirection:'column-reverse'
}

});
