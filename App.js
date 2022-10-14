import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screenNames from './ui/screenNames';
import { HomeScreen } from './ui/screens/HomeScreen';
import { LoginUserScreen } from './ui/screens/LoginUserScreen';
import { colorPalette } from './ui/styles/colors';
import { LoginRestaurantOwnerScreen } from './ui/screens/LoginRestaurantOwnerScreen';
import {CreateAccountOwnerScreen} from './ui/screens/CreateAccountOwnerScreen';
import {RecoveryPasswordScreen} from './ui/screens/RecoveryPasswordScreen';
import { RestaurantsUserScreen } from './ui/screens/RestaurantsUserScreen';
import { RestaurantUserViewScreen } from './ui/screens/RestaurantProfileViewScreen';

const Stack = createNativeStackNavigator();

const HeaderDefaultOptions = () => {
  return {
    headerStyle : {
      backgroundColor : colorPalette.Orange,
    },
    headerTintColor : colorPalette.Black,
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={HeaderDefaultOptions}
      >
        <Stack.Screen
        name={screenNames.USER_RESTAURANTS}
        component={RestaurantsUserScreen}
        >

        </Stack.Screen>
        <Stack.Screen 
          name={screenNames.HOME_SCREEN}
          component={HomeScreen}>
          </Stack.Screen>
          <Stack.Screen
          name={screenNames.LOGIN_OWNER}
          component={LoginRestaurantOwnerScreen}
          >
          </Stack.Screen>

          <Stack.Screen
          name={screenNames.LOGIN_NORMAL_USER}
          component={LoginUserScreen}
          >
          </Stack.Screen>

          <Stack.Screen
          name={screenNames.CREATE_ACCOUNT_OWNER}
          component={CreateAccountOwnerScreen}
          >
          </Stack.Screen>

          <Stack.Screen
          name={screenNames.RECOVER_PASS_SCREEN}
          component={RecoveryPasswordScreen}
          >
          </Stack.Screen>

          <Stack.Screen
            name = {screenNames.RESTAURANT_VIEW_USER}
            component={RestaurantUserViewScreen}
          >

          </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

