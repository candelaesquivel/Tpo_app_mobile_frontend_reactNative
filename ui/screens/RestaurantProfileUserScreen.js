import { View, Text , FlatList , StyleSheet , Dimensions, ScrollView} from 'react-native'
import React, { useState , useEffect} from 'react'
import Images from '../../assets/images/index';
import { Icon , Button} from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import CommentUserRestaurant from '../components/commentUserRestaurant';
import I18n from '../../assets/localization/I18n';
import Mapa from '../components/mapa';
import { CONSTANTS } from "../../config";
import Carousal from '../components/carousal';
import { Theme } from '../styles/Theme';
import { MyButton } from '../components/button';
import { DishFlatList } from '../components/DishFlatList';
import { GetDishesFromRestaurant } from '../../networking';
import { GetCommentsFromRestaurant } from '../../networking';
import { useSelector } from 'react-redux';
import { ROUTES } from '..';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useCallback } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

function RestaurantProfileUserScreen({navigation, route, name='Mudra',
hourOpen=10,hourOpen2='am',hourClose=20,hourClose2='pm',
calification=4, priceRange='$$$$', latitude=-34.603722, longitude=-58.381592, sprops}) {

  const restoData = {
    name : route.params.name,
    rating : route.params.averageRating.toFixed(2),
    priceRange : route.params.priceRange,
  };

  const [showComments , setShowComments]= useState(false);
  const [showMap , setShowMap]= useState(false);
  const [showDishes , setShowDishes]= useState(false);

  const [dishes, setDishes] = useState([]);
  const [comments, setComments] = useState([]);

  const [forceRender, setForceRender] = useState(false);

  const isFocused = useIsFocused();

  const restoId = useSelector((state) => state.session.restaurantSelectedId);

  const fillCommentsList = async () => {
    const newComments = await GetCommentsFromRestaurant(restoId);
    setComments(newComments);
  }

  const fillDishList = async () => {
    const newDishes = await GetDishesFromRestaurant(restoId);
    setDishes(newDishes);
  }

  useFocusEffect(
    useCallback(() => {

      if (showComments)
        fillCommentsList();

      if (showDishes)
        fillDishList();

      return () => {

        if (!isFocused){
          setShowComments(false);
          setShowDishes(false);
          setShowMap(false);
          setDishes([]);
          setComments([]);
        }
      }
    }, [isFocused, showDishes, showComments])
  )

  const onBtnPress = (component) => {

    if (component === 'map')
    {
      setComments([]);
      setDishes([]);
      setShowComments(false);
      setShowDishes(false);
      setShowMap(true);
    }

    if (component === 'menu')
    {
      setComments([]);
      setShowComments(false);
      setShowDishes(true);
      setShowMap(false);
    }

    if (component === 'comment')
    {
      setDishes([]);
      setShowComments(true);
      setShowDishes(false);
      setShowMap(false);
    }
  }

  const CommentComponent = () => {
    return (

         <CommentUserRestaurant
          comments={comments}
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
         dishes={dishes}
         ></DishFlatList>   
       
    )
  }
  const onPressComment = (event) => {
    navigation.navigate(ROUTES.USER_SENT_COMMENT);
  }
  return (
    <View>

       <View style={styles.global}>
        <View style={styles.carousal}>
          <Carousal
            editBoolean={true}
          ></Carousal>
        </View>

          <Text style={styles.title}>{restoData.name}</Text>
          <Text style={styles.words}> {CONSTANTS.SCREEN_TEXTS.OPEN_LABEL} {hourOpen}{hourOpen2} - {hourClose}{hourClose2}</Text>
          <View style={styles.globalThree}>
            <Text style={styles.words} >{restoData.rating}</Text>
            <Icon name="star" color={colorPalette.Orange} size={20}></Icon>
          </View>
          <Text style={styles.words}>{restoData.priceRange}</Text>

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
          onPress={onPressComment}
          ></Icon>
          <Icon name='share' type='font-awesome' color={colorPalette.Orange}></Icon>
        </View>

        <View style={styles.buttons}>
          <MyButton
            title={CONSTANTS.SCREEN_TEXTS.MAP_LABEL}
            width={Dimensions.get("window").width*0.3}
            height={Dimensions.get("window").height*0.055}
            onPress={() => {onBtnPress('map')} }
          ></MyButton>
          <MyButton
            title={CONSTANTS.SCREEN_TEXTS.MENU_LABEL}
            width={Dimensions.get("window").width*0.3}
            height={Dimensions.get("window").height*0.055}
            onPress={() => {onBtnPress('menu')} }
          ></MyButton>
          <MyButton
            title={CONSTANTS.SCREEN_TEXTS.COMMENT_LABEL}
            width={Dimensions.get("window").width*0.32}
            height={Dimensions.get("window").height*0.055}
            onPress={() => {onBtnPress('comment')} }
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

export default RestaurantProfileUserScreen;

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
