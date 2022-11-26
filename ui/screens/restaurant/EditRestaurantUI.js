import { InputText } from "../../components/InputText";
import { Text } from "react-native";
import { Switch } from "react-native";
import Carousal from "../../components/carousal";
import { StyleSheet } from "react-native";
import { Theme } from "../../styles/Theme";
import { colorPalette } from "../../styles/colors";
import { View } from "react-native";
import { Icon } from "@rneui/themed";
import { CONSTANTS } from "../../../config";
import { ScrollView } from "react-native-gesture-handler";
import { MyButton } from "../../components/button";
import { useState } from "react";
import { Dimensions } from "react-native";
import { FoodTypesDropDown } from "../../components/FoodTypesDropdown";
import { PriceRangesDropdown } from "../../components/PriceRangeDropdown";
import { WeekButtons } from "../../components/WeekButton";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { convertGoogleAddress, convertGoogleRegion } from "../../../config/utilities";
import { AlertConfirm } from "../../components/AlertConfirm";


export const EditRestaurantUI = ({
  name,
  isClosed = false,
  foodTypes = [],
  priceRange = '',
  region,
  daysStatus,
  addressEntered,

  onNameHandler,
  onIsCloseChangeHandler,
  onFoodTypeChangeHandler,
  onPriceRangeChangeHandler,
  onAddressChangeHandler = (address) => {},
  onRegionChangeHandler = (region) => {},

  onOpenTimeChangeHandler,
  onCloseTimeChangeHandler,
  onDayBtnPressHandler,

  onSavePressHandler,
  onDeletePressHandler,
  showConfirmDelete = false,
  onConfirmDeleteBtnHandler,
  onCancelBtnHandler,

  props
}) => {

  const [showOpeningPicker, setOpeningPicker] = useState(false);
  const [showClosingPicker, setClosingPicker] = useState(false);

  const onOpenTimeChange = (event, date) => {
    setOpeningPicker(false);

    if (event.type === 'set'){
      if (onOpenTimeChangeHandler)
        onOpenTimeChangeHandler(date);
    }

  }

  const onCloseTimeChange = (event, date) => {
    setClosingPicker(false);

    if (event.type === 'set'){
      if (onCloseTimeChangeHandler)
        onCloseTimeChangeHandler(date);
    }

  }

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <AlertConfirm
        title={CONSTANTS.SCREEN_TEXTS.DELETE_RESTAURANT_LABEL}
        bodyMsg={CONSTANTS.SCREEN_TEXTS.DELETE_RESTAURANT_CONFIRM_MSG}
        confirmBtnTitle={CONSTANTS.SCREEN_TEXTS.DELETE_LABEL}
        cancelBtnTitle={CONSTANTS.SCREEN_TEXTS.CANCEL_LABEL}
        isOpen={showConfirmDelete}
        onConfirmBtnHandler={onConfirmDeleteBtnHandler}
        onCancelBtnHandler={onCancelBtnHandler}
      >
      </AlertConfirm>
      <Carousal></Carousal>
      <View style={styles.addPhotoContainer}>
        <Icon name='add' size={30}></Icon>
      </View>
      {/* Form Inputs */}
      <View style={styles.formContainer}>
        <Text style={styles.words}>
            {CONSTANTS.SCREEN_TEXTS.NAME_LABEL}
        </Text>
        <InputText
          textColor={colorPalette.Black}
          onChangeText={onNameHandler}
          defaultValue={name}
          color={colorPalette.White}
          placeholderTextColor = {colorPalette.Black}
        >
        </InputText>

        <Text style={styles.words}>
            {CONSTANTS.SCREEN_TEXTS.ADDRESS_LABEL}
        </Text>

        <SafeAreaView style={styles.addressContainer}>
          <GooglePlacesAutocomplete
            placeholder='Ingresa la dirección'
            fetchDetails={true}
            onPress={
              (data, details = null) => {
                const newRegion = convertGoogleRegion(details);
                const address = convertGoogleAddress(details);
                
                console.log('Address Obj: ', address);
                console.log('Region Obj: ', newRegion);
                
                onRegionChangeHandler(newRegion);
                onAddressChangeHandler(address);
              }
            }
            query={{
              key: 'AIzaSyAjbK7e1ZWUdK3QWETrGvgWMKtjYx0ARDk',
              language: 'es',
              components: 'country:ar',
              type: 'geocode'
            }}
            styles={{
              width: '100%',
            }}
          />
        </SafeAreaView>

        {
          addressEntered?
          <View style={styles.mapContainer}>
            <Text style={styles.words}>
              {CONSTANTS.SCREEN_TEXTS.MAP_LABEL}
            </Text>
            <MapView
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              region={region}
            />
          </View>
          :
          <></>
        }

          <Text style={styles.words}>
            {CONSTANTS.SCREEN_TEXTS.HOUR_LABEL}
          </Text>
      </View>

      {/* Time Opening/Closing Section */}
      <View style={styles.hourContainer}>
        < MyButton
          title= {CONSTANTS.SCREEN_TEXTS.OPEN_HOUR_LABEL} 
          width={ Dimensions.get("window").width*0.5}
          height={Dimensions.get("window").height*0.07}
          onPress={() =>{ setOpeningPicker(!showOpeningPicker)}}
        >
        </MyButton>

        < MyButton
          title= {CONSTANTS.SCREEN_TEXTS.CLOSE_HOUR_LABEL} 
          width={ Dimensions.get("window").width*0.5}
          height={Dimensions.get("window").height*0.07}
          onPress={() => {setClosingPicker(!showClosingPicker)}}
        >
        </MyButton>
  
        {
            showOpeningPicker && 
            <RNDateTimePicker
              value={new Date(1598051730000)}
              mode={'time'}
              display={'spinner'}
              is24Hour={true}
              onChange={onOpenTimeChange}
            >

            </RNDateTimePicker>
        }
        
        {
            showClosingPicker &&  
            <RNDateTimePicker
              value={new Date(1598051730000)}
              mode={'time'}
              display={'spinner'}
              is24Hour={true}
              onChange={onCloseTimeChange}
            >

            </RNDateTimePicker>
        }
        
      </View>
      
      {/* Is Closed */}
      <View style={styles.closeSection}>
        <Text style={styles.closeSection.text}>{CONSTANTS.SCREEN_TEXTS.CLOSE_LABEL}</Text>
        <Switch value={isClosed} onValueChange={onIsCloseChangeHandler}></Switch>
      </View>

      {/* Dropdown Containers */}
      <View style ={styles.dropdownContainer}>
        <FoodTypesDropDown 
          onChangeHandler={onFoodTypeChangeHandler}
          selected={foodTypes}
          >

          </FoodTypesDropDown>
      </View>
      <View style ={styles.dropdownContainer}>
          <PriceRangesDropdown 
            onChangeHandler={onPriceRangeChangeHandler}
            value = {priceRange}
          ></PriceRangesDropdown>
      </View>

      <View style={styles.buttonContainer}>
        <WeekButtons
          weekButtonHandler={onDayBtnPressHandler}
          weekButtonValues={daysStatus}
        >

        </WeekButtons>
        <MyButton
          onPress={onSavePressHandler}
          title= {CONSTANTS.SCREEN_TEXTS.SAVE_LABEL} 
          width={ Dimensions.get("window").width*0.5}
          height={Dimensions.get("window").height*0.07}
        >
        </MyButton>
        <MyButton
          onPress={onDeletePressHandler}
          title= {CONSTANTS.SCREEN_TEXTS.DELETE_LABEL} 
          width={ Dimensions.get("window").width*0.5}
          height={Dimensions.get("window").height*0.07}
        >
        </MyButton>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create(
{
  formContainer:{
    flexDirection : 'column',
    alignItems : 'flex-start'
  },

  hourContainer : {
    flexDirection : 'column',
    alignItems : 'center',
    alignSelf : 'center',
  },

  buttonContainer : {
    flexDirection : 'column',
    alignItems : 'center',
    alignSelf : 'center'
  },

  closeSection : {
    flexDirection : "row",
    alignSelf : 'center',
    marginBottom : "5%",

    text : {
      fontSize: Theme.font.MEDIUM,
      color: colorPalette.Black, 
      marginRight : 5,
    }
  },

  words :{
    fontSize: Theme.font.MEDIUM,
    color: colorPalette.Black, 
    marginLeft : "4%" , 
    marginBottom : "3%"
  },

  dropdownContainer: {
    width : "90%" , 
    marginBottom : 10,
    alignSelf : 'center'
  },

  addressContainer: {
    width: "90%",
    alignSelf : 'center',
    marginBottom : 10,
  },

  mapContainer: {
    alignSelf: 'center',
    height: 250,
    width: 250,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  addPhotoContainer : {
    flexDirection : 'row-reverse',
  }
});
