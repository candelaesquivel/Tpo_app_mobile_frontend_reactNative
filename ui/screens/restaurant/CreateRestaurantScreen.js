import { ToastAndroid} from 'react-native'
import React, { useState } from 'react'
import { restaurantWS } from '../../../networking/endpoints';
import { CONSTANTS } from '../../../config';
import { useSelector } from 'react-redux';
import { CreateRestaurantUI } from './CreateRestaurantUI';
import { ROUTES } from '../..';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { Dimensions } from "react-native";
import { restaurantSchema } from '../../formSchemas/restaurantSchemas';

function CreateRestaurantScreen({navigation, props}) {

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
      address : {
        streetName : "",
        streetNumber : '',
        neighborhood : "",
        city : "",
        state : "",
        country : ""
      },
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

    let oldHours = {}

    Object.assign(oldHours, hours);

    for (let dayField in oldHours.hours){
      oldHours.hours[dayField].open = hourInMinutes;
    }

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

    setHours(oldHours);
  }

  const onAddressChange = (address) => {
    formik.setFieldValue('zipCode', address.zipCode);
    formik.setFieldValue('address', address);
  }

  const onRegionChange = (region) => {
    setAddressEntered(true);
    setRegion(region);
    formik.values.setFieldValue('coordinates', {
      type: "Point",
      coordinates: [
        region.longitude,
        region.latitude
      ]
    });
  }

  console.log('Formik Create Errors: ', formik.errors);

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
        onAddressChangeHandler={onAddressChange}
        onRegionHandler={onRegionChange}
        onOpenTimeChangeHandler={onOpenTimeChange}
        onCloseTimeChangeHandler={onCloseTimeChange}
    >
    </CreateRestaurantUI>
  );
}

export default CreateRestaurantScreen;
