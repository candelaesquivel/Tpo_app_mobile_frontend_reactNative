import { ToastAndroid} from 'react-native'
import React, { useState } from 'react'
import { restaurantWS } from '../../../networking/endpoints';
import { CONSTANTS } from '../../../config';
import { useDispatch, useSelector } from 'react-redux';
import { CreateRestaurantUI } from './CreateRestaurantUI';
import { ROUTES } from '../..';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { Dimensions } from "react-native";
import { restaurantSchema } from '../../formSchemas/restaurantSchemas';
import { launchImageLibrary } from 'react-native-image-picker';
import { LogBox } from 'react-native';

function CreateRestaurantScreen({navigation, props}) {

  const [region, setRegion] = useState({
    latitude: -34.603722,
    longitude: -58.381592,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const formik = useFormik({
    initialValues : {
      name : '',
      isClosedOverwrite : false,
      restaurantTypes : [],
      priceRange : '',
      days : [],
      address : {
        streetName : "",
        streetNumber : '',
        neighborhood : "",
        city : "",
        state : "",
        country : "",
        zipCode : ''
      },
      openingTimes : Array(7).fill(undefined),
      closingTimes : Array(7).fill(undefined),
      coordinates : {
        type : 'Point',
        coordinates : [
          -58.456,
          -34.567
        ]
      },
      pictures : [],
    },
    validationSchema : restaurantSchema.createRestaurant,
    async onSubmit(values) {
      await onCreatePress();
    }
  });

  const dispatch = useDispatch();

  const [addressEntered, setAddressEntered] = useState(false);
  const [showConfirmDeletePhoto, setshowConfirmPhotoDelete] = useState(false);

  const ownerId = useSelector(state => state.user.userId);

  useEffect(() => {
    // Gaby: The virtualized list error is caused by an issue with the autocomplete library not liking ScrollViews.
    // This is a workaround to fix the issue.
    const mockFunction = (error) => {
      if (error === 'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.') 
      return console.log("Virtualized List error was caught");
      if (console.originalError) console.originalError(error)
    }

    console.originalError = console.error
    console.error = mockFunction
    return () => { console.error = console.originalError }
  }, [])

  const onCreatePress = async (event) => {

    const restaurantData = {
      ...formik.values,
    }

    try {
      const result = await restaurantWS.createRestaurant(ownerId, restaurantData, dispatch);
      
      if (result){
        navigation.navigate(ROUTES.OWNER_HOME);
      }

    } catch (error) {
      ToastAndroid.show(error, ToastAndroid.SHORT);
    }
  }

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
      if (idx === dayIndex || dayIndex === 0)
        return time;

      return item;
    });

    const newDays = newOpeningTimes.map((item, idx) => {
      return item !== undefined
    })

    formik.setFieldValue('days', newDays);
    formik.setFieldValue('openingTimes', newOpeningTimes);
  }

  // Receive a date object
  const onCloseTimeChange = (dayIndex, time) => {

    const newClosingTimes = formik.values.closingTimes.map((item, idx) => {
      if (idx === dayIndex || dayIndex === 0)
        return time;

      return item;
    });

    const newDays = newClosingTimes.map((item, idx) => {
      return item !== undefined
    })

    formik.setFieldValue('days', newDays);
    formik.setFieldValue('closingTimes', newClosingTimes);
  }

  const onAddressChange = (address) => {
    formik.setFieldValue('zipCode', address.zipCode);
    formik.setFieldValue('address', address);
  }

  const onRegionChange = (region) => {
    setAddressEntered(true);
    setRegion(region);

    formik.setFieldValue('coordinates', {
      type: "Point",
      coordinates: [
        region.latitude,
        region.longitude,
      ]
    });
  }

  const onUploadImgPress = async (event) => {

    try {
      const images = await launchImageLibrary({
        mediaType : 'photo',
        includeBase64 : true,
      });

      if (images){
        const pictures = [].concat(formik.values.pictures, images.assets);
        formik.setFieldValue('pictures', pictures);
      }

    } catch (error) {
      
    }
  }

  const onDeletePhotoPress = (event) => {
    setshowConfirmPhotoDelete(true);
  }

  const onCancelDeletePhotoPress = (event) => {
    setshowConfirmPhotoDelete(false);
  }

  const onConfirmDeletePhotoPress = (photoFileName) => {
    setshowConfirmPhotoDelete(false);

    const pictures = [];

    formik.values.pictures.forEach(item => {
      if (!item)
        return;

        if (item.fileName !== photoFileName)
          pictures.push(item);
    });

    formik.setFieldValue('pictures', pictures);
  }

  return (
      <CreateRestaurantUI
        name={formik.values.name}
        nameError={formik.errors.name}
        addressError={formik.errors.address}

        isClosedOverwrite={formik.values.isClosedOverwrite}
        restaurantTypes={formik.values.restaurantTypes}
        priceRange={formik.values.priceRange}
        region={region}
        pictures = {formik.values.pictures}
        openingTimes={formik.values.openingTimes}
        closingTimes={formik.values.closingTimes}
        addressEntered={addressEntered}
        onCreateHandler={formik.handleSubmit}
        onNameHandler={formik.handleChange('name')}
        onIsCloseChangeHandler={onIsCloseChange}
        onFoodTypeChangeHandler={onFoodTypeChange}
        onPriceRangeChangeHandler={onPriceRangeChange}
        onAddressChangeHandler={onAddressChange}
        onRegionChangeHandler={onRegionChange}
        onOpenTimeChangeHandler={onOpenTimeChange}
        onCloseTimeChangeHandler={onCloseTimeChange}
        onUploadImgHandler={onUploadImgPress}

        showConfirmDeletePhoto={showConfirmDeletePhoto}
        onConfirmDeletePhotoHandler={onConfirmDeletePhotoPress}
        onCancelDeletePhotoHandler={onCancelDeletePhotoPress}
        onDeletePhotoPressHandler={onDeletePhotoPress}
    >
    </CreateRestaurantUI>
  );
}

export default CreateRestaurantScreen;
