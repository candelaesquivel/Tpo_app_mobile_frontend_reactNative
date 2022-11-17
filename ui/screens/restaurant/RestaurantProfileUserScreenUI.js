import { View, Text , FlatList , StyleSheet , Dimensions, ScrollView} from 'react-native'
import React, { useState , useEffect} from 'react'
import { Icon , Button} from '@rneui/themed';
import { colorPalette } from '../styles/colors';;
import Carousal from '../components/carousal';
import { Theme } from '../styles/Theme';
import { MyButton } from '../components/button';
import { CONSTANTS } from '../../config';


const RestaurantProfileUserScreenUI = ({
  restoDataname,
  restoDatapriceRange,
  restoDatarating,
  onPressCommentHandler,
  
    props}) => {
      const [showComments , setShowComments]= useState(false);
      const [showMap , setShowMap]= useState(false);
      const [showDishes , setShowDishes]= useState(false);

      const MapComponent = () => {
        return (
            <Mapa></Mapa>
        )
      }
      const MenuComponent = () => {
        return (       
            <DishFlatList 
             dishes={dishes}
             ></DishFlatList>   
           
        )
      }
     
      const CommentComponent = () => {
        return (

            <CommentUserRestaurant
              comments={comments}
            ></CommentUserRestaurant>

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
  
  
  
  });
  
  export {RestaurantProfileUserScreenUI}