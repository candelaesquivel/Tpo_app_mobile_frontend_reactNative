import { View, Text , FlatList} from 'react-native'
import React from 'react'
import Images from '../../assets/images/index';
import { Icon } from '@rneui/themed';
import { colorPalette } from '../styles/colors';
import CommentUserRestaurant from '../components/commentUserRestaurant';
import I18n from '../../assets/localization/I18n';
import Mapa from '../components/mapa';


function ProfileUserRestaurantScreen({navigation,name='Mudra',hourOpen=10,hourOpen2='am',hourClose=20,hourClose2='pm',
calification=4,priceRange='$$$$',props}) {




  return (
    <View>
      
       <View style={{alignItems:'center'}}>
       <Images.logo width='100%' height={100} ></Images.logo>
        <Text>{name}</Text>
        <Text>Abierto : {hourOpen}{hourOpen2} - {hourClose}{hourClose2}</Text>
        <Text>{calification}</Text>
        <Text>{priceRange}</Text>
        <View style={{flexDirection:'row',justifyContent: 'space-evenly', width :'100%' }}>
          <Icon name='heart' type='font-awesome' color={colorPalette.Orange}></Icon>
          <Icon name='comment' type='font-awesome' color={colorPalette.Orange}></Icon>
          <Icon name='share' type='font-awesome' color={colorPalette.Orange}></Icon>
        </View>
       
        </View>
        
        {/* <View style={{flexDirection:'row',justifyContent: 'space-evenly', width :'100%' , marginTop : '5%', 
        marginLeft: '8%'}}>

         <Button
         title={I18n.t('map')}
         titleStyle={{fontSize: 13, fontFamily :'Roboto'}}
         buttonStyle={{backgroundColor : colorPalette.Orange , width :'65%', height :'33%', borderRadius: 80}}
         ></Button>

        <Button
         title={I18n.t('menu')}
         titleStyle={{fontSize: 13, fontFamily :'Roboto'}}
         buttonStyle={{backgroundColor : colorPalette.Orange , width :'65%', height :'33%', borderRadius: 80}}
         ></Button>

        <Button
         title={I18n.t('comment')}
         titleStyle={{fontSize: 13, fontFamily :'Roboto'}}
         buttonStyle={{backgroundColor : colorPalette.Orange , width :'65%', height :'33%', borderRadius: 80}}
         ></Button>    
     </View>  */}
     {/* <Mapa></Mapa> */}
      <CommentUserRestaurant></CommentUserRestaurant>

     {/* <FlatList
              data={MENU}
              renderItem={renderItem}
              keyExtractor ={item => item.name}
              /> 
    
      </View>  esto es MENU

      {/* <comentarios*/}


</View>
  )
}

export default ProfileUserRestaurantScreen;