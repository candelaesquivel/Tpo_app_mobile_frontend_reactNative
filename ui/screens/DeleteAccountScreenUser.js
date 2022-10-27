import {View} from 'react-native';
import {NavBar} from '../components/navBar';
import {colorPalette} from '../styles/colors';
import {Text} from '@rneui/themed';
import {MyButton} from '../components/button';
import {Icon} from '@rneui/themed';
import {InputText} from '../components/InputText';
import I18n from '../../assets/localization/I18n';
import {useEffect} from 'react';

function DeleteAccountScreenUser({navigation, props}) {
  useEffect(() => {
    navigation.setOptions({
      title: 'Eliminar Cuenta',
    });
  }, [navigation]);

  return (
    <View
      style={{flexDirection: 'column', alignItems: 'center', marginTop: 23}}>
      <View style={{height: 35, backgroundColor: colorPalette.White}} />
      <Icon name="admin-panel-settings" size={96} color={colorPalette.Orange} />
      <Text h4 h4Style={{textAlign: 'center'}} style={{marginBottom: 10}}>
        {I18n.t('messageDeleteAccount')}
      </Text>
      <View
        style={{
          borderRadius: 30,
          backgroundColor: '#FEA667',
          height: 190,
          width: 300,
          justifyContent: 'space-evenly',
        }}>
        <InputText
          placeholder="Ingrese contraseña"
          color={colorPalette.Orange}
        />
        <InputText
          placeholder="Repita contraseña"
          color={colorPalette.Orange}
        />
      </View>
      <View style={{height: 15, backgroundColor: colorPalette.White}} />
      <MyButton title="Eliminar" width={245} />
    </View>
  );
}

export default DeleteAccountScreenUser;
