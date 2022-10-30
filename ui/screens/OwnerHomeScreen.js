import { View , FlatList , StyleSheet } from 'react-native'
import React, { useState }  from 'react'
import { Icon } from "@rneui/themed";
import RestaurantCardOwner from '../components/RestaurantCardOwner';
import MySearchBar from '../components/MySearchBar';
import { ROUTES } from '..';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GetOwnerRestaurants } from '../../networking';


function OwnerHomeScreen({navigation, props}) {

  const [restaurants, setRestaurants] = useState([]);
  const [triggerSearch, setTrigggerSearch] = useState(false);

  const ownerId = useSelector((state) => {
    return state.session.userId;
  });

  const testOwnerId = "";

  const fillRestaurantList = async () => {
    const rests = await GetOwnerRestaurants(ownerId);
    setRestaurants(rests);
  }

  useEffect(() => {
    if (!triggerSearch)
    {
      fillRestaurantList();
      setTrigggerSearch(true);
    }

  }, [restaurants, triggerSearch])

  const renderItem = ({ item }) => {
    return (
      <View >
      <RestaurantCardOwner 
        name ={item.name}
        address = {item.address}
        score = {item.score}
        onMenuPressed={onRestaurantMenuPressed}
        onPhotoPress={onPhotoPresses}
        restaurantId = {item.id}
        >
        </RestaurantCardOwner>
      </View>
    )
  };

  const onCreateRestaurantPressed = (event) => {
    console.log('On Restaurant Create Press');
    navigation.navigate(ROUTES.CREATE_RESTAURANT_STACK)
  }

  const onRestaurantMenuPressed = (event) => {
    console.log("On Restaurant Menu Press");
    navigation.navigate(ROUTES.MENU_RESTAURANT_OWNER_STACK);
  }

  const onPhotoPresses = (event) => {
    console.log('On Photo Pressed');
    navigation.navigate(ROUTES.RESTAURANT_OWNER_PROFILE_STACK);
  }
  
  return (
    <View>
    <View style={styles.global}>
       <FlatList
            data={restaurants}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            />
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
