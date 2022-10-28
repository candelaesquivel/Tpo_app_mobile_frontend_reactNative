import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import { Provider } from 'react-redux'
import store from './config/store';

export default function App() {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <MainNavigator></MainNavigator>
      </NavigationContainer>
    </Provider>
  )
}

