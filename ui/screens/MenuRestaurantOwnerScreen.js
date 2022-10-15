import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import I18n from "../../assets/localization/I18n";
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

  return (
    <View style={{alignItems:'center'}}>
     <Text style={{color: colorPalette.Black , fontSize: 18 ,marginTop :10, fontWeight: 'bold'}}>Category</Text>
        <MenuCard
            onPhotoPress={onDishPhotoPress}
            name='camarones'
            price={110}
            discount={110}>
        </MenuCard>

        <Icon
          size={50}
          name = 'pluscircle'
          type='antdesign'
          onPress={onCreateDishPress}
        />
        {/* <Icon size={50} color={colorPalette.Black} name='pluscircle' type='antdesign' 
        containerStyle={{position: 'fixed', bottom: -565, left: 170}}></Icon> */}
    </View>
  )
}

export default MenuRestaurantOwnerScreen;