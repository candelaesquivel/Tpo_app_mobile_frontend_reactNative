import { View, Text , ScrollView , StyleSheet , Dimensions, ToastAndroid} from 'react-native'
import React, { useState } from 'react'
import { colorPalette } from '../styles/colors'
import I18n from "../../assets/localization/I18n";
import { InputText } from '../components/InputText'
import { MyButton } from '../components/button'
import  Icon from 'react-native-vector-icons/MaterialIcons';
import Carousal from '../components/carousal';
import Mapa from '../components/mapa';
import { Dropdown } from 'react-native-element-dropdown';
import MyWeekButtons from '../components/WeekButton';
import MyTimePicker from '../components/TimePicker';
import { Theme } from '../styles/Theme';
import CloseComponent from '../components/closeComponent';
import { FoodTypesDropDown } from '../components/FoodTypesDropdown';
import { PriceRangesDropdown } from '../components/PriceRangeDropdown';
import { createRestaurant } from '../../networking/createRestaurant';
import { CONSTANTS } from '../../config';
import { useSelector } from 'react-redux';
import { RestaurantForm } from './createRestaurant/RestaurantForm';
import { ROUTES } from '..';

function CreateRestaurantScreen({navigation, props}) {
  
  const [restaurantData, setRestaurantData] = useState({
    name : '',
    address : {
      streetName : '',
      streetNumber : '430',
      neighborhood : '',
      city : '',
      state : '',
      country : '',
    },
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

  const ownerId = useSelector(state => state.session.userId);

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

  const onAddressChange = ({ nativeEvent: { eventCount, target, text} }) => {
    let oldData = restaurantData;
    oldData.address.streetName = text;

    setRestaurantData(oldData);
  }

  const onLocationChange = ({ nativeEvent: { eventCount, target, text} }) => {
    let oldData = restaurantData;
    oldData.address.city = text;
    setRestaurantData(oldData);
  }

  const onNeighborhoodChange = ({ nativeEvent: { eventCount, target, text} }) => {
    let oldData = restaurantData;
    oldData.address.neighborhood = text;
    setRestaurantData(oldData);
  }

  return (
    <RestaurantForm
      name={restaurantData.name}
      address={restaurantData.address.streetName}
      zipCode={restaurantData.zipCode}
      neighborhood={restaurantData.address.neighborhood}
      location={restaurantData.address.city}
      isClosed={restaurantData.isClosed}
      onCreateHandler={onCreateHandler}
      onNameHandler={onNameChange}
      onAddressHandler={onAddressChange}
      onLocationHandler={onLocationChange}
      onNeighborhoodHandler={onNeighborhoodChange}
      onToggleClose={onCloseHandler}
    >
    </RestaurantForm>
  );
}

export default CreateRestaurantScreen;
