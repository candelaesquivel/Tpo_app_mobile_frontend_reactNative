import { View, Text , FlatList , StyleSheet , Dimensions, ScrollView} from 'react-native'
import React, { useState } from 'react'
import Images from '../../assets/images/index';
import { Icon , Button} from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import CommentUserRestaurant from '../components/commentUserRestaurant';
import I18n from '../../assets/localization/I18n';
import Mapa from '../components/mapa';
import Carousal from '../components/carousal';
import { Theme } from '../styles/Theme';
import { MyButton } from '../components/button';
import { DishFlatList } from '../components/DishFlatList';

function RestaurantProfileUserScreen({navigation,name='Mudra',hourOpen=10,hourOpen2='am',hourClose=20,hourClose2='pm',
calification=4,priceRange='$$$$',props}) {

  const [commentBoolean , setCommentBoolean]= useState(false);
  const [mapBoolean , setMapBoolean]= useState(false);
  const [menuBoolean , setMenuBoolean]= useState(false);

  const onBtnPress = (component) => {

    if (component === 'map')
    {
      setCommentBoolean(false);
      setMenuBoolean(false);
      setMapBoolean(!mapBoolean);
    }

    if (component === 'menu')
    {
      setCommentBoolean(false);
      setMenuBoolean(!menuBoolean);
      setMapBoolean(false);
    }

    if (component === 'comment')
    {
      setCommentBoolean(!commentBoolean);
      setMenuBoolean(false);
      setMapBoolean(false);
    }
  }

  const CommentComponent = () => {
    return (

         <CommentUserRestaurant></CommentUserRestaurant>

    )
}

  const MapComponent = () => {
    return (
        <Mapa></Mapa>
    )
  }
  const MenuComponent = () => {
    return ( 
      <View>
        <Text>DISHES</Text>
      <DishFlatList
        dishes ={[]}
        ></DishFlatList>
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
          <Text style={styles.words}> {I18n.t('open')} {hourOpen}{hourOpen2} - {hourClose}{hourClose2}</Text>
          <View style={styles.globalThree}>
            <Text style={styles.words} >{calification}</Text>
            <Icon name="star" color={colorPalette.Orange} size={20}></Icon>
          </View>
          <Text style={styles.words}>{priceRange}</Text>

        <View style={styles.icons}>
          <Icon name='heart' type='font-awesome' color={colorPalette.Orange}></Icon>
          <Icon name='comment' type='font-awesome' color={colorPalette.Orange}></Icon>
          <Icon name='share' type='font-awesome' color={colorPalette.Orange}></Icon>
        </View>

        <View style={styles.buttons}>
          <MyButton
            title={I18n.t('map')}
            width={Dimensions.get("window").width*0.3}
            height={Dimensions.get("window").height*0.08}
            onPress={() => {onBtnPress('map')} }
          ></MyButton>
          <MyButton
            title={I18n.t('menu')}
            width={Dimensions.get("window").width*0.3}
            height={Dimensions.get("window").height*0.08}
            onPress={() => {onBtnPress('menu')} }
          ></MyButton>
          <MyButton
            title={I18n.t('comment')}
            width={Dimensions.get("window").width*0.32}
            height={Dimensions.get("window").height*0.08}
            onPress={() => {onBtnPress('comment')} }
          ></MyButton>
       </View>
      
      {
        commentBoolean && <CommentComponent/>
      }

      {
        mapBoolean && <MapComponent/>
      }

      {
        menuBoolean && <MenuComponent/>
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
    marginTop : "3%"
     },
    carousal : {
      height : Dimensions.get('window').height * 0.32
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
      marginTop : '5%',
      marginBottom : -Dimensions.get('window').height * 0.2
    },
    wordButton : {
      fontSize: Theme.font.MEDIUM,
      fontFamily :'Roboto' ,
       color : colorPalette.Black
      },



});
