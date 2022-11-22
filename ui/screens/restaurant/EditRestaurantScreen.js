import React, { useState } from 'react'
import { EditRestaurantScreenUI } from './EditRestaurantScreenUI';

function EditRestaurantScreen({navigation, props}) {

  const onCreateRestaurantPressed = (event) => {
    navigation.navigate(ROUTES.OWNER_HOME_DRAWER);
  }

  return (
    <EditRestaurantScreenUI
 
    ></EditRestaurantScreenUI>
  )
}


export default EditRestaurantScreen;

