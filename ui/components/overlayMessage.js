import React, { useState } from 'react';
import { Button, Overlay, Icon } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';
import { color } from '@rneui/base';
import { colorPalette } from '../styles/colors';

export default function OverlayMessage(props) {

        const Message1 = () => {
            return (
                <View style={{flexDirection: 'row', justifyContent:'space-evenly', width: '100%'}}>
                 <Text style={{  fontSize: 25,color: colorPalette.Orange}} >si</Text>
                <Text style={{  fontSize: 25,color: colorPalette.Orange}}>no</Text>
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
        
  return (
    <View>
     
    <Button
      title="Open Overlay"
      buttonStyle={styles.button}
      
    />
    <Overlay isVisible={true} overlayStyle={{width:'90%', height: '25%', justifyContent : 'space-between'}} >
        <View style={{flexDirection: 'column',alignItems: 'center'}} >
            <Text style={styles.textPrimary}>{props.message}</Text>
            {
            props.message1 && <Message1/>
             }
              {
            props.message2 && <Message2/>
             }
           
        </View>
        <View style={{flexDirection: 'row'}}>
        <Icon
        name="arrow-back-outline"
        type="ionicon"
        color= {colorPalette.Orange}
        size='25%'
        />
        </View>
        
     
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
    
