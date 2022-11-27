import { View, Text , StyleSheet , Dimensions} from 'react-native'
import React, { useState } from 'react'
import { colorPalette} from '../../styles/colors'
import { Slider, Icon , AirbnbRating } from '@rneui/base'
import { ButtonGroup } from "@rneui/themed";
import { Theme } from '../../styles/Theme';
import { CONSTANTS } from '../../../config';
import { FoodTypesDropDown } from "../../components/FoodTypesDropdown";
const FilterScreenUI = ({

    props}) => {

    const component1 = () => <Text style={styles.price}>{CONSTANTS.SCREEN_TEXTS.PRICE_RANGE_LOW}</Text>
    const component2 = () => <Text style={styles.price}>{CONSTANTS.SCREEN_TEXTS.PRINCE_RANGE_MID}</Text>
    const component3 = () => <Text style={styles.price}>{CONSTANTS.SCREEN_TEXTS.PRICE_RANGE_HIGH}</Text>
    const component4 = () => <Text style={styles.price}>{CONSTANTS.SCREEN_TEXTS.PRICE_RANGE_ULTRA_HIGH}</Text>

    const [value, setValue] = useState(0);

    const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }] ;
    const buttons2 = [{ element: component1 }, { element: component2 }, { element: component3 }, { element: component4 }] ;
    return (
   
    <View style={styles.global}>
    
        <Text style={styles.words}> {CONSTANTS.SCREEN_TEXTS.FILTER_MSG_INTRO}{value} {CONSTANTS.SCREEN_TEXTS.DISTANCE_UNIT_LABEL}</Text>
      
        <View style={styles.slider}>
            <Slider
              value={value}
              onValueChange={setValue}
              maximumValue={20}
              minimumValue={0}
              step={1}
              allowTouchTrack
              trackStyle={styles.thumbStyleOne}
              thumbStyle={styles.thumbStyle}
              thumbProps={{
              children: (
                  <Icon
                  name="circle"
                  type="font-awesome"
                  size={15}
                  reverse
                  containerStyle={styles.icon}
                  color={colorPalette.Orange}
                  />
              ),
              }}
                    />
        </View>
            
        <Text style={styles.words}> {CONSTANTS.SCREEN_TEXTS.FOOD_TYPE_LABEL}</Text>
       <View style ={styles.dropdownContainer}>
       <FoodTypesDropDown 
          // onChangeHandler={onFoodTypeChangeHandler}
           selected={[{ element: component1 }, { element: component2 }, { element: component3 }]}
          >
          </FoodTypesDropDown>

       </View>
       
      
      
        
        <Text style={styles.words}> {CONSTANTS.SCREEN_TEXTS.PRICE_LABEL}</Text>
              
        <ButtonGroup
        buttons={buttons2}
        containerStyle={styles.buttons}
        />
  
        <Text style={styles.words}>{CONSTANTS.SCREEN_TEXTS.RATING_LABEL}</Text>
      
        <View style={styles.rating}>
          <AirbnbRating 
            defaultRating={3}
            reviews = {[]}
            size = {30}
            selectedColor = {colorPalette.Orange}
              ></AirbnbRating>
        </View>     
      </View>
    )
  }
  
  
  const styles = StyleSheet.create({
    global : {
    alignItems:'center' , 
    height : Dimensions.get("window").height,
  },
  words : {
    marginTop:Dimensions.get("window").width*0.1,  
    marginBottom:Dimensions.get("window").width*0.02,
    fontSize : 19,
    marginLeft : Dimensions.get("window").width*0.02,
    marginRight : Dimensions.get("window").width*0.02,
    color : colorPalette.Black
  },
  slider : {
    width: Dimensions.get("window").width*0.9, 
    height : Dimensions.get("window").width*0.05
  },
  rating : {
   marginTop : -Dimensions.get("window").width*0.15
  },
  thumbStyleOne : { 
    height: "10%", 
    backgroundColor: 'transparent' , 
    },
  
  thumbStyle : { 
    height: 12, 
    width: 12, 
    backgroundColor:'transparent'
   },
   icon : { 
    bottom: 15,
     right: 10
    },
    buttons : {
      height: Dimensions.get("window").height*0.06,
      backgroundColor : colorPalette.Orange, 
       width : Dimensions.get("window").width*0.8,
       marginBottom: -Dimensions.get("window").width*0.01,
      },
  
    price : {
      fontSize : Theme.font.MEDIUM,
      color : colorPalette.White
    },
    dropdownContainer: {
      width : Dimensions.get("window").width*0.9 , 
      marginBottom : 10,
      alignSelf : 'center'
    },
  });
  export {FilterScreenUI}
