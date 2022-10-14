import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { colorPalette} from '../styles/colors'
import I18n from "../../assets/localization/I18n";
import { Slider, Icon , AirbnbRating } from '@rneui/base'
import { ButtonGroup } from "@rneui/themed";

export default function FilterScreen({navigation , props}) {

    const [value, setValue] = useState(0);
    const component1 = () => <Text>{I18n.t('$')}</Text>
    const component2 = () => <Text>{I18n.t('$$')}</Text>
    const component3 = () => <Text>{I18n.t('$$$')}</Text>
    const component4 = () => <Text>{I18n.t('$$$$')}</Text>
    const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }] ;
    const buttons2 = [{ element: component1 }, { element: component2 }, { element: component3 }, { element: component4 }] ;

  return (
   

    <View style={{width: '90%', alignItems:'center'}}>
    
    <Text style={{marginTop:30, marginLeft:20, marginBottom:20}}> {I18n.t('filterMessage1')}{value} {I18n.t('km')}</Text>
   
    <View style={{width: '80%', marginLeft :30}}>
        <Slider
                    value={value}
                    onValueChange={setValue}
                    maximumValue={20}
                    minimumValue={0}
                    step={1}
                    allowTouchTrack
                    trackStyle={{ height: 5, backgroundColor: 'transparent' , marginLeft:20}}
                    thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
                    thumbProps={{
                    children: (
                        <Icon
                        name="circle"
                        type="font-awesome"
                        size={15}
                        reverse
                        containerStyle={{ bottom: 15, right: 10}}
                        color={colorPalette.Orange}
                        />
                    ),
                    }}
                />
    </View>
        
    <Text style={{marginTop:30, marginLeft:20, marginBottom:20 }}> {I18n.t('typeFood')}</Text>
       
       
     <ButtonGroup
     
      buttons={buttons}
      containerStyle={{marginLeft:40,height: '10%', backgroundColor : colorPalette.Orange, width : '80%'}}
      />

    
     <Text style={{marginTop:30, marginLeft:20, marginBottom:20 }}> {I18n.t('price')}</Text>
           

    <ButtonGroup
     
     buttons={buttons2}
     containerStyle={{marginBottom: 20 ,marginLeft:40,height: '10%', backgroundColor : colorPalette.Orange, width : '80%'}}
     />

    <Text style={{marginTop:20, marginLeft:20 }}>{I18n.t('calification')}</Text>
   
    <View style={{marginTop:-10, marginLeft: 20}}>
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