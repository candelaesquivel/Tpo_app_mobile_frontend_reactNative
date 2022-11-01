import { View, Text , StyleSheet , Dimensions} from 'react-native'
import React, { useState } from 'react'
import { colorPalette} from '../styles/colors'
import I18n from "../../assets/localization/I18n";
import { Slider, Icon , AirbnbRating } from '@rneui/base'
import { ButtonGroup } from "@rneui/themed";
import { Theme } from '../styles/Theme';

export default function FilterScreen({navigation , props}) {

    const [value, setValue] = useState(0);

    const component1 = () => <Text style={styles.price}>{I18n.t('$')}</Text>
    const component2 = () => <Text style={styles.price}>{I18n.t('$$')}</Text>
    const component3 = () => <Text style={styles.price}>{I18n.t('$$$')}</Text>
    const component4 = () => <Text style={styles.price}>{I18n.t('$$$$')}</Text>

    const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }] ;

    const buttons2 = [{ element: component1 }, { element: component2 }, { element: component3 }, { element: component4 }] ;

  return (
   

    <View style={styles.global}>
    
      <Text style={styles.words}> {I18n.t('filterMessage1')}{value} {I18n.t('km')}</Text>
    
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
          
      <Text style={styles.words}> {I18n.t('typeFood')}</Text>
          
      <ButtonGroup
        buttons={buttons}
        containerStyle={styles.buttons}
        />
      
      <Text style={styles.words}> {I18n.t('price')}</Text>
            
      <ButtonGroup
      buttons={buttons2}
      containerStyle={styles.buttons}
      />

      <Text style={styles.words}>{I18n.t('calification')}</Text>
    
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
  height : "100%",
},
words : {
  marginTop:Dimensions.get("window").width*0.1,  
  marginBottom:"2%",
  fontSize : 19,
  marginLeft : "2%",
  marginRight : "2%",
  color : colorPalette.Black
},
slider : {
  width: '90%', 
  height : "5%"
},
rating : {
 marginTop : -Dimensions.get("window").width*0.1
},
thumbStyleOne : { 
  height: "10%", 
  backgroundColor:  I18n.t('transparent') , 
  },

thumbStyle : { 
  height: 12, 
  width: 12, 
  backgroundColor: I18n.t('transparent')
 },
 icon : { 
  bottom: 15,
   right: 10
  },
  buttons : {
    height: '6%',
    backgroundColor : colorPalette.Orange, 
     width : '80%',
     marginBottom: -Dimensions.get("window").width*0.01,
    },

  price : {
    fontSize : Theme.font.MEDIUM,
    color : colorPalette.White
  }
});