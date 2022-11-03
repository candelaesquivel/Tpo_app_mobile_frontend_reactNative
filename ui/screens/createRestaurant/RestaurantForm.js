import { InputText } from "../../components/InputText";
import { Text } from "react-native";
import Mapa from "../../components/mapa";
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


const RestaurantForm = ({
  name,
  address,
  neighborhood,
  location,
  zipCode,
  isClosed = false,
  onCreateHandler,
  onToggleClose,
  onNameHandler,
  onAddressHandler,
  onLocationHandler,
  onZipCodeHandler,
  onNeighborhoodHandler,
  props
}) => {

  const [showOpeningPicker, setOpeningPicker] = useState(false);
  const [showClosingPicker, setClosingPicker] = useState(false);

  return (
    <ScrollView >
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

        <InputText
          textColor={colorPalette.Black}
          onChange={onAddressHandler}
          defaultValue={address}
          color={colorPalette.White}
          placeholderTextColor = {colorPalette.Black}
        >
        </InputText>

          <Text  style={styles.words} >
            {CONSTANTS.SCREEN_TEXTS.NEIGHBORHOOD_LABEL}
          </Text>

        <InputText
          textColor={colorPalette.Black} 
          onChange={onNeighborhoodHandler}
          defaultValue={neighborhood}
          color={colorPalette.White}
          placeholderTextColor = {colorPalette.Black}
        >
        </InputText>

        <Text style={styles.words}  >
          {CONSTANTS.SCREEN_TEXTS.LOCATION_LABEL}
        </Text>
        
        <InputText
          textColor={colorPalette.Black} 
          onChange={onLocationHandler}
          defaultValue={location}
          color={colorPalette.White}
          placeholderTextColor = {colorPalette.Black}
        >
        </InputText>
          <Text style={styles.words}
          >
            {CONSTANTS.SCREEN_TEXTS.ZIP_CODE_LABEL}
          </Text>
          <InputText
            textColor={colorPalette.Black} 
          onChange={onZipCodeHandler}
          defaultValue={zipCode}
          color={colorPalette.White}
          placeholderTextColor = {colorPalette.Black}
          ></InputText>

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

      {/* Map Section */}
      <Mapa></Mapa>
      
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

  addPhotoContainer : {
    flexDirection : 'row-reverse',
  }
});


export {RestaurantForm};