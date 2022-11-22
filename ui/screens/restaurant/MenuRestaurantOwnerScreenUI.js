import { View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'
import { Icon } from "@rneui/base"
import { DishFlatList } from '../../components/DishFlatList';
import { CONSTANTS } from '../../../config';
import EmptyScreenMessage from '../../components/EmptyScreenMessage';
import { colorPalette } from '../../styles/colors';

const MenuRestaurantOwnerScreenUI = ({
    dishes,
    onCreateDishPressHandler,
    props}) => {

    const {height, width} = useWindowDimensions();

    return (
        <View style={styles.global}>
          <Icon
            size={50}
            name = 'pluscircle'
            type = 'antdesign'
            onPress={onCreateDishPressHandler}
            containerStyle={{
              position : 'absolute',
              top : height * 0.79,
              left : width * 0.85,
            }}
          >
          </Icon>
          <View style={{alignItems:'center'}}>
            {
              dishes.length === 0 && 
              <EmptyScreenMessage
                message={CONSTANTS.SCREEN_TEXTS.NOT_DISHES}
              >

              </EmptyScreenMessage>
            }
            {
              dishes.length !== 0 && 
              <DishFlatList dishes={dishes}></DishFlatList>
            }
            
          </View>
      </View>
    )
  }
  
const styles = StyleSheet.create({
    category : {
      color: colorPalette.Black ,
       fontSize: 18 ,marginTop :10, fontWeight: 'bold'
    },
  
  global : 
  {
      alignItems:'center' , 
      height : Dimensions.get('window').height,
  },
});
  
export {MenuRestaurantOwnerScreenUI}