import {useEffect, useState} from 'react';
import I18n from '../../assets/localization/I18n';
import {View} from 'react-native';
import {Logo} from '../components/Logo';
import {colorPalette} from '../styles/colors';
import {MyButton} from '../components/button';
import {Text} from '@rneui/themed';
import {InputText} from '../components/InputText';

import {ROUTES} from '..';

function LoginOwnerScreen({navigation, props}) {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const onEmailChange = ({nativeEvent: {eventCount, target, text}}) => {
    setUserData({...userData, email: text});
  };

  const onPassChange = ({nativeEvent: {eventCount, target, text}}) => {
    setUserData({...userData, password: text});
  };

  useEffect(() => {
    navigation.setOptions({
      title: I18n.t('logIn'),
    });
  }, [navigation]);

  const onRecoverTouched = event => {
    console.log('Recovery Password Link Touched');
    navigation.navigate(ROUTES.FORGET_PASSWORD);
  };

  const onCreateTouched = event => {
    console.log('On Create Owner Account Touched');
    navigation.navigate(ROUTES.CREATE_ACCOUNT_OWNER);
  };

  const onLoginPressed = async event => {
    console.log('On Login Pressed');

    const loggingResult = await loginOwner(userData);

    console.log(loggingResult);
    return;

    navigation.navigate(ROUTES.OWNER_HOME);
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        backgroundColor: colorPalette.White,
      }}>
      <View
        style={{
          width: '100%',
          height: '5%',
          backgroundColor: colorPalette.White,
        }}
      />
      <Logo />
      <View
        style={{
          width: '90%',
          height: '30%',
          borderRadius: 30,
          backgroundColor: colorPalette.LightOrange,
        }}>
        <InputText
          color={colorPalette.Orange}
          placeholder="Ingrese Mail"
          height="50%"
          onChange={onEmailChange}
        />
        <InputText
          color={colorPalette.Orange}
          placeholder="Ingrese Contraseña"
          secureTextEntry={true}
          onChange={onPassChange}
        />
      </View>
      <MyButton title={I18n.t('logIn')} onPress={onLoginPressed} />
      <Text
        style={{color: colorPalette.Orange, marginTop: 10}}
        onPress={onRecoverTouched}>
        {I18n.t('forgotPassword')}
      </Text>
      <Text
        style={{color: colorPalette.Orange, marginTop: 15}}
        onPress={onCreateTouched}>
        {I18n.t('createAccount')}
      </Text>
    </View>
  );
}

export default LoginOwnerScreen;
