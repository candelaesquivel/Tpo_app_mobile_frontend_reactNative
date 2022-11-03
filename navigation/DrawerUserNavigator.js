
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ROUTES } from '../ui';
import { HomeNormalUser, UserFavoritesRestaurants} from '../ui/screens';
import DrawerOptionsUser from './DrawerOptionsUser';
import { HomeIcon, FavoritesIcon } from './DrawerIcons';
import { CONSTANTS } from '../config';
import { colorPalette } from '../ui/styles/colors';

const Drawer = createDrawerNavigator();

function DrawerUserNavigator(props){
    return (
        <Drawer.Navigator 
          screenOptions={{
            headerStyle: {
              backgroundColor: colorPalette.Orange,
            },
            headerTintColor: colorPalette.White,
          }}
          useLegacyImplementation 
          initialRouteName={ROUTES.HOME_NORMAL_USER_DRAWER}
          drawerContent={(props) => <DrawerOptionsUser {...props}></DrawerOptionsUser>}
          >
            <Drawer.Screen name = {ROUTES.HOME_NORMAL_USER_DRAWER} component = {HomeNormalUser}
            options={{
              title : CONSTANTS.SCREEN_TITLES.HOME,
              drawerIcon : HomeIcon
            }}
            >

            </Drawer.Screen>
            <Drawer.Screen name = {ROUTES.FAVORITE_RESTAURANTS_DRAWER} component = {UserFavoritesRestaurants}
            options={{
              title : CONSTANTS.SCREEN_TITLES.FAVORITES_RESTAURANTS,
              drawerIcon : FavoritesIcon
            }}
            ></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default DrawerUserNavigator;