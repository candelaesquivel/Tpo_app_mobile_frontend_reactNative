import React from 'react';
import {View} from 'react-native';
import {Text, Card, Icon} from '@rneui/themed';
import {colorPalette} from '../styles/colors';
import I18n from '../../assets/localization/I18n';
import Images from '../../assets/images/index';

function RestaurantCardOwner({
  name = 'Rodizio',
  address = 'Honduras 5500',
  score = 5,
  onMenuPressed = {},
  onPhotoPress = {},
  props,
}) {
  return (
    <View style={{width: '100%'}}>
      <Card>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Images.logo
            onPress={onPhotoPress}
            width={100}
            height={100}></Images.logo>
          <View width={200} style={{justifyContent: 'space-evenly'}}>
            <Text h4>{name}</Text>
            <Text>{address}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text marginBottom={30}>{score} </Text>
              <Icon name="star" color={colorPalette.Orange} size={20}></Icon>
            </View>
            <View style={{direction: 'RLT', alignItems: 'flex-end'}}>
              <Text
                onPress={onMenuPressed}
                style={{fontWeight: 'bold', fontSize: 18}}>
                {I18n.t('menu')}
              </Text>

       </View>


        </View>
      </Card>


 </View>
  );
}

export default RestaurantCardOwner;
