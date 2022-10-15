import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateAccountOwner, ForgetPassword, Home, LoginNormalUser, LoginOwner} from "../ui/screens";
import { ROUTES } from "../ui";
import DrawerOwnerNavigator from "./DrawerOwnerNavigator";

const Stack = createNativeStackNavigator();

function AuthNavigator(props){
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
        </Stack.Navigator>
    )
}

export default AuthNavigator;