import React from 'react';
import { View, Image } from 'react-native';
import { Text, Card, Icon } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import i18n from '../../assets/localization/i18n'
export default function DishCard(props) {

    const VeganComponent = () => {
        return (
            <View style={{flexDirection: 'row',alignItems: 'center'}}>
                 <Icon name="leaf" type='font-awesome-5' color={colorPalette.Black} size={20}></Icon>
                <Text style={{color: colorPalette.Black , fontSize: 18}} marginBottom={30}> i18n. </Text>
            </View>

        )
    }

    const CeliacComponent= () => {
        return(
            <View style={{flexDirection: 'row',alignItems: 'center'}}>
                 <Icon name="leaf" type='font-awesome-5' color={colorPalette.Black} size={20}></Icon>
                <Text style={{color: colorPalette.Black , fontSize: 18}} marginBottom={30}> Libre de gluten </Text>
            </View>
            
        )
    }

  return (
    <View >
      <Card containerStyle={{borderRadius: 30}} >
        <View>

       <View width='100%' style={{ alignItems: 'center'}}>
         <Text h4 style={{flexDirection: 'column',color: colorPalette.Black , fontWeight: 'bold'}}>{props.name}</Text>  
       </View>
       <View width='10%' height= '10%'></View>
        {
            props.vegan && <VeganComponent/>
        }
        {
            props.celiac && <CeliacComponent/>
        }
          <View width='10%' height= '10%'></View>
        {
            props.ingredients.map((l, i) => (
               
           <View style={{alignItems: 'center',flexDirection: 'row' }}>
                <Icon name="circle"  color={colorPalette.Black} size={7}></Icon>
                <Text style={{ fontSize:18,color: colorPalette.Black}}>{l}</Text>
            
            </View>
        
            ))
        }
         
        <View width={300} style={{ alignItems: 'center'}}>
         <Text h4 style={{flexDirection: 'column',color: colorPalette.Orange}}>${props.price}</Text>  
       </View>
       </View>
         </Card>
    </View>
    
    
  )
}