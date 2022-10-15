
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ROUTES } from '../ui';
import { OwnerHome } from '../ui/screens';

const Drawer = createDrawerNavigator();

function DrawerOwnerNavigator(props){
    return (
        <Drawer.Navigator useLegacyImplementation>
            <Drawer.Screen name = {ROUTES.OWNER_HOME_DRAWER} component = {OwnerHome}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default DrawerOwnerNavigator;