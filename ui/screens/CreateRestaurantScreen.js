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

function CreateRestaurantScreen({navigation, props}) {
  
  const [restaurantData, setRestaurantData] = useState({
    name : '',
    address : '',
    neighborhood : '',
    location : '',
    zipCode : '',
    isClosed : false,
    foodTypes : [],
    priceRange : '',
  })

  const ownerId = useSelector(state => state.session.userId);

  const onCreateHandler = async (event) => {
    const result = await createRestaurant(ownerId);

    if (result)
      navigation.navigate(ROUTES.OWNER_HOME_DRAWER);
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
    setRestaurantData({...restaurantData, 'address' : text});
  }

  const onLocationChange = ({ nativeEvent: { eventCount, target, text} }) => {
    setRestaurantData({...restaurantData, 'location' : text});
  }

  const onNeighborhoodChange = ({ nativeEvent: { eventCount, target, text} }) => {
    setRestaurantData({...restaurantData, 'neighborhood' : text});
  }

  return (
    <RestaurantForm
      name={restaurantData.name}
      address={restaurantData.address}
      zipCode={restaurantData.zipCode}
      neighborhood={restaurantData.neighborhood}
      location={restaurantData.location}
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
