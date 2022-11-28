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
  isClosedOverwrite = false,
  restaurantTypes = [],
  priceRange = '',
  region,
  addressEntered,

  openingTimes=[],
  closingTimes=[],
  days = [],

  onNameHandler,
  onIsCloseChangeHandler,
  onFoodTypeChangeHandler,
  onPriceRangeChangeHandler,

  onAddressChangeHandler = (address) => {},
  onRegionChangeHandler = (region) => {},
  onOpenTimeChangeHandler = (dayIndex, date) => {},
  onCloseTimeChangeHandler = (dayIndex, date) => {},

  onSavePressHandler,
  onDeletePressHandler,
  showConfirmDelete = false,
  onConfirmDeleteBtnHandler,
  onCancelBtnHandler,

  props
}) => {

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

                if (!details)
                  return;

                const newRegion = convertGoogleRegion(details);
                const address = convertGoogleAddress(details);
                
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
        <Text>{CONSTANTS.SCREEN_TEXTS.OPEN_HOUR_LABEL}</Text>
        <WeekButtons
          timesData={openingTimes}
          onTimeSelectedHandler={onOpenTimeChangeHandler}
        >
        </WeekButtons>
        <Text>{CONSTANTS.SCREEN_TEXTS.CLOSE_HOUR_LABEL}</Text>
        <WeekButtons
          timesData={closingTimes}
          onTimeSelectedHandler={onCloseTimeChangeHandler}
        >
        </WeekButtons>

      </View>
      
      {/* Is Closed */}
      <View style={styles.closeSection}>
        <Text style={styles.closeSection.text}>{CONSTANTS.SCREEN_TEXTS.CLOSE_LABEL}</Text>
        <Switch value={isClosedOverwrite} onValueChange={onIsCloseChangeHandler}></Switch>
      </View>

      {/* Dropdown Containers */}
      <View style ={styles.dropdownContainer}>
        <FoodTypesDropDown 
          onChangeHandler={onFoodTypeChangeHandler}
          selected={restaurantTypes}
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
