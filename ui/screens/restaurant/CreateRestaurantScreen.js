import { ToastAndroid} from 'react-native'
import React, { useState } from 'react'
import { restaurantWS } from '../../../networking/endpoints';
import { CONSTANTS } from '../../../config';
import { useSelector } from 'react-redux';
import { RestaurantForm } from './RestaurantForm';
import { ROUTES } from '../..';
import { useEffect } from 'react';

function CreateRestaurantScreen({navigation, props}) {

  useEffect(() => {
    const mockFunction = (error) => {
      if (error === 'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.') 
      return console.log("Virtualized List error was caught");
      if (console.originalError) console.originalError(error)
    }
  
    console.originalError = console.error
    console.error = mockFunction
    return () => { console.error = console.originalError }
  }, [])
  
  const [region, setRegion] = useState({
    latitude: -34.603722,
    longitude: -58.381592,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [addressEntered, setAddressEntered] = useState(false);

  const [restaurantData, setRestaurantData] = useState({
    name : '',
    zipCode : '',
    isClosed : false,
    foodTypes : ['Mexicana'],
    priceRange : '$',
    hours: {
      monday: {
        open: 1000,
        close: 1400
      },
      tuesday: {
        open: 1000,
        close: 1400
      },
      wednesday: {
        open: 1000,
        close: 1400
      },
      thursday: {
        open: 1000,
        close: 1400
      },
      friday: {
        open: 1000,
        close: 1400
      },
      saturday: {
        open: 1000,
        close: 1400
      },
      sunday: {
        open: 1000,
        close: 1400
      }
    },
    coordinates: {
      type: "Point",
      coordinates: [
        -58.456,
        -34.567
      ]
    },
  })

  const ownerId = useSelector(state => state.user.userId);

  const onCreateHandler = async (event) => {
    const result = await createRestaurant(ownerId, restaurantData);

    if (result){
      setTimeout(() => {
        ToastAndroid.show(CONSTANTS.SCREEN_TEXTS.RESTAURANT_CREATED_MSG, ToastAndroid.SHORT);
        navigation.navigate(ROUTES.OWNER_HOME);
      }, 200);
    }
    else
      ToastAndroid.show('Error on Create Restaurant', ToastAndroid.SHORT);
  }

  const onCloseHandler = (value) => {
    setRestaurantData({...restaurantData, 'isClosed' : value})
  }

  const onNameChange = ({ nativeEvent: { eventCount, target, text} }) => {
    setRestaurantData({...restaurantData, 'name' : text});
  }

  const onRegionChange = (data) => {
    setAddressEntered(true);
    setRegion(data);

    setRestaurantData({...restaurantData, 'coordinates' : {
      type: "Point",
      coordinates: [
        data.longitude,
        data.latitude
      ]
    }})
  }

  return (
    <RestaurantForm
      name={restaurantData.name}
      isClosed={restaurantData.isClosed}
      region={region}
      addressEntered={addressEntered}
      onCreateHandler={onCreateHandler}
      onNameHandler={onNameChange}
      onToggleClose={onCloseHandler}
      onRegionHandler={onRegionChange}
   >
  </RestaurantForm>
  );
}

export default CreateRestaurantScreen;
