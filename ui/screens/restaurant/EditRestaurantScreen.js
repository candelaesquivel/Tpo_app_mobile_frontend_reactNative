import React, { useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES } from '../..';
import { useFormik } from 'formik';
import { EditRestaurantUI } from './EditRestaurantUI';
import { restaurantSchema } from '../../formSchemas/restaurantSchemas';
import { restaurantWS } from '../../../networking/endpoints';
import { launchImageLibrary } from 'react-native-image-picker';

function EditRestaurantScreen({navigation, route}) {

  const restoParams = route.params;

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
        streetName : restoParams.address.streetName ? restoParams.address.streetName : "",
        streetNumber : restoParams.address.streetNumber ? restoParams.address.streetNumber : '',
        neighborhood : restoParams.address.neighborhood ? restoParams.address.neighborhood : "",
        city : restoParams.address.city ? restoParams.address.city : "",
        state : restoParams.address.state ? restoParams.address.state : "",
        country : restoParams.address.country ? restoParams.address.country : "",
        zipCode : restoParams.address.zipCode ? restoParams.address.zipCode : '',
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
      },
      pictures : restoParams ? restoParams.pictures : [],
    },
    validationSchema : restaurantSchema.createRestaurant,
    async onSubmit() {
      await onSavePress();
    }
  });

  const dispatch = useDispatch();
  const [addressEntered, setAddressEntered] = useState(true);


  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showConfirmPhotoDelete, setShowConfirmPhotoDelete] = useState(false);

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
      const restaurant = await restaurantWS.updateRestaurant(restaurantData.id, restaurantData, dispatch);

      if (restaurant){
        navigation.navigate(ROUTES.OWNER_HOME);
      }

    } catch (error) {
      
    }
  }

  const onDeletePress = () => {
    setShowConfirmDelete(true);
  }

  const onConfirmDeletePress = async () => {

    try {
      const result = await restaurantWS.deleteRestaurant(formik.values.id, dispatch);
      if (result){
        navigation.navigate(ROUTES.OWNER_HOME);
        
      }
    } catch (error) {
      console.warn(error);
      
    }
  }

  const onCancelDeletePress = () => {
    setShowConfirmDelete(false);
  }

  const onDeletePhotoPress = async () => {
    setShowConfirmPhotoDelete(true);
  }

  const onUploadImgPress = async () => {

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

  return (
    <EditRestaurantUI
        name={formik.values.name}
        address={formik.values.address.streetName + " "+formik.values.address.streetNumber }
        isClosedOverwrite={formik.values.isClosedOverwrite}
        restaurantTypes={formik.values.restaurantTypes}
        priceRange={formik.values.priceRange}
        region={region}
        addressEntered={true}
        pictures={formik.values.pictures}

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
        onUploadImgPressHandler={onUploadImgPress}

        showConfirmDelete={showConfirmDelete}
        onConfirmDeleteBtnHandler={onConfirmDeletePress}
        onCancelBtnHandler={onCancelDeletePress}

        showConfirmPhotoDelete={showConfirmPhotoDelete}
        onConfirmDeletePhotoPressHandler={onConfirmDeletePress}
        onCancelDeletePhotoPressHandler={onCancelDeletePress}
        onDeletePhotoPressHandler={onDeletePhotoPress}
    >
    </EditRestaurantUI>
  )
}

export default EditRestaurantScreen;
