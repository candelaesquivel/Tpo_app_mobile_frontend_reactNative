import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddDish, CreateAccountOwner, CreateRestaurant, 
        DeleteAccountOwner, ForgetPassword, Home, LoginNormalUser,
        LoginOwner, MenuRestaurantOwner, DishUserView,RestaurantEdit,
        ModifyDish , ProfileUserRestaurant, SearchFilters, RestaurantProfileUser,
         EditRestaurant, UserProfile , SentComment } from "../ui/screens";
import { OwnerRestaurantProfile } from "../ui/screens";
import { ROUTES } from "../ui";
import DrawerOwnerNavigator from "./DrawerOwnerNavigator";
import DrawerUserNavigator from "./DrawerUserNavigator";
import { CONSTANTS } from "../config";


const Stack = createNativeStackNavigator();

function MainNavigator(props){
    return (
        <Stack.Navigator>
                       
            <Stack.Screen name = {ROUTES.CREATE_RESTAURANT_STACK} component = {CreateRestaurant} options={{
              title : CONSTANTS.SCREEN_TITLES.CREATE_RESTAURANT
            }}></Stack.Screen>

            <Stack.Screen name = {ROUTES.HOME_SCREEN} component = {Home} options={{
              headerShown: false,
            }}></Stack.Screen>
       
            <Stack.Screen name = {ROUTES.LOGIN_OWNER} component = {LoginOwner} options={{
              title : CONSTANTS.SCREEN_TITLES.LOGIN
            }}></Stack.Screen>

            <Stack.Screen name = {ROUTES.LOGIN_NORMAL_USER} component = {LoginNormalUser} options={{
              title : CONSTANTS.SCREEN_TITLES.LOGIN
            }}></Stack.Screen>

            <Stack.Screen name = {ROUTES.CREATE_ACCOUNT_OWNER} component = {CreateAccountOwner} options={{
              title : CONSTANTS.SCREEN_TITLES.CREATE_ACCOUNT
            }}></Stack.Screen>

            <Stack.Screen name = {ROUTES.FORGET_PASSWORD} component = {ForgetPassword} options={{
              title : CONSTANTS.SCREEN_TITLES.RECOVER_PASS
            }}></Stack.Screen>
            
            <Stack.Screen name = {ROUTES.OWNER_HOME} component = {DrawerOwnerNavigator} 
            options={{
              headerShown : false
            }}></Stack.Screen>

            <Stack.Screen name = {ROUTES.HOME_NORMAL_USER} component = {DrawerUserNavigator} 
            options={{
              headerShown : false
            }}></Stack.Screen>

            {/* User Screens without Drawer */}
            <Stack.Screen name = {ROUTES.USER_PROFILE} component={UserProfile} options={{
              title : CONSTANTS.SCREEN_TITLES.PROFILE_USER
            }}></Stack.Screen>

            <Stack.Screen name = {ROUTES.RESTAURANT_VIEW_USER} component={RestaurantProfileUser}></Stack.Screen>
            <Stack.Screen name = {ROUTES.FILTERS_SCREEN_STACK} component={SearchFilters} options={{
              title : CONSTANTS.SCREEN_TITLES.FILTERS
            }}></Stack.Screen>
            <Stack.Screen name = {ROUTES.USER_SENT_COMMENT} component={ SentComment} options = {{
              title : CONSTANTS.SCREEN_TITLES.SENT_COMMENT
            }}></Stack.Screen>

            {/* Owner Screens without Drawer */}
            <Stack.Screen name = {ROUTES.RESTAURANT_EDIT_OWNER} component = {EditRestaurant} options={{
              title : CONSTANTS.SCREEN_TITLES.RESTAURANT_PROFILE
            }}></Stack.Screen>

            <Stack.Screen name = {ROUTES.MENU_RESTAURANT_OWNER_STACK} component = {MenuRestaurantOwner} options={{
              title : CONSTANTS.SCREEN_TITLES.RESTAURANT_MENU
            }}></Stack.Screen>
            
            <Stack.Screen name = {ROUTES.RESTAURANT_OWNER_PROFILE_STACK} component = {OwnerRestaurantProfile} options={{
              title : CONSTANTS.SCREEN_TITLES.PROFILE_USER
            }}></Stack.Screen>

            <Stack.Screen name = {ROUTES.ADD_DISH_STACK} component = {AddDish} options={{
              title : CONSTANTS.SCREEN_TITLES.ADD_DISH
            }}></Stack.Screen>

            <Stack.Screen name = {ROUTES.DISH_MODIFY_STACK} component = {ModifyDish} options={{
              title : CONSTANTS.SCREEN_TITLES.DISH_INFO
            }}></Stack.Screen>

            <Stack.Screen name = {ROUTES.DELETE_ACCOUNT_OWNER_STACK} component = {DeleteAccountOwner} options={{
              title : CONSTANTS.SCREEN_TITLES.DELETE_ACCOUNT
            }}></Stack.Screen>


            <Stack.Screen name = {ROUTES.DISH_USER_VIEW_STACK} component = {DishUserView} options={{
              title : CONSTANTS.SCREEN_TITLES.DISH_INFO
            }}></Stack.Screen>
            
        </Stack.Navigator>
    )
}

export default MainNavigator;