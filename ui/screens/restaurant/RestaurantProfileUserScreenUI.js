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
  hideDate=true,
  pictures=[],
  showDishes = false,

  onTimeSelectedHandler=(dayIndex) => {},

  openDate = new Date(),
  closeDate = new Date(),

  //onSectionBtnPressHandler,
  onSentCommentPressHandler,
 // onDishPhotoPressHandler,
  onSharePressHandler,

  onMapPressHandler,
  onCommentPressHandler,
  onMenuPressHandler,
  closeRest,
  ...props}) => {
  
    let openHour = openDate.getHours() + ':' + openDate.getMinutes();
    let closeHour = closeDate.getHours() + ':' + closeDate.getMinutes();

    return (
      <View>
      <View style={styles.global}>
       <View style={styles.carousal}>
         <Carousal
            data={pictures}
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
          <WeekButtons hideDate={hideDate} onTimeSelectedHandler={onTimeSelectedHandler}></WeekButtons>
        </View>
        <Text style={styles.words}> {CONSTANTS.SCREEN_TEXTS.OPEN_LABEL} {openHour}</Text>
        <Text style={styles.words}> {CONSTANTS.SCREEN_TEXTS.CLOSE_LABEL} {closeHour}</Text>
        <View style={styles.icons}>
            <Icon 
            name='comment' 
            type='font-awesome' 
            color={colorPalette.Orange}
            onPress={onSentCommentPressHandler}
            ></Icon>
            <View style={styles.view}></View>
            <Icon 
              name='share' 
              type='font-awesome' 
              color={colorPalette.Orange}
              onPress={onSharePressHandler}
              >
            </Icon>
        </View>
       {  closeRest && <Text style={styles.close}> {CONSTANTS.SCREEN_TEXTS.CLOSE_REST}</Text>} 
        {/* Buttons Section */}
        <View style={styles.buttons}>
          <MyButton
            title={CONSTANTS.SCREEN_TEXTS.MAP_LABEL}
            width={Dimensions.get("window").width*0.29}
            height={Dimensions.get("window").height*0.08}
            onPress={onMapPressHandler }
          ></MyButton>
          <MyButton
            title={CONSTANTS.SCREEN_TEXTS.MENU_LABEL}
            width={Dimensions.get("window").width*0.29}
            height={Dimensions.get("window").height*0.08}
            onPress={onMenuPressHandler }
          ></MyButton>
          <MyButton
            title={CONSTANTS.SCREEN_TEXTS.COMMENT_LABEL}
            width={Dimensions.get("window").width*0.38}
            height={Dimensions.get("window").height*0.08}
            onPress={onCommentPressHandler}
          ></MyButton>
        </View>

    
        {/* 

        {
          showDishes && 
          <DishFlatList 
            dishes={dishes}
            onDishPhotoPressHandler={onDishPhotoPressHandler}
          >

          </DishFlatList>   
        } */}

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
      justifyContent: 'center',
      width :Dimensions.get('window').width,
      marginTop : Dimensions.get('window').width*0.02,
      marginBottom : Dimensions.get('window').width*0.02
       },
      carousal : {
        height : Dimensions.get('window').height * 0.3
      },
      title : {
        fontSize : Theme.font.LARGE,
        fontWeight : Theme.font.FONTWEIGHT,
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
          marginBottom : -Dimensions.get('window').width*0.02,
          marginTop :  -Dimensions.get('window').width*0.02
      },
      buttons : {
        flexDirection:'row',
        justifyContent: 'space-evenly',
        width :Dimensions.get('window').width ,
        height : Dimensions.get('window').height * 0.3,
        marginTop : Dimensions.get('window').width*0.02,
        marginBottom : -Dimensions.get('window').width*0.02
      },
      view : {
        width :Dimensions.get('window').height * 0.03
      },
      wordButton : {
        fontSize: Theme.font.MEDIUM,
        fontFamily :'Roboto' ,
         color : colorPalette.Black
        },

        close : {
          color :colorPalette.Rojo,
          fontSize: Theme.font.MEDIUM,
          fontWeight : Theme.font.FONTWEIGHT,
        }
        // mapContainer: {
        //   alignSelf: 'center',
        //   height: 250,
        //   width: 250,
        // },
      
        // map: {
        //   ...StyleSheet.absoluteFillObject,
        // },
  });
  
  export {RestaurantProfileUserScreenUI}