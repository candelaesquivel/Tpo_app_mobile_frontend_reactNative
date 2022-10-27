import {View} from 'react-native';
import {Logo} from '../components/Logo';
import {NavBar} from '../components/navBar';
import {colorPalette} from '../styles/colors';
import {Text} from '@rneui/themed';
import {MyButton} from '../components/button';
import I18n from '../../assets/localization/I18n';
import {useEffect} from 'react';

export function RestaurantUserViewScreen({navigation, props}) {
  useEffect(() => {
    navigation.setOptions({
      title: I18n.t('restaurantUserView'),
    });
  });

  return (
    <View
      style={{flexDirection: 'column', alignItems: 'center', marginTop: 23}}>
      <View style={{height: 40, backgroundColor: colorPalette.White}} />
      <Text h2 h2Style={{color: colorPalette.Orange}}>
        {' '}
        {'Pantalla de Perfil de Restaurante - Vista User'}{' '}
      </Text>
      <View style={{height: 40, backgroundColor: colorPalette.White}} />
    </View>
  );
}
