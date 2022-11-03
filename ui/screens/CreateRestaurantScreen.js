import { View, Text , ScrollView , StyleSheet , Dimensions} from 'react-native'
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
import MapView, {Marker} from 'react-native-maps';
const {width, height} = Dimensions.get('window');

function CreateRestaurantScreen({navigation, props}) {
  
  const [openingHour,setOpeningHour] = useState(false);
  const [closingHour,setClosingHour] = useState(false);

  const onCreateRestaurantPressed = (event) => {
    console.log('On Restaurant Create Press');
    navigation.navigate(ROUTES.OWNER_HOME_DRAWER);
  }

  this.state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  return (
    <ScrollView>
     <Carousal></Carousal>
      <View style={{flexDirection:"row-reverse"}}>
        <Icon name = 'add' size={30} style={{marginRight: 10 , marginTop : "5%" }}></Icon>
       </View>
        <View style={styles.global}>

                <View style={styles.globalTwo}>

                    <Text style={styles.words}>
                        {I18n.t('name')}    
                    </Text>
                    <InputText 
                    placeholder=""
                    color={colorPalette.White}
                    placeholderTextColor = {colorPalette.Black}
                    ></InputText>

                    <Text style={styles.words}>
                        {I18n.t('address')}    
                    </Text>
                    <InputText 
                    placeholder=""
                    color={colorPalette.White}
                    placeholderTextColor = {colorPalette.Black}
                    ></InputText>

                    <Text  style={styles.words} >
                     {I18n.t('neighborhood')}    
                    </Text>
                    <InputText 
                    placeholder=""
                    color={colorPalette.White}
                    placeholderTextColor = {colorPalette.Black}
                    ></InputText>

                    <Text style={styles.words}  >
                    {I18n.t('location')}    
                    </Text>
                    <InputText 
                    placeholder=""
                    color={colorPalette.White}
                    placeholderTextColor = {colorPalette.Black}
                    ></InputText>
                    
                    <Text style={styles.words}
                    >
                     {I18n.t('zipCode')}    
                    </Text>
                    <InputText 
                    placeholder=""
                    color={colorPalette.White}
                    placeholderTextColor = {colorPalette.Black}
                    ></InputText>
                </View>
                <View>
                <MapView
                  style={styles.map}
                  scrollEnabled={false}
                  zoomEnabled={false}
                  pitchEnabled={false}
                  rotateEnabled={false}
                  initialRegion={this.state.region}>
                  <Marker
                    title="Ubicacion"
                    coordinate={this.state.region}
                  />
                  </MapView>
                </View>
                <View style={styles.hour}>
                <Text style={styles.words}>
                    {I18n.t('hour')} 
                </Text>
                
                < MyButton
                title= {I18n.t('opening')} 
                width={ Dimensions.get("window").width*0.5}
                height={Dimensions.get("window").height*0.07}
                onPress={() =>{ setOpeningHour(!openingHour)}}
                ></MyButton>

                < MyButton
                title= {I18n.t('closing')} 
                width={ Dimensions.get("window").width*0.5}
                height={Dimensions.get("window").height*0.07}
                onPress={() => {setClosingHour(!closingHour)}}
                ></MyButton>
              
                  {
                      openingHour && <MyTimePicker></MyTimePicker>
                  }
                  
                  {
                      closingHour &&  <MyTimePicker></MyTimePicker>
                  }
                  
                </View>
          <CloseComponent>s</CloseComponent>
          <View style ={styles.dropdownContainer}>
            <FoodTypesDropDown></FoodTypesDropDown>
          </View>
         <View style ={styles.dropdownContainer}>
              <PriceRangesDropdown></PriceRangesDropdown>
          </View>
          
          <MyWeekButtons></MyWeekButtons>

          
          <View style={styles.buton}>
            < MyButton
                title= {I18n.t('create')} 
                width={ Dimensions.get("window").width*0.5}
                height={Dimensions.get("window").height*0.07}
                ></MyButton>

           </View>
       
      </View>

      
</ScrollView>
  )
}

export default CreateRestaurantScreen;

const styles = StyleSheet.create({
    globalTwo:{
      width:'90%', 
      alignItems:'flex-start'
    },
    global:{
      flexDirection : 'column',
      alignItems : 'center'
    },
    words :{
      fontSize: Theme.font.MEDIUM,
      color: colorPalette.Black, 
      marginLeft : "4%" , 
      marginBottom : "3%"
  },
  hour : {
    flexDirection : "column" , 
    alignSelf : "center" ,
    marginBottom :"5%"
  }
  ,
  dropdownContainer: {
    width : "90%" , 
    marginBottom : 10  
   
  },
  map: {
    width: 250,
    height: 250,
  },
  container: {
    backgroundColor: colorPalette.White,
    padding: 10,
    width : "80%"
  },
  dropdown: {
    height: 50,
    borderColor: colorPalette.Orange,
    borderRadius: 5,
    paddingHorizontal: 10, borderWidth:1,
  },
   
  placeholderStyle: {
    fontSize: Theme.font.MEDIUM,
    color : colorPalette.Black
  },
  buton : {
    flexDirection: 'column' ,
     width : "100%",
     height : "60%", 
     alignItems : "center" }
});

