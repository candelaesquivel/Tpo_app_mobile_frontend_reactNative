import { View, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { Icon } from "@rneui/themed";
import { DishFlatList } from '../../components/DishFlatList';
import { CONSTANTS } from '../../../config';
import EmptyScreenMessage from '../../components/EmptyScreenMessage';
import { colorPalette } from '../../styles/colors';

const MenuRestaurantOwnerScreenUI = ({
    dishes1,
    onCreateDishPressHandler,
    props}) => {
  
    return (
        <View style={styles.global}> 
        <View style={{alignItems:'center'}}>
          {dishes1.length === 0 && 
            <EmptyScreenMessage
            message={CONSTANTS.SCREEN_TEXTS.NOT_DISHES}
            ></EmptyScreenMessage>
          }
          {
            dishes1.length !== 0 && 
            <DishFlatList dishes={dishes1}></DishFlatList>
          }
          <View style={styles.icon}>
            <Icon
              size={50}
              name = 'pluscircle'
              type = 'antdesign'
              onPress={onCreateDishPressHandler}
              containerStyle={styles.icon}	
            >
            </Icon>
          </View>
        </View>
      </View>
    )
  }
  
  
  const styles = StyleSheet.create({
    category : {
      color: colorPalette.Black ,
       fontSize: 18 ,marginTop :10, fontWeight: 'bold'
    },
  
    global : {
      alignItems:'center' , 
      height : "100%"
  },
  icon : {
    position: 'absolute',                                         
    top:  Dimensions.get('screen').width * 0.84,                                                    
    right: Dimensions.get('screen').width * 0.01, 
  },
  });
  
  export {MenuRestaurantOwnerScreenUI}