
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ROUTES } from '../ui';
import { OwnerHome} from '../ui/screens';
import DrawerOptionsOwner from './DrawerOptionsOwner';
import { MyRestaurantsIcon } from './DrawerIcons';
import { CONSTANTS } from '../config';
import { colorPalette } from '../ui/styles/colors';

const Drawer = createDrawerNavigator();

function DrawerOwnerNavigator(props){
    return (
        <Drawer.Navigator 
          screenOptions={{
            headerStyle: {
              backgroundColor: colorPalette.Orange,
            },
            headerTintColor: colorPalette.White,
          }}
          useLegacyImplementation 
          initialRouteName={ROUTES.OWNER_HOME_DRAWER}
          drawerContent={(props) => <DrawerOptionsOwner {...props}></DrawerOptionsOwner>}
          >
            <Drawer.Screen name = {ROUTES.OWNER_HOME_DRAWER} component = {OwnerHome}
            options={{
              title : CONSTANTS.SCREEN_TITLES.MY_RESTAURANTS,
              drawerIcon : MyRestaurantsIcon
            }}
            ></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default DrawerOwnerNavigator;