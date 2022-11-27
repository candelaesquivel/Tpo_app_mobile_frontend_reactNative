import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import { Provider } from 'react-redux'
import store from './redux/store';
import {NativeBaseProvider} from 'native-base'
import { ToastScreen } from './ui/screens/feedback/ToastScreen';
import SplashScreen from 'react-native-splash-screen' 
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
    }, [])
 
  return (
    <NativeBaseProvider>
      <Provider store = {store}>
          <ToastScreen></ToastScreen>
          <NavigationContainer>
            <MainNavigator></MainNavigator>
          </NavigationContainer>
      </Provider>
    </NativeBaseProvider>

  )
}

