import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Images from '../../assets/images/index';
import {Icon} from '@rneui/themed';
import {colorPalette} from '../styles/colors';
import MenuCard from '../components/menuCard';
import CommentUserRestaurant from '../components/commentUserRestaurant';
import I18n from '../../assets/localization/I18n';
import Mapa from '../components/mapa';

function ProfileUserRestaurantScreen({
  navigation,
  name = 'Mudra',
  hourOpen = 10,
  hourOpen2 = 'am',
  hourClose = 20,
  hourClose2 = 'pm',
  calification = 4,
  priceRange = '$$$$',
  props,
}) {
  const renderItem = ({item}) => (
    <View>
      <Text
        style={{
          color: colorPalette.Black,
          fontSize: 18,
          marginTop: 10,
          fontWeight: 'bold',
        }}>
        {item.category}
      </Text>
      <MenuCard
        onPhotoPress={item.onDishPhotoPress}
        name={item.name}
        price={item.price}
        discount={item.discount}
      />
    </View>
  );

  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Images.logo width="100%" height={100} />
        <Text>{name}</Text>
        <Text>
          Abierto : {hourOpen}
          {hourOpen2} - {hourClose}
          {hourClose2}
        </Text>
        <Text>{calification}</Text>
        <Text>{priceRange}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
          }}>
          <Icon name="heart" type="font-awesome" color={colorPalette.Orange} />
          <Icon
            name="comment"
            type="font-awesome"
            color={colorPalette.Orange}
          />
          <Icon name="share" type="font-awesome" color={colorPalette.Orange} />
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
      <CommentUserRestaurant />

      {/* <FlatList
              data={MENU}
              renderItem={renderItem}
              keyExtractor ={item => item.name}
              />

      </View>  esto es MENU

      {/* <comentarios*/}
    </View>
  );
}

export default ProfileUserRestaurantScreen;
