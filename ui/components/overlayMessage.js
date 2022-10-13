import { Button, Overlay, Icon } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';
import { color } from '@rneui/base';
import { colorPalette } from '../styles/colors';
import { InputText } from './InputText';
import I18n from '../../assets/localization/I18n';
import { useEffect, useState } from 'react';

export default function OverlayMessage(props) {

  

        const Message1 = () => {
            return (
                <View style={{flexDirection: 'row', justifyContent:'space-evenly', width: '100%'}}>
                 <Text style={{  fontSize: 25,color: colorPalette.Orange}} >{I18n.t('yes')}</Text>
                <Text style={{  fontSize: 25,color: colorPalette.Orange}}>{I18n.t('no')}</Text>
                </View>
               
    
            )
        }

        const Message2 = () => {
            return (
                <Icon
                name={props.nameIcon}
                type={props.typeIcon}
                color= {colorPalette.Orange}
                size='25%'
                
                />
    
            )
        }
        const Message3 = () => {
          return (
              
            <View style={{width:'80%', height:'10%', marginTop : -20}}>
              <InputText
             color={colorPalette.Orange}
              ></InputText>
            </View>
          )
      }
        
  return (
    <View>
 
    <Overlay isVisible = {false} overlayStyle={{width:'90%', height: '25%', justifyContent : 'space-between'}} >
        <View style={{flexDirection: 'column',alignItems: 'center'}} >
            <Text style={styles.textPrimary}>{props.message}</Text>
            {
            props.message1 && <Message1/>
             }
              {
            props.message2 && <Message2/>
             }
             {
              props.message3 && <Message3/>
             }
           
        </View>
       
       {
        props.message3 &&

         <View style={{alignItems: 'center'}}>
        <Text 
        style={{fontSize:'17', color: colorPalette.Orange }} 
        onPress={(event) => setIsVisi(false)}
        > {I18n.t('okey')} </Text>
          </View>
       }

       {
        props.message1 &&
        <View style={{alignItems:'flex-start'}}>
        <Icon
        name="arrow-back-outline"
        type="ionicon"
        color= {colorPalette.Orange}
        size='25%'
        onPress={(e) => setIsVisi(true)}
        />
        </View>
       }

      {
        props.message2 &&
        <View style={{alignItems:'flex-start'}}>
        <Icon
        name="arrow-back-outline"
        type="ionicon"
        color= {colorPalette.Orange}
        size='25%'
        onPress={(e) => {setIsVisi(true)}}
        />
        </View>
       }
        
       
        
     
    </Overlay>
    </View>
  )
}

const styles = StyleSheet.create({
  
    textPrimary: {
      marginVertical: 50,
      textAlign: 'center',
      fontSize: 25,
      color: colorPalette.Orange,
    },
 
    });
    
