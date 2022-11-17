import { InputText } from "../../components/InputText";
import { Text, TouchableOpacityBase } from "react-native";
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
import MyTimePicker from '../../components/TimePicker';
import { useState } from "react";
import { Dimensions } from "react-native";
import { FoodTypesDropDown } from "../../components/FoodTypesDropdown";
import { PriceRangesDropdown } from "../../components/PriceRangeDropdown";
import MyWeekButtons from '../../components/WeekButton';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


const RestaurantForm = ({
  name,
  isClosed = false,
  region,
  addressEntered,
  onCreateHandler,
  onNameHandler,
  onToggleClose,
  onRegionHandler,
  props
}) => {

  const [showOpeningPicker, setOpeningPicker] = useState(false);
  const [showClosingPicker, setClosingPicker] = useState(false);

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
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
          onChange={onNameHandler}
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
                console.log(details);
                onRegionHandler({
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                  latitudeDelta: details.geometry.viewport.northeast.lat - details.geometry.viewport.southwest.lat,
                  longitudeDelta: (details.geometry.viewport.northeast.lat - details.geometry.viewport.southwest.lat) * (Dimensions.get('window').width / Dimensions.get('window').height),
                });
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
          onPress={() =>{ showOpeningPicker(!openingHour)}}
        >
        </MyButton>

        < MyButton
          title= {CONSTANTS.SCREEN_TEXTS.CLOSE_HOUR_LABEL} 
          width={ Dimensions.get("window").width*0.5}
          height={Dimensions.get("window").height*0.07}
          onPress={() => {showClosingPicker(!closingHour)}}
        >
        </MyButton>
  
        {
            showOpeningPicker && <MyTimePicker></MyTimePicker>
        }
        
        {
            showClosingPicker &&  <MyTimePicker></MyTimePicker>
        }
        
      </View>
      
      {/* Is Closed */}
      <View style={styles.closeSection}>
        <Text style={styles.closeSection.text}>{CONSTANTS.SCREEN_TEXTS.CLOSE_LABEL}</Text>
        <Switch value={isClosed} onValueChange={onToggleClose}></Switch>
      </View>

      {/* Dropdown Containers */}
      <View style ={styles.dropdownContainer}>
        <FoodTypesDropDown></FoodTypesDropDown>
      </View>
      <View style ={styles.dropdownContainer}>
          <PriceRangesDropdown></PriceRangesDropdown>
      </View>

      <View style={styles.buttonContainer}>
        <MyWeekButtons></MyWeekButtons>
        <MyButton
        onPress={onCreateHandler}
        title= {CONSTANTS.SCREEN_TEXTS.CREATE_LABEL} 
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


export {RestaurantForm};