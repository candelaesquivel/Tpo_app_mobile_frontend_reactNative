import React, { useState } from 'react'
import { EditRestaurantScreenUI } from './restaurant/EditRestaurantScreenUI';

function EditRestaurantScreen({navigation, props}) {

  const onCreateRestaurantPressed = (event) => {
    console.log('On Restaurant Create Press');
    navigation.navigate(ROUTES.OWNER_HOME_DRAWER);
  }

  return (
    <EditRestaurantScreenUI
 
    ></EditRestaurantScreenUI>
  )
}


export default EditRestaurantScreen;

