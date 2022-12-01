import { View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'
import { Icon } from "@rneui/base"
import { DishFlatList } from '../../components/DishFlatList';
import { CONSTANTS } from '../../../config';
import EmptyScreenMessage from '../../components/EmptyScreenMessage';
import { colorPalette } from '../../styles/colors';
import { Theme } from '../../styles/Theme';

const MenuRestaurantOwnerScreenUI = ({
    dishes,
    onCreateDishPressHandler,
    onDishPhotoPressHandler,
    props}) => {

    const {height, width} = useWindowDimensions();

    return (
        <View style={styles.global}>
          
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
              <DishFlatList 
                onDishPhotoPressHandler={onDishPhotoPressHandler}  
                dishes={dishes}
              >

              </DishFlatList>
            }
            
          </View>

          <Icon
            size={50}
            name = 'pluscircle'
            type = 'antdesign'
            onPress={onCreateDishPressHandler}
            containerStyle={{
              position : 'absolute',
              top : Dimensions.get("window").height* 0.82,
              left : Dimensions.get("window").width* 0.85,
            }}
          >
          </Icon>
      </View>
    )
  }
  
const styles = StyleSheet.create({
    category : {
      color: colorPalette.Black ,
       fontSize: Theme.font.SMALL_TWO ,marginTop :10, 
       fontWeight: Theme.font.FONTWEIGHT,
    },
  
  global : 
  {
      alignItems:'center' , 
      height : Dimensions.get('window').height,
  },
});
  
export {MenuRestaurantOwnerScreenUI}