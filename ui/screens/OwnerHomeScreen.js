import { View } from 'react-native'
import React  from 'react'
import { Icon } from "@rneui/themed";
import RestaurantCardOwner from '../components/RestaurantCardOwner';
import { ROUTES } from '..';

function OwnerHomeScreen({navigation, props}) {

  const onCreateRestaurantPressed = (event) => {
    console.log('On Restaurant Create Press');
    navigation.navigate(ROUTES.CREATE_RESTAURANT_DRAWER)
  }

  return (
    <View style={{alignItems:'center'}}>
      <RestaurantCardOwner>

      </RestaurantCardOwner>
      <Icon
        size={50}
        name = 'pluscircle'
        type = 'antdesign'
        onPress={onCreateRestaurantPressed}
      >
      </Icon>
      {/*
        Tira error en el drawer
        <RestaurantCardOwner
                    name='Rodizio'
                    address='honduras 50000'
                    score={10}

                    ></RestaurantCardOwner>
            <Icon size={50} color={colorPalette.Black} name='pluscircle' type='antdesign' containerStyle={{position: 'fixed', bottom: -600, left: 170}}></Icon> */}
    </View>
  )
}

export default OwnerHomeScreen;