import { View , FlatList } from 'react-native'
import React  from 'react'
import { Icon } from "@rneui/themed";
import RestaurantCardOwner from '../components/RestaurantCardOwner';
import MySearchBar from '../components/MySearchBar';
import { ROUTES } from '..';

function OwnerHomeScreen({navigation, props}) {

  const renderItem = ({ item }) => (
    <View >
    <RestaurantCardOwner 
      name ={item.name}
      address = {item.address}
      score = {item.score}
      onMenuPressed={onRestaurantMenuPressed}
      onPhotoPress={onPhotoPresses}
      >
      </RestaurantCardOwner>
    </View>
    ); 

    const RESTAURANTS_OWNER = [
      {
      name : 'Rodizio' ,
      address : 'Honduras 5000',
      score : 5 ,
      onMenuPressed : true ,
      onPhotoPress:false,
      },
      {
        name : 'Rodizio' ,
        address : 'Honduras 5000',
        score : 5 ,
        onMenuPressed : true ,
        onPhotoPress:false,
        },
        {
          name : 'Rodizio' ,
          address : 'Honduras 5000',
          score : 5 ,
          onMenuPressed : true ,
          onPhotoPress:false,
          },
          {
            name : 'Rodizio' ,
            address : 'Honduras 5000',
            score : 5 ,
            onMenuPressed : true ,
            onPhotoPress:false,
            },
     
     ];



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
    <View style={{alignItems:'center'}}>
       <MySearchBar ></MySearchBar>
      <Icon
        size={50}
        name = 'pluscircle'
        type = 'antdesign'
        onPress={onCreateRestaurantPressed}
      >
      </Icon>

     

      <FlatList
          data={RESTAURANTS_OWNER}
          renderItem={renderItem}
          keyExtractor ={item => item.name}
          />
 
    </View>
  )
}

export default OwnerHomeScreen;