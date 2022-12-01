import { View, Text , FlatList , StyleSheet , Dimensions, ScrollView} from 'react-native'
import React, { useState , useEffect} from 'react'
import CommentUserRestaurant from '../../components/commentUserRestaurant';
import { CONSTANTS } from "../../../config";
import { DishFlatList } from '../../components/DishFlatList';
import MapView, { PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { Theme } from '../../styles/Theme';
import { colorPalette } from '../../styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';
import { useCallback } from 'react';
import { reviewWS, dishesWS } from '../../../networking/endpoints';

function ButtonScreen({ navigation, route, props})
 {
    const restaurantId = useSelector(state => state.user.restaurantSelectedId);
    const dispatch = useDispatch();

    const [dishes, setDishes] = useState([]);
    const [comments, setComments] = useState([]);
    const isFocused = useIsFocused();

    

    const fillCommentsList = async () => {
      const newComments = await reviewWS.getReviewsOfRestaurant(restaurantId, dispatch);
      setComments(newComments);
    }

    const fillDishList = async () => {
      const newDishes = await dishesWS.getDishesFromRestaurant(restaurantId, dispatch);
      setDishes(newDishes);
    }
    const screenData = {

      showMap : route.params ? route.params.showMap : false,
    
      showComments : route.params ? route.params.showComments : false,
    
      showDishes : route.params ? route.params.showDishes : false,
    
      dishes : route.params ? route.params.dishes : [],
    
      comments : route.params ? route.params.comments : [],
    
      regionMap : route.params ? route.params.regionMap :
       {
          latitude: -34.6018,
          longitude: -58.424,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        },

      address : route.params.address ? route.params.address : '',

      onDishPhotoPress : route.params ? route.params.onDishPhotoPressHandler : () => {}
    
    }

    useFocusEffect(
      useCallback(() => {
        
        if (screenData.showComments)
          fillCommentsList();

        if (screenData.showDishes)
          fillDishList();
  
        return () => {
          if (!isFocused){
            setDishes([]);
            setComments([])
          }
        }
      }, [isFocused])
    );

    useEffect(() => {

      let title = '';

      if (screenData.showComments)
        title = CONSTANTS.SCREEN_TITLES.COMMENTS_TITLE;
      else if (screenData.showDishes)
        title = CONSTANTS.SCREEN_TITLES.RESTAURANT_MENU;
      else if (screenData.showMap)
        title = CONSTANTS.SCREEN_TITLES.MAP_TITLE;
      
        navigation.setOptions({
          title : title
        });
    }, [navigation])

    

         const MapComponent = () => {
        return (
          <ScrollView>
            <View style={styles.mapContainer}>
            <Text style={styles.words}>
              {CONSTANTS.SCREEN_TEXTS.MAP_LABEL}
            </Text>
            <MapView
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              region={screenData.regionMap}
            >
              <Marker
                title={CONSTANTS.SCREEN_TEXTS.ADDRESS_LABEL}
                coordinate={screenData.regionMap}
              >
              </Marker>
            </MapView>
          </View>
            <View style={{alignSelf : 'center', alignContent : 'center'}}>
              <Text style={styles.words}>{screenData.address}</Text>
            </View>
          </ScrollView>
          
        )
      }
  return (
    <View  style={styles.global}>
      {
          screenData.showComments &&  <CommentUserRestaurant 
          comments={comments}/>
        }

        {
          screenData.showMap && <MapComponent/>
        }

        {
          screenData.showDishes && 
          <DishFlatList 
          dishes={dishes}
          onDishPhotoPressHandler={screenData.onDishPhotoPress}
        > </DishFlatList>     
 }
    </View>
  )
}

export default  ButtonScreen;

const styles = StyleSheet.create({ 
    global : {
        width : Dimensions.get('window').width,
        height :Dimensions.get('window').height,
        backgroundColor : colorPalette.White
    },
    mapContainer: {
        marginTop : Dimensions.get('window').height*0.05,
        alignSelf: 'center',
        height: Dimensions.get('window').height*0.4,
        width: Dimensions.get('window').width*0.9,
      },
        map: {
          ...StyleSheet.absoluteFillObject,
        },
        words : {
            fontSize : Theme.font.MEDIUM,
            color : colorPalette.Black,
            marginBottom : "1%"
          },
  });