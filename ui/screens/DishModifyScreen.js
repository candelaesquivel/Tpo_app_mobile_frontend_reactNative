import { View, Text , ScrollView , StyleSheet , Dimensions} from 'react-native'
import React, { useState } from 'react'
import {  Switch } from '@rneui/base'
import { colorPalette } from '../styles/colors'
import I18n from "../../assets/localization/I18n";
import { InputText } from '../components/InputText'
import { MyButton } from '../components/button'
import  Icon from 'react-native-vector-icons/MaterialIcons';
import Carousal from '../components/carousal';
import { Theme } from '../styles/Theme';
import { useSelector } from 'react-redux';
import updateDish from '../../networking/updateDish'

function DishModifyScreen({navigation, route, props}){
  
  const dishId = route.params.id;

  const [dishData, setDishData] = useState({
    name : route.params.name,
    price : route.params.price,
    isVegan : route.params.isVegan,
    isGlutenFree : route.params.isGlutenFree,
    category : route.params.category,
  });

  const currRestaurant = useSelector(state => state.session.restaurantSelectedId)

  const onSavePress = async (event) => {
    const result = await updateDish(currRestaurant, dishId);
  }

  return (

    <ScrollView>
     <Carousal></Carousal>
        <View style={styles.iconGlobal}>
            <Icon name = 'add' size={30} style={styles.iconPlus}></Icon>
        </View>
        <View style={styles.global}>
         <View style={styles.globalTwo}>
            <Text style={styles.words}>
                {I18n.t('name')}    
            </Text>
            <InputText 
            textColor={colorPalette.Black}
            defaultValue={dishData.name}
            color={colorPalette.White}
            placeholderTextColor = {colorPalette.Black}
            ></InputText>

            <Text style={styles.words}>
                {I18n.t('price')}        
            </Text>
            <InputText 
            textColor={colorPalette.Black}
            defaultValue={dishData.price}
            color={colorPalette.White}
            placeholderTextColor = {colorPalette.Black}
            ></InputText>

            <Text style={styles.words}>
                {I18n.t('ingredients')}        
            </Text>
            <InputText 
            textColor={colorPalette.Black}
            placeholder="Atun, palta  y aceite de oliva"
            color={colorPalette.White}
            placeholderTextColor = {colorPalette.Black}
            ></InputText>

            <Text style={styles.words}>
                {I18n.t('discount')}          
            </Text>
            <Text style={styles.words}>
                STEPPER          
            </Text>
           
             <View style={styles.switchContainer}>
                <Text style={styles.words}>
                    {I18n.t('vegan')}    
                </Text>
                <View style={{width:'18%'}}></View>
                <Switch
                    value={dishData.isVegan} />
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.words}>
                    {I18n.t('celiac')}       
                </Text>
                <Switch
                    value={dishData.isGlutenFree} />
            </View>
            <Text style={styles.words}>
             {I18n.t('category')} {dishData.category}      
            </Text>

            <View style={styles.buttons}>
                    <MyButton
                    title= {I18n.t('chose')} 
                    width={ Dimensions.get("window").width*0.4}
                    height={Dimensions.get("window").height*0.07}
                    ></MyButton>

                    <MyButton
                    title= {I18n.t('addNewCategory')} 
                    width={ Dimensions.get("window").width*0.4}
                    height={Dimensions.get("window").height*0.07}
                    ></MyButton>
                 
            </View>
               
            <View style={styles.buttonsTwo}>

            < MyButton
              onPress={onSavePress}
                title={I18n.t('save')}
                width={ Dimensions.get("window").width*0.5}
                height={Dimensions.get("window").height*0.07}
                ></MyButton>

            < MyButton
                title= {I18n.t('deleteDish')}
                width={ Dimensions.get("window").width*0.5}
                height={Dimensions.get("window").height*0.07}
                ></MyButton>
            </View>
        
        </View>                
         </View>
       
    </ScrollView>
    
  )
}

export default DishModifyScreen;

const styles = StyleSheet.create({
    iconGlobal :{
        flexDirection:"row-reverse"
    }
    ,
    iconPlus:{
        marginRight: "3%" , 
        marginTop : "3%" 
    },
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
    switchContainer : {
        flexDirection:'row',
        marginBottom : "3%"
         
    },
    buttons : {
        flexDirection: 'row' , 
        marginLeft : "6%"
        },

    buttonsTwo : {
        flexDirection: 'column' , 
        alignItems : "center" ,
        width : "100%",
        height : "75%" , 
        
    },

});

