import { View , StyleSheet , Dimensions, TouchableWithoutFeedback} from 'react-native';
import { Text, Card, Icon } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import { Theme } from '../styles/Theme';
import { Image } from 'react-native';
import { CONSTANTS } from '../../config';
import { Avatar } from "native-base";
import { getBase64Uri } from '../../config/utilities';

function RestaurantCardOwner({
name = 'Rodizio', 
address = 'Honduras 5500', 
score = 0, 
restaurantId = '', 
pictures = [],
onPhotoPressHandler,
onMenuPressHandler,
props}) {

  const showRating = score > 0;

  const onRestaurantPhotoPress = (event) => {
    if (onPhotoPressHandler)
      onPhotoPressHandler(restaurantId);
  }

  const onRestaurantMenuHandler = (event) => {
    if (onMenuPressHandler)
      onMenuPressHandler(restaurantId);
  }

  const imgFromBack = pictures.length > 0 ?  getBase64Uri(pictures[0]) : 'https://bit.ly/broken-link'; 

  return (
      <Card>
        <View style={styles.global}>
          <Avatar
            bg="amber.500"
            source={{uri : imgFromBack}}
            size={'xl'}
            onTouchEnd={onRestaurantPhotoPress}
          >
          </Avatar>

          <View width={Dimensions.get('window').width*0.55}   style={styles.globalTwo} >
            <Text style={styles.title} >{name}</Text>
            <Text style={styles.address}>{address}</Text>

          {
            showRating && 
            <View style={styles.globalThree}>
              <Text> {Number(score).toFixed(1)} </Text>
              <Icon name="star" color={colorPalette.Orange} size={20}></Icon>
            </View>
          }

          <View style={styles.globalFour} >
            <Text  
            onPress={onRestaurantMenuHandler} 
            style={styles.menu}
             >{CONSTANTS.SCREEN_TEXTS.MENU_LABEL}</Text>
          </View>

         </View>
      
        </View>
      </Card>
  )
}

export default RestaurantCardOwner;

const styles = StyleSheet.create({
  global : {
    flexDirection: 'row', 
    width: Dimensions.get('window').width*0.83,
    height : Dimensions.get('window').height*0.18
  },
  globalTwo : {
    justifyContent : 'space-between',
    marginLeft :  Dimensions.get('window').width*0.02,
   
  },
  globalThree : {
    flexDirection: 'row',
    lignItems: 'center',
    
  },
  globalFour :{
    direction: 'RLT',
    alignItems: 'flex-end',
    marginRight :  Dimensions.get('window').width*0.026,
   
  },
  title :{
    fontSize: Theme.font.MEDIUM,
    color: colorPalette.Black, 
    fontWeight: Theme.font.FONTWEIGHT, 
    marginBottom : Dimensions.get('window').width*0.02
},
address :{
  fontSize: Theme.font.SMALL,
  color: colorPalette.Black, 
  marginBottom : Dimensions.get('window').width*0.02
 
},
menu :{
  fontWeight: Theme.font.FONTWEIGHT,
  fontSize: Theme.font.MEDIUM
 },
});
