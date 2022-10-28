import { View, Text , ScrollView , StyleSheet} from 'react-native'
import React, { useState } from 'react'
import {  Switch } from '@rneui/base'
import { colorPalette } from '../styles/colors'
import I18n from "../../assets/localization/I18n";
import { InputText } from '../components/InputText'
import { MyButton } from '../components/button'
import  Icon from 'react-native-vector-icons/MaterialIcons';
import Carousal from '../components/carousal';
import Mapa from '../components/mapa';
import { Dropdown } from 'react-native-element-dropdown';
import MyWeekButtons from '../components/WeekButton';


function CreateRestaurantScreen({navigation, props}) {

  const data = [
    { label: 'Mexicana', value: '1' },
    { label: 'Vegetariana', value: '2' },
    { label: 'Argentina', value: '3' },
    { label: 'Vegana', value: '4' },
    { label: 'China', value: '5' },
  ];
  const data2 = [
    { label: '$', value: '1' },
    { label: '$$', value: '2' },
    { label: '$$$', value: '3' },
    { label: '$$$$', value: '4' },
   
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  const onCreateRestaurantPressed = (event) => {
    console.log('On Restaurant Create Press');
    navigation.navigate(ROUTES.OWNER_HOME_DRAWER);
  }

  return (
    <ScrollView>
    <Carousal></Carousal>
    <View style={{flexDirection:"row-reverse"}}>
    <Icon name = 'add' size={30} style={{marginRight: 10 , marginTop : 10 }}></Icon>
    </View>

    <View style={{flexDirection : 'column', alignItems : 'center', marginTop : 20}}>
 
        <View style={{width:'85%', alignItems:'flex-start'}}>
            <Text
            style={{ fontSize: 20, color: colorPalette.Black}}
            >
                {I18n.t('name')}    
            </Text>
            <InputText 
            placeholder="Tartar de atun" 
            color={colorPalette.White}
            placeholderTextColor = {colorPalette.Black}
            ></InputText>

            <Text
            style={{ fontSize: 20, color: colorPalette.Black}}
            >
                Direccion   
            </Text>
            <InputText 
                placeholder="Tartar de atun" 
                color={colorPalette.White}
                placeholderTextColor = {colorPalette.Black}
            ></InputText>

            <Text
            style={{ fontSize: 20, color: colorPalette.Black}}
            >
                Barrio    
            </Text>
            <InputText 
                placeholder="Tartar de atun" 
                color={colorPalette.White}
                placeholderTextColor = {colorPalette.Black}
            ></InputText>

            <Text
            style={{ fontSize: 20, color: colorPalette.Black}}
            >
                Localidad   
            </Text>

            <InputText 
                placeholder="Tartar de atun" 
                color={colorPalette.White}
                placeholderTextColor = {colorPalette.Black}
            ></InputText>
            
            <Text
            style={{ fontSize: 20, color: colorPalette.Black}}
            >
                Codigo postal   
            </Text>

            <InputText 
                placeholder="Tartar de atun" 
                color={colorPalette.White}
                placeholderTextColor = {colorPalette.Black}
            ></InputText>
            
               

            </View>
          
            <View style={{height:'3%'}}></View>
            <View style={{flexDirection:'row' }}>
            <Text
                    style={{fontSize: 20, color: colorPalette.Black, width:'45%'}}
                    >
                    Cerrado  
                    </Text>
                    <Switch
                    value={false}
                    ></Switch>
            </View>
        
            <View style={{height:'3%'}}></View>  
        

          <Mapa></Mapa>
          <View style ={{width : "90%" , marginBottom : 10  }}>

          <Dropdown
          style={[styles.dropdown ]}
          placeholderStyle={styles.placeholderStyle}  
          itemTextStyle ={styles.placeholderStyle}       
          data={data}
          labelField="label"
          valueField="value"
          placeholder={ 'Tipo de comida'}
          onFocus={() => setIsFocus(true)}
         
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        
        />
      
          </View>
          <View style ={{width : "90%" , marginBottom : 10  }}>

          <Dropdown
          style={[styles.dropdown ]}
          placeholderStyle={styles.placeholderStyle}  
          itemTextStyle ={styles.placeholderStyle}   
          selectedTextStyle={styles.selectedTextStyle} 
          data={data2}
          labelField="label"
          valueField="value"
          placeholder={ 'Precio'}
          onFocus={() => setIsFocus(true)}
         
      
          onChange={item => {
            setValue(item.value);
           
          }}
          activeColor={colorPalette.Orange}
        />
      </View>
      
      <MyWeekButtons></MyWeekButtons>
      
        <View style={{flexDirection: 'column' , width : "100%",height : 160 , alignItems : "center" }}>

        < MyButton
            title= "Crear"
            width={200}
            height={50}
            ></MyButton>
    
            </View>
           
                 
    </View>
    
</ScrollView>
  )
}

export default CreateRestaurantScreen;

const styles = StyleSheet.create({
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
    fontSize: 20,
    color : colorPalette.Black
  },

 
 
});