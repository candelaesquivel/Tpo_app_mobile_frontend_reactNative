import { View , Text , StyleSheet , Dimensions , ScrollView} from 'react-native'
import React, { useState , useEffect} from 'react'

import { MyButton } from "../../components/button";
import { CONSTANTS } from "../../../config";
import { Theme } from '../../styles/Theme';
import { colorPalette } from '../../styles/colors';
import { InputText } from "../../components/InputText";
import { useFormik } from 'formik';
import { dishSchemas } from '../../formSchemas/dishSchemas';


import { Dropdown } from 'react-native-element-dropdown';

function CategoryRestaurantScreen({ navigation, route, props})
 {
  const data = [
      { label: 'Item 1', value: '1' },
      { label: 'Item 2', value: '2' },
      { label: 'Item 3', value: '3' },
      { label: 'Item 4', value: '4' },
      { label: 'Item 5', value: '5' },
      { label: 'Item 6', value: '6' },
      { label: 'Item 7', value: '7' },
      { label: 'Item 8', value: '8' },
    ];
  
  
  const [value, setValue] = useState(null);


  return (
    <View style={styles.global}>
      
      <Dropdown
      style={[styles.dropdown]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}

      data={data}


      maxHeight={300}

      labelField="label"
      valueField="value"

      placeholder={CONSTANTS.SCREEN_TITLES.CATEGORY_DROPDOWN}

      value={value}
      
      onChange={item => {
        setValue(item.value);
      }} />
        
      <Text style={styles.words}>
          {CONSTANTS.SCREEN_TITLES.CATEGORY_TEXT}
      </Text>
        <InputText
        textColor={colorPalette.Black}
        //onChangeText={[]}
        color={colorPalette.White}
        placeholderTextColor = {colorPalette.Black}
        >
        </InputText>
        
        <View style={styles.buttonContainer}>
          <MyButton
          //onPress={onSavePressHandler}
          title= {CONSTANTS.SCREEN_TEXTS.SAVE_LABEL}
          width={ Dimensions.get("window").width*0.5}
          height={Dimensions.get("window").height*0.07}
        ></MyButton>
        <View style={styles.space}></View>
        <MyButton
          //onPress={onSavePressHandler}
          title= {CONSTANTS.SCREEN_TEXTS.DELETE_LABEL}
          width={ Dimensions.get("window").width*0.5}
          height={Dimensions.get("window").height*0.07}
        ></MyButton>
        </View>
        

      </View>

  )
}

export default  CategoryRestaurantScreen;

const styles = StyleSheet.create({
    global :{
        width :Dimensions.get("window").width,
        height :Dimensions.get("window").height,
        alignItems : "center"
    },
    
      inputText: {
         width :Dimensions.get("window").width,
         height :Dimensions.get("window").height*0.1,
         marginBottom : Dimensions.get("window").width*0.1
      },
      buttonContainer : {
        alignItems : 'center',
        height :Dimensions.get("window").height*0.1,
        marginBottom :Dimensions.get("window").height*0.02, 
        marginTop :Dimensions.get("window").height*0.02, 
      },
      words :{
        fontSize: Theme.font.MEDIUM,
        color: colorPalette.Black,
        marginLeft : "4%" ,
        marginBottom : "3%",
        marginLeft : Dimensions.get("window").width*0.05,
      },

      dropdown: {
        width :Dimensions.get("window").width*0.9,
        height :Dimensions.get("window").height*0.09,
        borderColor: colorPalette.Orange,
        borderRadius: Theme.sizes.SMALL_ROUNDED,
        paddingHorizontal: 10, borderWidth:1,
        marginBottom :Dimensions.get("window").height*0.04, 
        marginTop :Dimensions.get("window").height*0.08, 
      },
     
      placeholderStyle: {
        fontSize: Theme.font.SMALL,
      },
      selectedTextStyle: {
        fontSize: Theme.font.SMALL,
      },
      space :{
        
        height :Dimensions.get("window").height*0.03,
      }
      
    
  });