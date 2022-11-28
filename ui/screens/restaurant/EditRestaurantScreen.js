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

  const restoParams = route.params;

  const [region, setRegion] = useState({
    latitude: restoParams ? restoParams.coordinates.coordinates[0] : -34.603722,
    longitude: restoParams ? restoParams.coordinates.coordinates[1] : -58.381592,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const formik = useFormik({
    initialValues : {
      id : restoParams.id ? restoParams.id : '',
      name : restoParams.name ? restoParams.name : '',
      isClosedOverwrite : restoParams.isClosedOverwrite ? restoParams.isClosedOverwrite : false,
      restaurantTypes : restoParams.restaurantTypes ? restoParams.restaurantTypes :  [],
      priceRange : restoParams.priceRange ? restoParams.priceRange : '',
      zipCode : restoParams.zipCode ? restoParams.zipCode : '',
      address : {
        streetName : restoParams.streetName ? restoParams.streetName : "",
        streetNumber : restoParams.streetNumber ? restoParams.streetNumber : '',
        neighborhood : restoParams.neighborhood ? restoParams.neighborhood : "",
        city : restoParams.city ? restoParams.city : "",
        state : restoParams.state ? restoParams.state : "",
        country : restoParams.country ? restoParams.country : ""
      },
      openingTimes :  restoParams.openingTimes ? 
        restoParams.openingTimes.map(item => {
          return new Date(item)
        }) : 
        Array(7).fill(undefined),

      closingTimes :  restoParams.closingTimes ? 
      restoParams.closingTimes.map(item => {return new Date(item)}) : 
      Array(7).fill(undefined),
      coordinates : restoParams.coordinates ? restoParams.coordinates : {
        type : 'Point',
        coordinates : [
          -58.456,
          -34.567
        ]
      }
    },
    validationSchema : restaurantSchema.createRestaurant,
    async onSubmit(values) {
      await onSavePress();
    }
  });


  const [addressEntered, setAddressEntered] = useState(true);

  const ownerId = useSelector(state => state.user.userId);

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const onIsCloseChange = (value) =>{
    formik.setFieldValue('isClosedOverwrite', value);
  }

  const onFoodTypeChange = (item) => {
    formik.setFieldValue('restaurantTypes', item);
  }

  const onPriceRangeChange = (value) => {
    formik.setFieldValue('priceRange', value);
  }

  // Receive a date object
  const onOpenTimeChange = (dayIndex, time) => {

    const newOpeningTimes = formik.values.openingTimes.map((item, idx) => {
      if ((idx === dayIndex || dayIndex === 0) && (item !== undefined))
        return time;

      return Date(item);
    });

    formik.setFieldValue('openingTimes', newOpeningTimes);
  }

  // Receive a date object
  const onCloseTimeChange = (dayIndex, time) => {
    const newClosingTimes = formik.values.closingTimes.map((item, idx) => {
      if ((idx === dayIndex || dayIndex === 0) && (item !== undefined))
        return time;

      return Date(item);
    });

    formik.setFieldValue('closingTimes', newClosingTimes);
  }

  const onAddressChange = (address) => {
    formik.setFieldValue('zipCode', address.zipCode);
    formik.setFieldValue('address', address);
  }

  const onRegionChange = (region) => {
    setRegion(region);

    formik.setFieldValue('coordinates', {
      type: "Point",
      coordinates: [
        region.latitude,
        region.longitude
      ]
    });
  }

  const onSavePress = async () => {
    const restaurantData = {
      ...formik.values,
    }
    try {
      const restaurant = await restaurantWS.updateRestaurant(restaurantData.id, restaurantData);

      if (restaurant){
        navigation.navigate(ROUTES.OWNER_HOME);
      }

    } catch (error) {
      
    }
  }

  const onDeletePress = (event) => {
    setShowConfirmDelete(true);
  }

  const onConfirmDeletePress = async (event) => {

    try {
      const result = await restaurantWS.deleteRestaurant(formik.values.id);
      if (result){
        navigation.navigate(ROUTES.OWNER_HOME);
        
      }
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
        isClosedOverwrite={formik.values.isClosedOverwrite}
        restaurantTypes={formik.values.restaurantTypes}
        priceRange={formik.values.priceRange}
        region={region}
        addressEntered={true}

        openingTimes={formik.values.openingTimes}
        closingTimes={formik.values.closingTimes}

        onNameHandler={formik.handleChange('name')}
        onIsCloseChangeHandler={onIsCloseChange}
        onFoodTypeChangeHandler={onFoodTypeChange}
        onPriceRangeChangeHandler={onPriceRangeChange}
        onAddressChangeHandler={onAddressChange}
        onRegionChangeHandler={onRegionChange}

        onOpenTimeChangeHandler={onOpenTimeChange}
        onCloseTimeChangeHandler={onCloseTimeChange}

        onSavePressHandler={formik.handleSubmit}
        onDeletePressHandler={onDeletePress}

        showConfirmDelete={showConfirmDelete}
        onConfirmDeleteBtnHandler={onConfirmDeletePress}
        onCancelBtnHandler={onCancelDeletePress}
    >
    </EditRestaurantUI>
  )
}

export default EditRestaurantScreen;
