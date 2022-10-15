
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ROUTES } from '../ui';
import { OwnerHome, CreateRestaurant} from '../ui/screens';

const Drawer = createDrawerNavigator();

function DrawerOwnerNavigator(props){
    return (
        <Drawer.Navigator useLegacyImplementation initialRouteName={ROUTES.OWNER_HOME_DRAWER}>
            <Drawer.Screen name = {ROUTES.OWNER_HOME_DRAWER} component = {OwnerHome}></Drawer.Screen>
            <Drawer.Screen name = {ROUTES.CREATE_RESTAURANT_DRAWER} component = {CreateRestaurant}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default DrawerOwnerNavigator;