import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import I18n from '../../assets/localization/I18n';
import {colorPalette} from '../styles/colors';
import {InputText} from '../components/InputText';
import {Icon} from '@rneui/base';
import {MyButton} from '../components/button';

export default function UserProfileScreen({navigation, props}) {
  useEffect(() => {
    navigation.setOptions({
      title: I18n.t('profileUser'),
    });
  });

  return (
    <View>
      <View
        style={{
          width: '90%',
          alignItems: 'flex-start',
          marginTop: 30,
          marginLeft: 30,
        }}>
        <Text
          style={{
            marginBottom: 20,
            marginLeft: 20,
            fontSize: '20',
            color: colorPalette.Black,
          }}>
          {I18n.t('name')}
        </Text>

        <InputText color={colorPalette.White} />

        <View style={{flexDirection: 'row', marginBottom: 40}}>
          <Text
            style={{
              fontSize: '20',
              color: colorPalette.Black,
              width: '45%',
              marginLeft: 20,
            }}>
            {I18n.t('addPicture')}{' '}
          </Text>
          <Icon
            name="add-photo-alternate"
            Type="material-community"
            size={30}
            color={colorPalette.Orange}
          />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <MyButton title="Guardar" width="30%" height="60%" />
      </View>
    </View>
  );
}
