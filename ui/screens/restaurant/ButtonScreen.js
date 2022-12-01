import { View, Text , FlatList , StyleSheet , Dimensions, ScrollView} from 'react-native'
import React, { useState , useEffect} from 'react'
import CommentUserRestaurant from '../../components/commentUserRestaurant';
import { CONSTANTS } from "../../../config";
import { DishFlatList } from '../../components/DishFlatList';
import MapView, { PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { Theme } from '../../styles/Theme';
import { colorPalette } from '../../styles/colors';


function ButtonScreen({ navigation, route, props})
 {
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
      
      }

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
          </ScrollView>
          
        )
      }
  return (
    <View  style={styles.global}>
      {
          screenData.showComments &&  <CommentUserRestaurant 
          comments={screenData.comments}/>
        }

        {
          screenData.showMap && <MapComponent/>
        }

        {
          screenData.showDishes && 
          <DishFlatList 
          dishes={screenData.dishes}
            //onDishPhotoPressHandler={onDishPhotoPress}
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