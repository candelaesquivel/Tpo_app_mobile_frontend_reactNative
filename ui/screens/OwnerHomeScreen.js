import { View, StyleSheet } from 'react-native'
import React, { useCallback, useState }  from 'react'
import { Icon } from "@rneui/themed";
import { ROUTES } from '..';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GetOwnerRestaurants } from '../../networking';
import { RestaurantFlatListOwner } from '../components/RestaurantFlatListOwner';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { CONSTANTS } from '../../config';
import EmptyScreenMessage from '../components/EmptyScreenMessage';

function OwnerHomeScreen({navigation, props}) {

  const [restaurants, setRestaurants] = useState([]);
  const isFocused = useIsFocused();

  const ownerId = useSelector((state) => {
    return state.session.userId;
  });

  const fillRestaurantList = async () => {
    const rests = await GetOwnerRestaurants(ownerId);
    setRestaurants(rests);
  }

  useFocusEffect(
    useCallback(() => {
      fillRestaurantList();

      return () => {
        setRestaurants([]);
      }
    }, [isFocused])
  );

  const onCreateRestaurantPressed = (event) => {
    navigation.navigate(ROUTES.CREATE_RESTAURANT_STACK)
  }

  return (
    <View>
    <View style={styles.global}>
        {restaurants.length === 0 && 
         <EmptyScreenMessage
         message={CONSTANTS.SCREEN_TEXTS.NOT_RESTAURANTS}
         ></EmptyScreenMessage>
        }
        {
          restaurants.length !== 0 && 
          <RestaurantFlatListOwner restaurants={restaurants}></RestaurantFlatListOwner>
        }
     
     </View>

      <View style={styles.icon}>
        <Icon
            size={50}
            name = 'pluscircle'
            type = 'antdesign'
            onPress={onCreateRestaurantPressed}
            containerStyle={StyleSheet.icon}	
          >
          </Icon>
       </View>
    </View>
  )
}

export default OwnerHomeScreen;



const styles = StyleSheet.create({
  global : {
    alignItems:'center' , 
    height : "100%"
},
icon : {
                                 
  position: 'absolute',                                         
  bottom: "2%",                                                    
  right: "2%", 

},
});
