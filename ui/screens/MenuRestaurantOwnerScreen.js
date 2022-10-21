import { View, Text , FlatList} from 'react-native'
import React, { useEffect } from 'react'
import { Icon } from "@rneui/themed";
import { colorPalette } from '../styles/colors';
import MenuCard from '../components/menuCard';
import { ROUTES } from '..';

function MenuRestaurantOwnerScreen({navigation,props}) {

  const onCreateDishPress = (event) => {
    console.log('On Created Dish Press');
    navigation.navigate(ROUTES.ADD_DISH_STACK)
  }

  const onDishPhotoPress = (event) => {
    console.log('On Dish Photo Press');
    navigation.navigate(ROUTES.DISH_DETAILS_OWNER_STACK);
  }

  const renderItem = ({ item }) => (
    <View >
    <Text style={{color: colorPalette.Black , fontSize: 18 ,marginTop :10, fontWeight: 'bold'}}>{item.category}</Text>
         <MenuCard
            onPhotoPress={item.onDishPhotoPress}
            name={item.name}
            price={item.price}
            discount={item.discount}>
        </MenuCard>

    </View>
    ); 

   const MENU = [
    {
    name : 'Camarones',
    category : 'Promocion',
    price : 4000,
    discount : 10,
    onPhotoPress : false,
    onCreateDishPress : false,

    },
    {
      name : 'Camarones',
      category : 'Promocion',
      price : 4000,
      discount : 10,
      onPhotoPress : false,
      onCreateDishPress : false,
  
      },
      {
        name : 'Camarones',
        category : 'Promocion',
        price : 4000,
        discount : 10,
        onPhotoPress : false,
        onCreateDishPress : false,
    
        },
        {
          name : 'Camarones',
          category : 'Promocion',
          price : 4000,
          discount : 10,
          onPhotoPress : false,
          onCreateDishPress : false,
      
          },
    
   ];

  return (

    <View style={{alignItems:'center'}}>
          <Icon
          size={50}
          name = 'pluscircle'
          type='antdesign'
          onPress={onCreateDishPress}
          containerStyle={{        
           left : '40%',
           bottom: 0,
           }}
        />
         <Comment
         userName='hola'
         Comment='ajkdnsbuqfbcjkedbfjeidbcfedsbjcfedbs'
         >
         </Comment>

      
      
        {/* <Icon size={50} color={colorPalette.Black} name='pluscircle' type='antdesign' 
        containerStyle={{position: 'fixed', bottom: -565, left: 170}}></Icon> */}

    
    </View>
  )
}

export default MenuRestaurantOwnerScreen;