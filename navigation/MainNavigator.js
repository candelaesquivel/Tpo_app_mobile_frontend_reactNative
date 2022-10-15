import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddDish, CreateAccountOwner, CreateRestaurant, DeleteAccountOwner, ForgetPassword, Home, LoginNormalUser, LoginOwner, MenuRestaurantOwner, ModifyDish} from "../ui/screens";
import { OwnerRestaurantProfile } from "../ui/screens";
import { ROUTES } from "../ui";
import DrawerOwnerNavigator from "./DrawerOwnerNavigator";

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
            <Stack.Screen name = {ROUTES.CREATE_RESTAURANT_STACK} component = {CreateRestaurant}></Stack.Screen>
            <Stack.Screen name = {ROUTES.RESTAURANT_OWNER_PROFILE_STACK} component = {OwnerRestaurantProfile}></Stack.Screen>
            <Stack.Screen name = {ROUTES.ADD_DISH_STACK} component = {AddDish}></Stack.Screen>
            <Stack.Screen name = {ROUTES.DISH_DETAILS_OWNER_STACK} component = {ModifyDish}></Stack.Screen>
            <Stack.Screen name = {ROUTES.DELETE_ACCOUNT_OWNER_STACK} component = {DeleteAccountOwner}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default MainNavigator;