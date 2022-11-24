import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import { Provider } from 'react-redux'
import store from './redux/store';
import {NativeBaseProvider} from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store = {store}>
        <NavigationContainer>
          <MainNavigator></MainNavigator>
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>

  )
}

