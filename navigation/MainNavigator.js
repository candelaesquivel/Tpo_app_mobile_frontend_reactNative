import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateAccountOwner, ForgetPassword, Home, LoginNormalUser, LoginOwner, MenuRestaurantOwner} from "../ui/screens";
import { ROUTES } from "../ui";
import DrawerOwnerNavigator from "./DrawerOwnerNavigator";
import StackNavigatorOwner from "./StackNavigatorOwner";

const Stack = createNativeStackNavigator();

function MainNavigator(props){
    return (
        <Stack.Navigator>
            <Stack.Screen name = {ROUTES.HOME_SCREEN} component = {Home}></Stack.Screen>
            <Stack.Screen name = {ROUTES.LOGIN_OWNER} component = {LoginOwner}></Stack.Screen>
            <Stack.Screen name = {ROUTES.LOGIN_NORMAL_USER} component = {LoginNormalUser}></Stack.Screen>
            <Stack.Screen name = {ROUTES.CREATE_ACCOUNT_OWNER} component = {CreateAccountOwner}></Stack.Screen>
            <Stack.Screen name = {ROUTES.FORGET_PASSWORD} component = {ForgetPassword}></Stack.Screen>
            <Stack.Screen name = {ROUTES.OWNER_HOME} component = {DrawerOwnerNavigator} 
            options={{
              headerShown : false
            }}></Stack.Screen>
            {/* Owner Screens without Drawer */}
            <Stack.Screen name = {ROUTES.MENU_RESTAURANT_OWNER_STACK} component = {MenuRestaurantOwner}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default MainNavigator;