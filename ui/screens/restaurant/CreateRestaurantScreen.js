import { ToastAndroid} from 'react-native'
import React, { useState } from 'react'
import { restaurantWS } from '../../../networking/endpoints';
import { CONSTANTS } from '../../../config';
import { useSelector } from 'react-redux';
import { CreateRestaurantUI } from './CreateRestaurantUI';
import { ROUTES } from '../..';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { restaurantSchema } from '../../formSchemas/restaurantSchemas';

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

  const [hours, setHours] = useState({
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
  })

  const formik = useFormik({
    initialValues : {
      name : '',
      isClosed : false,
      foodTypes : [],
      priceRange : '',
      zipCode : '3344',
      days : [],
      coordinates : {
        type : 'Point',
        coordinates : [
          -58.456,
          -34.567
        ]
      }
    },
    validationSchema : restaurantSchema.createRestaurant,
    onSubmit(values) {
      onCreatePress();
    }
  });

  const [addressEntered, setAddressEntered] = useState(false);

  const ownerId = useSelector(state => state.user.userId);

  const onCreatePress = async (event) => {

    const restaurantData = {
      ...formik.values,
      ...hours,
    }

    console.log('Restaurant data: ', restaurantData);

    return;

    const result = await restaurantWS.createRestaurant(ownerId, restaurantData);

    if (result){
      setTimeout(() => {
        ToastAndroid.show(CONSTANTS.SCREEN_TEXTS.RESTAURANT_CREATED_MSG, ToastAndroid.SHORT);
        navigation.navigate(ROUTES.OWNER_HOME);
      }, 200);
    }
    else
      ToastAndroid.show('Error on Create Restaurant', ToastAndroid.SHORT);
  }

  const onIsCloseChange = (value) =>{
    formik.setFieldValue('isClosed', value);
  }

  const onFoodTypeChange = (item) => {
    console.warn(item);
    formik.setFieldValue('foodTypes', item);
  }

  const onPriceRangeChange = (value) => {
    formik.setFieldValue('priceRange', value);
  }

  // Receive a date object
  const onOpenTimeChange = (time) => {

    const hourInMinutes  = (time.getHours() * 60) + time.getMinutes();

    console.log('Open Hour: ', hourInMinutes);

    let oldHours = {}

    Object.assign(oldHours, hours);

    for (let dayField in oldHours.hours){
      oldHours.hours[dayField].open = hourInMinutes;
    }

    console.log(oldHours);

    setHours(oldHours);
  }

  // Receive a date object
  const onCloseTimeChange = (time) => {
    const hourInMinutes  = (time.getHours() * 60) + time.getMinutes();

    let oldHours = {}

    Object.assign(oldHours, hours);

    for (let dayField in oldHours.hours){
      oldHours.hours[dayField].close = hourInMinutes;
    }

    console.log(oldHours);

    setHours(oldHours);
  }

  const onDayBtnPress = (day) => {

  }

  const onRegionChange = (data) => {
    setAddressEntered(true);
    setRegion(data);

    formik.values.setFieldValue('coordinates', {
      type: "Point",
      coordinates: [
        data.longitude,
        data.latitude
      ]
    });
  }

  return (
      <CreateRestaurantUI
        name={formik.values.name}
        isClosed={formik.values.isClosed}
        foodTypes={formik.values.foodTypes}
        priceRange={formik.values.priceRange}
        region={region}
        addressEntered={addressEntered}
        onCreateHandler={onCreatePress}
        onNameHandler={formik.handleChange('name')}
        onIsCloseChangeHandler={onIsCloseChange}
        onFoodTypeChangeHandler={onFoodTypeChange}
        onPriceRangeChangeHandler={onPriceRangeChange}
        onRegionHandler={onRegionChange}
        onOpenTimeChangeHandler={onOpenTimeChange}
        onCloseTimeChangeHandler={onCloseTimeChange}
    >
    </CreateRestaurantUI>
  );
}

export default CreateRestaurantScreen;
