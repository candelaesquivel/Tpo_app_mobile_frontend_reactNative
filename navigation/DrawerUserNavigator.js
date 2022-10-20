
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ROUTES } from '../ui';
import { HomeNormalUser, UserFavoritesRestaurants} from '../ui/screens';
import DrawerOptionsUser from './DrawerOptionsUser';


const Drawer = createDrawerNavigator();

function DrawerUserNavigator(props){
    return (
        <Drawer.Navigator 
          useLegacyImplementation 
          initialRouteName={ROUTES.HOME_NORMAL_USER_DRAWER}
          drawerContent={(props) => <DrawerOptionsUser {...props}></DrawerOptionsUser>}
          >
            <Drawer.Screen name = {ROUTES.HOME_NORMAL_USER_DRAWER} component = {HomeNormalUser}
            options={{
              title : 'Inicio',
            }}
            >

            </Drawer.Screen>
            <Drawer.Screen name = {ROUTES.FAVORITE_RESTAURANTS_DRAWER} component = {UserFavoritesRestaurants}
            options={{
              title : 'Favoritos',
            }}
            ></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default DrawerUserNavigator;