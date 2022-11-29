import { View, Text , StyleSheet , Dimensions} from 'react-native'
import React, { useState } from 'react'
import { colorPalette} from '../../styles/colors'
import { Slider, Icon , AirbnbRating } from '@rneui/base'
import { ButtonGroup } from "@rneui/themed";
import { Theme } from '../../styles/Theme';
import { CONSTANTS } from '../../../config';
import { FoodTypesDropDown } from '../../components/FoodTypesDropdown';
import { color } from 'react-native-reanimated';
import { Button } from 'react-native';
import { MyButton } from '../../components/button';

const FilterScreenUI = ({
  distance = 0,
  restaurantTypes = [],
  priceRange = '',
  rating = 0,

  onDistanceChangeHandler = (value) => {},
  onPriceRangeChangeHandler = (value) => {},
  onRatingChangeHandler = (value) => {},
  onRestaurantTypeChangeHandler = (value) => {},
  onCleanFiltersPressHandler=(value) => {},

    ...props}) => {

    const priceRanges = [
      '-',
      CONSTANTS.SCREEN_TEXTS.PRICE_RANGE_LOW,
      CONSTANTS.SCREEN_TEXTS.PRINCE_RANGE_MID,
      CONSTANTS.SCREEN_TEXTS.PRICE_RANGE_HIGH,
      CONSTANTS.SCREEN_TEXTS.PRICE_RANGE_ULTRA_HIGH,
    ];

    const priceRangeButtons = priceRanges.map((item, idx) => {
      return {
        element : () => {return <Text style={styles.price}>{item}</Text>}
      }
    });

    const [selectedPrices, setSelectedPrice] = useState(
      priceRange.indexOf(priceRange)
    );

    return (
   
    <View style={styles.global}>
    
        <Text style={styles.words}> {CONSTANTS.SCREEN_TEXTS.FILTER_MSG_INTRO}{distance} {CONSTANTS.SCREEN_TEXTS.DISTANCE_UNIT_LABEL}</Text>
      
        <View style={styles.slider}>
            <Slider
              value={distance}
              onValueChange={onDistanceChangeHandler}
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
            
          
        <View style={styles.dropdownContainer}>
          <FoodTypesDropDown
            selected={restaurantTypes}
            onChangeHandler={onRestaurantTypeChangeHandler}
          >

          </FoodTypesDropDown>

        </View>
        
        <Text style={styles.words}> {CONSTANTS.SCREEN_TEXTS.PRICE_LABEL}</Text>
                
        <ButtonGroup
          onPress={(index) => {
            setSelectedPrice(index);
            if (priceRanges[index] === '-')
              onPriceRangeChangeHandler('');
            else
              onPriceRangeChangeHandler(priceRanges[index])
          }}
          selectedButtonStyle={{
            backgroundColor : colorPalette.Orange,
          }}
          selectedIndex={selectedPrices}
          buttons={priceRangeButtons}
          containerStyle={styles.buttons}
        />
  
        <Text style={styles.words}>{CONSTANTS.SCREEN_TEXTS.RATING_LABEL}</Text>
      
        <View style={styles.rating}>
          <AirbnbRating
            onFinishRating={onRatingChangeHandler}
            defaultRating={rating}
            reviews = {[]}
            size = {30}
            selectedColor = {colorPalette.Orange}
              ></AirbnbRating>
        </View>
        
        <MyButton title={CONSTANTS.SCREEN_TEXTS.CLEAR_FILTERS_LABEL}
          onPress={onCleanFiltersPressHandler}
        
        ></MyButton>

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
    fontSize : Theme.font.SMALL_TWO,
    marginLeft : Dimensions.get("window").width*0.02,
    marginLeft : Dimensions.get("window").width*0.02,
    color : colorPalette.Black
  },
  slider : {
    width: Dimensions.get("window").width*0.9, 
    height : Dimensions.get("window").width*0.05
  },
  rating : {
   marginTop : -Dimensions.get("window").width*0.15
  },
  dropdownContainer: {
    marginTop : Dimensions.get('window').height * 0.1,
    width : "90%" , 
    marginBottom : 10,
    alignSelf : 'center'
  },
  thumbStyleOne : { 
    height: "10%", 
    backgroundColor: Theme.color.TRANSPARENT , 
    },
  
  thumbStyle : { 
    height: 12, 
    width: 12, 
    backgroundColor:Theme.color.TRANSPARENT
   },
   icon : { 
    bottom: 15,
     right: 10
    },
    buttons : {
      borderRadius : Theme.sizes.SMALL_ROUNDED,
      height: '6%',
      backgroundColor : colorPalette.Cream, 
      width : Dimensions.get("window").width*0.8,
       marginBottom: -Dimensions.get("window").width*0.01,
    },
  
    price : {
      fontSize : Theme.font.MEDIUM,
      color : colorPalette.White
    }
  });
  export {FilterScreenUI}
