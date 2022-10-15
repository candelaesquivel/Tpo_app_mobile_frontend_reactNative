import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, LoginNormalUser, LoginOwner} from "../ui/screens";
import { ROUTES } from "../ui";

const Stack = createNativeStackNavigator();

function AuthNavigator(props){
    return (
        <Stack.Navigator>
            <Stack.Screen name = {ROUTES.HOME_SCREEN} component = {Home}></Stack.Screen>
            <Stack.Screen name = {ROUTES.LOGIN_OWNER} component = {LoginOwner}></Stack.Screen>
            <Stack.Screen name = {ROUTES.LOGIN_NORMAL_USER} component = {LoginNormalUser}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default AuthNavigator;