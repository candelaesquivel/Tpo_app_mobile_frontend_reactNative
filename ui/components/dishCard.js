import React from 'react';
import { View, Image , FlatList , StyleSheet } from 'react-native';
import { Text, Card, Icon } from "@rneui/themed";
import { colorPalette } from '../styles/colors';
import I18n from "../../assets/localization/I18n";
import { Theme } from '../styles/Theme';


function DishCard({name = 'Tarta de Atún', vegan = true, celiac = true, ingredients = [], price = 0}) {

     const VeganComponent = () => {
         return (
             <View style={styles.veganCeliac}>
              <Icon name="leaf" type='font-awesome-5' color={colorPalette.Black} size={20}></Icon>
               <Text style={styles.venganCeliacWord}> {I18n.t('vegan')} </Text>
             </View>

         )
     }

     const CeliacComponent= () => {
         return(
             <View style={styles.veganCeliac}>
              <Icon name="leaf" type='font-awesome-5' color={colorPalette.Black} size={20}></Icon>
               <Text style={styles.venganCeliacWord}> {I18n.t('celiac')} </Text>
             </View>
            
         )
     }

     const renderItem = ({ item }) => (
      <View >
        <View style={styles.ingredients}>
          <Icon name="circle"  color={colorPalette.Black} size={7}></Icon>
          <Text style={styles.ingredientsWords}>{item.name}</Text>
          </View>       
      </View>
    ); 
  

  return (
    <View >
      <Card containerStyle={styles.container} >     
        <View  style={styles.containerTwo}>
          <View style ={styles.title}>
            <Text style={styles.titleWord}>{name}</Text>  
          </View>       
            {
                vegan && <VeganComponent/>
            }
            {
                celiac && <CeliacComponent/>
            }
            
            {
              <FlatList
                data={ingredients}
                renderItem={renderItem}
                keyExtractor ={item => {
                  return item.name
                }}
          ></FlatList>
            }
            
          <View  style={{ alignItems: 'center'}}>
            <Text style={styles.price}>{I18n.t('priceSymbol')}{price}</Text>  
          </View>

     </View>
      </Card>
        </View>
    
    
  )
}

export default DishCard;

const styles = StyleSheet.create({
  title : { 
  alignItems: 'center' ,
  width:'100%'
},
  titleWord : {
  flexDirection: 'column',
  color: colorPalette.Black , 
  fontWeight: 'bold',
  fontSize : Theme.font.LARGE,
  },
  container : {
    borderRadius: 30
  },
  veganCeliac :{
    flexDirection: 'row',
    alignItems: 'center'
  },
  venganCeliacWord : {
    color: colorPalette.Black , 
    fontSize: Theme.font.MEDIUM,
    },
  ingredients: {
    alignItems: 'center',
    flexDirection: 'row'
   },
   ingredientsWords : { 
    fontSize:Theme.font.MEDIUM,
    color: colorPalette.Black,
    marginLeft : "5%"
  },
  price : {
    flexDirection: 'column',
    color: colorPalette.Orange,
    fontSize : Theme.font.MEDIUM
  },
});
