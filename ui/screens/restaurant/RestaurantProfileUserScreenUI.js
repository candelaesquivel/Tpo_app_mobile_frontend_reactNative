import { View, Text , FlatList , StyleSheet , Dimensions, ScrollView} from 'react-native'
import React, { useState , useEffect} from 'react'
import { Icon , Button} from '@rneui/themed';
import { colorPalette } from '../../styles/colors';
import CommentUserRestaurant from '../../components/commentUserRestaurant';
import { CONSTANTS } from "../../../config";
import Carousal from '../../components/carousal';
import { Theme } from '../../styles/Theme';
import { MyButton } from '../../components/button';
import { DishFlatList } from '../../components/DishFlatList';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {WeekButtons} from '../../components/WeekButton';


const RestaurantProfileUserScreenUI = ({
  name = '',
  rating = 5,
  priceRange = '$',
  comments = [],
  dishes = [],
  region = {
    latitude: -34.6018,
    longitude: -58.424,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  },
  showComments,
  showMap,
  showDishes,
  hourOpen,
  hourOpen2,
  hourClose,
  hourClose2,
  onSectionBtnPressHandler,
  onSentCommentPressHandler,
  onDishPhotoPressHandler,
  onSharePressHandler,
  latitude,
  longitude,
  props}) => {
      
      const MapComponent = () => {
        return (
          <View style={styles.mapContainer}>
          <Text style={styles.words}>
            {CONSTANTS.SCREEN_TEXTS.MAP_LABEL}
          </Text>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={region}
          />
        </View>
        )
      }
   
    return (
      <View>
      <View style={styles.global}>
       <View style={styles.carousal}>
         <Carousal
           editBoolean={true}
         ></Carousal>
       </View>
         <Text style={styles.title}>{name}</Text>
         <View style={styles.globalThree}>
           <Text style={styles.words} >{rating}</Text>
           <Icon name="star" color={colorPalette.Orange} size={20}></Icon>
           <Text style={styles.words}>{"  -   "}{priceRange}</Text>
         </View>       
        <View style={styles.week}>
          <WeekButtons></WeekButtons>
        </View>
        <Text style={styles.words}> {CONSTANTS.SCREEN_TEXTS.OPEN_LABEL} {hourOpen}{hourOpen2} - {hourClose}{hourClose2}</Text>
        <View style={styles.icons}>
          <Icon
            name='heart' 
            type='font-awesome'
            color={colorPalette.Orange}
            ></Icon>
            <Icon 
            name='comment' 
            type='font-awesome' 
            color={colorPalette.Orange}
            onPress={onSentCommentPressHandler}
            ></Icon>
            <Icon 
              name='share' 
              type='font-awesome' 
              color={colorPalette.Orange}
              onPress={onSharePressHandler}
              >
            </Icon>
        </View>
        {/* Buttons Section */}
        <View style={styles.buttons}>
          <MyButton
            title={CONSTANTS.SCREEN_TEXTS.MAP_LABEL}
            width={Dimensions.get("window").width*0.3}
            height={Dimensions.get("window").height*0.08}
            onPress={(e) => {onSectionBtnPressHandler('map')} }
          ></MyButton>
          <MyButton
            title={CONSTANTS.SCREEN_TEXTS.MENU_LABEL}
            width={Dimensions.get("window").width*0.3}
            height={Dimensions.get("window").height*0.08}
            onPress={(e) => {onSectionBtnPressHandler('menu')} }
          ></MyButton>
          <MyButton
            title={CONSTANTS.SCREEN_TEXTS.COMMENT_LABEL}
            width={Dimensions.get("window").width*0.32}
            height={Dimensions.get("window").height*0.08}
            onPress={(e) => {onSectionBtnPressHandler('comment')} }
          ></MyButton>
        </View>
        {
          showComments && <CommentUserRestaurant comments={comments}/>
        }

        {
          showMap && <MapComponent/>
        }

        {
          showDishes && 
          <DishFlatList 
            dishes={dishes}
            onDishPhotoPressHandler={onDishPhotoPressHandler}
          >

          </DishFlatList>   
        }
      </View>
    </View>
    )
  }
  
  const styles = StyleSheet.create({
    global:{
      flexDirection : "column",
      alignItems:'center' ,
      height : Dimensions.get('window').height,
      backgroundColor : colorPalette.White
    },
    icons : {
      flexDirection:'row',
      justifyContent: 'space-evenly',
      width :Dimensions.get('window').width,
      marginTop : Dimensions.get('window').width*0.01
       },
      carousal : {
        height : Dimensions.get('window').height * 0.3
      },
      title : {
        fontSize : Theme.font.MEDIUM,
        fontWeight : "bold",
        color : colorPalette.Black
      },
      words : {
        fontSize : Theme.font.MEDIUM,
        color : colorPalette.Black,
        marginBottom : "1%"
      },
      globalThree : {
        flexDirection: 'row',
        alignItems: 'center',
        height : Dimensions.get('window').height * 0.05,
  
      },
      week:{
          marginBottom : -Dimensions.get('window').height * 0.02,
          marginTop :  -Dimensions.get('window').height * 0.02
      },
      buttons : {
        flexDirection:'row',
        justifyContent: 'space-evenly',
        width :Dimensions.get('window').width ,
        height : Dimensions.get('window').height * 0.3,
        marginTop : Dimensions.get('window').height * 0.02,
        marginBottom : -Dimensions.get('window').height * 0.22
      },
      wordButton : {
        fontSize: Theme.font.MEDIUM,
        fontFamily :'Roboto' ,
         color : colorPalette.Black
        },
        mapContainer: {
          alignSelf: 'center',
          height: 250,
          width: 250,
        },
      
        map: {
          ...StyleSheet.absoluteFillObject,
        },
  });
  
  export {RestaurantProfileUserScreenUI}