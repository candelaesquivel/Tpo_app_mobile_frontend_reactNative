import { ToastAndroid} from 'react-native'
import React, { useState } from 'react'
import { CONSTANTS } from '../../../config';
import { useSelector } from 'react-redux';
import { ROUTES } from '../..';
import { useFormik } from 'formik';
import { EditRestaurantUI } from './EditRestaurantUI';
import { restaurantSchema } from '../../formSchemas/restaurantSchemas';
import { restaurantWS } from '../../../networking/endpoints';

function EditRestaurantScreen({navigation, route, props}) {

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

  const restaurantId = route.params.id ? route.params.id : '';

  const formik = useFormik({
    initialValues : {
      name : route.params.name ? route.params.name : '',
      isClosed : route.params.isClosed ? route.params.isClosed : false,
      foodTypes : route.params.foodTypes ? route.params.foodTypes : [],
      priceRange : route.params.priceRange ? route.params.pricenRange : '',
      zipCode : '3344',
      days : [],
      address : {
        ...route.params.address 
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
      onSavePress();
    }
  });

  console.log('Route Params: ', route);

  const [addressEntered, setAddressEntered] = useState(false);

  const ownerId = useSelector(state => state.user.userId);

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

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

  const onSavePress = () => {
    console.log('Save Restaurant Data');
  }

  const onDeletePress = (event) => {
    setShowConfirmDelete(true);
  }

  const onConfirmDeletePress = async (event) => {

    try {
      const result = await restaurantWS.deleteRestaurant(restaurantId);
      if (result)
        navigation.navigate(ROUTES.OWNER_HOME);
    } catch (error) {
      console.warn(error);
      
    }
  }

  const onCancelDeletePress = (event) => {
    setShowConfirmDelete(false);
  }

  return (
    <EditRestaurantUI
        name={formik.values.name}
        isClosed={formik.values.isClosed}
        foodTypes={formik.values.foodTypes}
        priceRange={formik.values.priceRange}
        region={region}
        addressEntered={addressEntered}
        onNameHandler={formik.handleChange('name')}
        onIsCloseChangeHandler={onIsCloseChange}
        onFoodTypeChangeHandler={onFoodTypeChange}
        onPriceRangeChangeHandler={onPriceRangeChange}
        onAddressChangeHandler={onAddressChange}
        onRegionHandler={onRegionChange}
        onOpenTimeChangeHandler={onOpenTimeChange}
        onCloseTimeChangeHandler={onCloseTimeChange}

        onSavePressHandler={onSavePress}
        onDeletePressHandler={onDeletePress}

        showConfirmDelete={showConfirmDelete}
        onConfirmDeleteBtnHandler={onConfirmDeletePress}
        onCancelBtnHandler={onCancelDeletePress}
    >
    </EditRestaurantUI>
  )
}

export default EditRestaurantScreen;
