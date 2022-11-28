import React from 'react';
import { View , StyleSheet , Dimensions} from 'react-native';
import { Text, Card, Icon } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import { TouchableWithoutFeedback } from 'react-native';
import { Image } from 'react-native';

function RestaurantCardUser({
  name ='Rodizio',
  address='',
  score= 0, 
  favorite=true,
  restaurantId = '', 
  onPhotoPressHandler, 
  onFavoriteTouchHandler,
  pictures=[],
  props}) {

  const showRating = score > 0;

  const FavoriteIcon = ({props}) => {

    const onFavoriteIconPress = (e) => {
      onFavoriteTouchHandler(restaurantId);
    }

    if (favorite)
      return <Icon onPress={onFavoriteIconPress} name="favorite" color="red"  marginBottom={7}></Icon >;
    else
      return <Icon onPress={onFavoriteIconPress} name="favorite-border" color={colorPalette.Black}  marginBottom={7}></Icon >
  }

  const onPhotoPress = (event) => {
    if (onPhotoPressHandler)
      onPhotoPressHandler(restaurantId);
  }

  const photo = pictures.length > 0 ? 
  'data:image/png;base64,' + pictures[0] : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==';

  return (
    <View  style={styles.global}>
      <Card >
        <View style={styles.globalTwo}>
        <TouchableWithoutFeedback onPress={onPhotoPress}>
            <Image source ={{
                uri : photo,
              }}
              style ={{
                width : Dimensions.get('window').width*0.3,
                height : Dimensions.get('window').height*0.15
              }}></Image>
          </TouchableWithoutFeedback>
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
