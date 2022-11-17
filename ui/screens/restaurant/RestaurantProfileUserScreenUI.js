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
import MyWeekButtons from "../../components/WeekButton"


const RestaurantProfileUserScreenUI = ({
  restoDataname,
  restoDatarating,
  restoDatapriceRange,
  onPressCommentHandler,
  comments1,
  dishes1,
  showComments,
  showMap,
  showDishes,
  hourOpen,
  hourOpen2,
  hourClose,
  hourClose2,
  onBtnPressHandler,
  latitude,
  longitude,
  
    props}) => {
      const CommentComponent = () => {
        return (
    
             <CommentUserRestaurant
              comments={comments1}
             ></CommentUserRestaurant>
    
        )
    }
    
      const MapComponent = () => {
        region = {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }
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
   
      const MenuComponent = () => {
        return (       
            <DishFlatList 
             dishes={dishes1}
             ></DishFlatList>   
           
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

         <Text style={styles.title}>{restoDataname}</Text>
         <View style={styles.globalThree}>
           <Text style={styles.words} >{restoDatarating}</Text>
           <Icon name="star" color={colorPalette.Orange} size={20}></Icon>
           <Text style={styles.words}>{"  -   "}{restoDatapriceRange}</Text>
         </View>       
        <View style={styles.week}>
          <MyWeekButtons></MyWeekButtons>
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
         onPress={onPressCommentHandler}
         ></Icon>
         <Icon name='share' type='font-awesome' color={colorPalette.Orange}></Icon>
       </View>

       <View style={styles.buttons}>
         <MyButton
           title={CONSTANTS.SCREEN_TEXTS.MAP_LABEL}
           width={Dimensions.get("window").width*0.3}
           height={Dimensions.get("window").height*0.055}
           onPress={(e) => {onBtnPressHandler('map')} }
         ></MyButton>
         <MyButton
           title={CONSTANTS.SCREEN_TEXTS.MENU_LABEL}
           width={Dimensions.get("window").width*0.3}
           height={Dimensions.get("window").height*0.055}
           onPress={(e) => {onBtnPressHandler('menu')} }
         ></MyButton>
         <MyButton
           title={CONSTANTS.SCREEN_TEXTS.COMMENT_LABEL}
           width={Dimensions.get("window").width*0.32}
           height={Dimensions.get("window").height*0.055}
           onPress={(e) => {onBtnPressHandler('comment')} }
         ></MyButton>
      </View>
     
     {
       showComments && <CommentComponent/>
     }

     {
       showMap && <MapComponent/>
     }

     {
       showDishes && <MenuComponent/>
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
      width :'100%',
      marginTop : "1%"
       },
      carousal : {
        height : Dimensions.get('window').height * 0.3
      },
      title : {
        fontSize : Theme.font.LARGE,
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
  
      },
      week:{
          marginBottom : -Dimensions.get('window').height * 0.02,
          marginTop :  -Dimensions.get('window').height * 0.02
      },
      buttons : {
        flexDirection:'row',
        justifyContent: 'space-evenly',
        width :'100%' ,
        height : "30%",
        marginTop : '2%',
        marginBottom : -Dimensions.get('window').height * 0.24
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