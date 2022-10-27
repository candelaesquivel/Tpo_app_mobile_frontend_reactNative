import I18n from '../../assets/localization/I18n';
import {View} from 'react-native';
import {colorPalette} from '../styles/colors';
import {MyButton} from '../components/button';
import {InputText} from '../components/InputText';
import {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import createAccountOwner from '../../networking/createAccount';
import {ROUTES} from '..';

export function CreateAccountOwnerScreen({navigation, props}) {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const onRegisterPress = async e => {
    const result = await createAccountOwner(userData);
    console.log('Result Register: ', result);

    if (result) {
      navigation.navigate(ROUTES.OWNER_HOME);
    }
  };

  useEffect(() => {
    navigation.setOptions({title: I18n.t('createAccount')});
  }, [navigation]);

  const onEmailChange = ({nativeEvent: {eventCount, target, text}}) => {
    setUserData({...userData, email: text});
  };

  const onPassChange = ({nativeEvent: {eventCount, target, text}}) => {
    setUserData({...userData, password: text});
  };

  const onRepeatPassChange = ({nativeEvent: {eventCount, target, text}}) => {
    setUserData({...userData, repeatPassword: text});
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
          height: '15%',
          backgroundColor: colorPalette.White,
        }}
      />
      <Icon name="account-circle" size={96} color={colorPalette.Orange} />
      <View
        style={{
          width: '100%',
          height: '5%',
          backgroundColor: colorPalette.White,
        }}
      />

      <View
        style={{
          justifyContent: 'space-evenly',
          height: '35%',
          width: '80%',
          backgroundColor: colorPalette.LightOrange,
          borderRadius: 30,
        }}>
        <InputText
          placeholder={I18n.t('emailInput')}
          color={colorPalette.Orange}
          name="email"
          onChange={onEmailChange}
        />
        <InputText
          secureTextEntry={true}
          placeholder={I18n.t('passInput')}
          color={colorPalette.Orange}
          name="password"
          onChange={onPassChange}
        />
        <InputText
          secureTextEntry={true}
          placeholder={I18n.t('validPassInput')}
          color={colorPalette.Orange}
          name="repeatPassword"
          onChange={onRepeatPassChange}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: '5%',
          backgroundColor: colorPalette.White,
        }}
      />
      <MyButton title={I18n.t('createAccount')} onPress={onRegisterPress} />
    </View>
  );
}

export default CreateAccountOwnerScreen;
