import React  from 'react'
import { View } from 'react-native'
import { Text } from 'react-native';
import { ROUTES } from '..';
import { MyButton } from '../components/button';
import Carousal from '../components/carousal';

function CreateRestaurantScreen({navigation, props}) {

  const onCreateRestaurantPressed = (event) => {
    console.log('On Restaurant Create Press');
    navigation.navigate(ROUTES.OWNER_HOME_DRAWER);
  }

  return (
    <View style={{alignItems:'center'}}>
      <Text>Create Restaurant</Text>
      <MyButton title = 'Guardar' onPress = {onCreateRestaurantPressed}></MyButton>
    </View>
  )
}

export default CreateRestaurantScreen;