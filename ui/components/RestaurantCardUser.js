import React from 'react';
import { View , StyleSheet , Dimensions} from 'react-native';
import { Text, Card, Icon } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import Images from '../../assets/images/index';
import { ROUTES } from '..';
import { useNavigation } from '@react-navigation/native';

function RestaurantCardUser({name ='Rodizio',address='',score= 0, favorite=true,
restaurantId = '', onFavoriteTouched={}, props}) {

  const navigation = useNavigation();

  const onPhotoPress = async (event) => {
    navigation.navigate(ROUTES.RESTAURANT_VIEW_USER);
  }

  const FavoriteIcon = ({props}) => {

    const onFavoriteIconPress = (e) => {
      onFavoriteTouched(restaurantId);
    }

    if (favorite)
      return <Icon onPress={onFavoriteIconPress} name="favorite" color="red"  marginBottom={7}></Icon >;
    else
      return <Icon onPress={onFavoriteIconPress} name="favorite-border" color={colorPalette.Black}  marginBottom={7}></Icon >
  }

  return (
    <View  style={styles.global}>
      <Card >
        <View style={styles.globalTwo}>
          <Images.logo 
            width='20%' 
            height={Dimensions.get('window').height*0.13}
            onPress={onPhotoPress}
          ></Images.logo>
          <View width={Dimensions.get('window').width*0.55} style={styles.globalThree} >
            <Text h4>{name}</Text>
            <Text>{address}</Text>
            <View style={styles.globalFour}>
              <Text> {score} </Text>
              <Icon name="star" color={colorPalette.Orange} size={20}></Icon>
            </View> 
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
    width: '100%' 
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
