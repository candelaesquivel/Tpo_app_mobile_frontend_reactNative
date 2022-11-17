import { View, Text , ScrollView , StyleSheet , Dimensions} from 'react-native'
import React, { useState } from 'react'
import { colorPalette } from '../../styles/colors'
import { InputText } from '../../components/InputText'
import { MyButton } from '../../components/button'
import  Icon from 'react-native-vector-icons/MaterialIcons';
import Carousal from '../../components/carousal';
import Mapa from '../../components/mapa';
import {WeekButtons} from '../../components/WeekButton';
import MyTimePicker from '../../components/TimePicker';
import { Theme } from '../../styles/Theme';
import CloseComponent from '../../components/closeComponent';
import { FoodTypesDropDown } from '../../components/FoodTypesDropdown';
import { PriceRangesDropdown } from '../../components/PriceRangeDropdown';
import { CONSTANTS } from '../../../config';


const EditRestaurantScreenUI = ({
  
    props}) => {
        const [openingHour,setOpeningHour] = useState(false);
        const [closingHour,setClosingHour] = useState(false);
    return (
        <ScrollView>
        <Carousal></Carousal>
         <View style={{flexDirection:"row-reverse"}}>
           <Icon name = 'add' size={30} style={{marginRight: 10 , marginTop : "5%" }}></Icon>
          </View>
           <View style={styles.global}>
   
                   <View style={styles.globalTwo}>
   
                       <Text style={styles.words}>
                           {CONSTANTS.SCREEN_TEXTS.NAME_LABEL}    
                       </Text>
                       <InputText 
                       placeholder="Mudra"
                       color={colorPalette.White}
                       placeholderTextColor = {colorPalette.Black}
                       ></InputText>
   
                       <Text style={styles.words}>
                           {CONSTANTS.SCREEN_TEXTS.ADDRESS_LABEL}    
                       </Text>
                       <InputText 
                       placeholder="Honduras 500"
                       color={colorPalette.White}
                       placeholderTextColor = {colorPalette.Black}
                       ></InputText>
   
                       <Text  style={styles.words} >
                        {CONSTANTS.SCREEN_TEXTS.NEIGHBORHOOD_LABEL}    
                       </Text>
                       <InputText 
                       placeholder="Palermo"
                       color={colorPalette.White}
                       placeholderTextColor = {colorPalette.Black}
                       ></InputText>
   
                       <Text style={styles.words}  >
                       {CONSTANTS.SCREEN_TEXTS.LOCATION_LABEL}    
                       </Text>
                       <InputText 
                       placeholder="CABA"
                       color={colorPalette.White}
                       placeholderTextColor = {colorPalette.Black}
                       ></InputText>
                       
                       <Text style={styles.words}
                       >
                        {CONSTANTS.SCREEN_TEXTS.ZIP_CODE_LABEL}    
                       </Text>
                       <InputText 
                       placeholder="1345"
                       color={colorPalette.White}
                       placeholderTextColor = {colorPalette.Black}
                       ></InputText>
   
                     <Text style={styles.words}>
                       {CONSTANTS.SCREEN_TEXTS.HOUR_LABEL} 
                       </Text>
   
                   </View>
             <View style={styles.hour}>
             
                   < MyButton
                   title= {CONSTANTS.SCREEN_TEXTS.OPEN_HOUR_LABEL} 
                   width={ Dimensions.get("window").width*0.5}
                   height={Dimensions.get("window").height*0.07}
                   onPress={() =>{ setOpeningHour(!openingHour)}}
                   ></MyButton>
   
                   < MyButton
                   title= {CONSTANTS.SCREEN_TEXTS.CLOSE_HOUR_LABEL} 
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
                  
             <Mapa></Mapa>
             <CloseComponent></CloseComponent>
   
             <View style ={styles.dropdownContainer}>
               <FoodTypesDropDown></FoodTypesDropDown>
             </View>
             <View style ={styles.dropdownContainer}>
                 <PriceRangesDropdown></PriceRangesDropdown>
             </View>
             
             <WeekButtons></WeekButtons>
             
             <View style={styles.button}>
               < MyButton
                   title= {CONSTANTS.SCREEN_TEXTS.SAVE_LABEL} 
                   width={ Dimensions.get("window").width*0.5}
                   height={Dimensions.get("window").height*0.07}
                   ></MyButton>
   
                    < MyButton
                   title= {CONSTANTS.SCREEN_TEXTS.DELETE_RESTAURANT_LABEL} 
                   width={ Dimensions.get("window").width*0.5}
                   height={Dimensions.get("window").height*0.07}
                   ></MyButton>
   
              </View>
          
         </View>
   
         
   </ScrollView>
    )
  }
  
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
  button : {
    flexDirection: 'column' ,
     width : "100%",
     height : "60%",
      alignItems : "center" 
    }
  
  });
  
  
  export {EditRestaurantScreenUI}