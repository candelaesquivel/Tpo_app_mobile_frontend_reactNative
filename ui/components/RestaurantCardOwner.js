import React from 'react';
import { View , StyleSheet , Dimensions, TouchableWithoutFeedback} from 'react-native';
import { Text, Card, Icon } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import I18n from "../../assets/localization/I18n";
import { Theme } from '../styles/Theme';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '..';
import {restaurantSelectedAction} from '../../redux/actions'
import { Image } from 'react-native';

function RestaurantCardOwner({name = 'Rodizio', 

address = 'Honduras 5500', score = 0, restaurantId = '', pictures = [],
props}) {

  const showRating = score > 0;
  const dispatcher = useDispatch();
  const navigation = useNavigation();
  const state = useSelector(state => state.session);

  const onMenuHandlerPress = (event) => {
    dispatcher(restaurantSelectedAction(restaurantId));
    navigation.navigate(ROUTES.MENU_RESTAURANT_OWNER_STACK);
  }

  const onPhotoPress = (event) => {
    dispatcher(restaurantSelectedAction(restaurantId));
    navigation.navigate(ROUTES.RESTAURANT_EDIT_OWNER);
  }

  const photo = pictures.length > 0 ? 
  'data:image/png;base64,' + pictures[0] : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==';

  return (
      <Card>
        <View style={styles.global}>
          <TouchableWithoutFeedback onPress={onPhotoPress}>
            <Image source ={{
                uri : photo,
              }}
              style ={{
                width : '30%',
                height : '90%'
              }}></Image>
          </TouchableWithoutFeedback>
        {/* <Images.logo 
            width='20%' 
            height={Dimensions.get('window').height*0.13}
            onPress={onPhotoPress}
          ></Images.logo> */}

          <View width={Dimensions.get('window').width*0.55}   style={styles.globalTwo} >
            <Text style={styles.title} >{name}</Text>
            <Text style={styles.address}>{address}</Text>

          {
            showRating && 
            <View style={styles.globalThree}>
              <Text> {Number(score).toFixed(1)} </Text>
              <Icon name="star" color={colorPalette.Orange} size={20}></Icon>
            </View>
          }

          <View style={styles.globalFour} >
            <Text  onPress={onMenuHandlerPress} style={styles.menu} >{I18n.t('menu')}</Text>
          </View>

         </View>
      
        </View>
      </Card>
  )
}

export default RestaurantCardOwner;

const styles = StyleSheet.create({
  global : {
    flexDirection: 'row', 
    justifyContent : 'space-between' , 
    width : "90%"
  },
  globalTwo : {
    justifyContent : 'space-between',
    marginLeft : "10%",
    marginTop : "3%"
  },
  globalThree : {
    flexDirection: 'row',
    lignItems: 'center',
    
  },
  globalFour :{
    direction: 'RLT',
    alignItems: 'flex-end',
    
  },
  title :{
    fontSize: Theme.font.MEDIUM,
    color: colorPalette.Black, 
    fontWeight: 'bold', 
    marginBottom : "2%"
},
address :{
  fontSize: Theme.font.SMALL,
  color: colorPalette.Black, 
  marginBottom : "2%"
 
},
menu :{
  fontWeight: 'bold', 
  fontSize: Theme.font.MEDIUM
 },
});
