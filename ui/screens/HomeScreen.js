import {MyButton} from '../components/button';
import { View } from 'react-native';
import {Logo} from "../components/Logo";
import { colorPalette } from '../styles/colors';
import { useEffect } from 'react';
import { ROUTES } from '..';

function HomeScreen({navigation, props}){

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [navigation])

    const onUserBtnTouch = (e) => {
        console.log("Btn User Touched");
        navigation.navigate(ROUTES.LOGIN_NORMAL_USER)
    }
    
    const onRestaurantOwnerTouch = (e) => {
        console.log("Btn Restaurant Owner Touched");
        navigation.navigate(ROUTES.LOGIN_OWNER);
    }

    return (
        <View style={{flexDirection : 'column', 
        height : '100%',
        alignItems : 'center', backgroundColor : colorPalette.White}}>
            <View style={{width : '100%', height : '15%', backgroundColor : colorPalette.White}}></View>
            <Logo></Logo>
            <View style={{width : '100%', height : '15%', backgroundColor : colorPalette.White}}></View>
            <MyButton title = 'Usuario' width = '70%' height = '15%' onPress = {onUserBtnTouch}></MyButton>
            <MyButton title = 'Dueño de Restaurante' width = '70%' height = '15%' onPress = {onRestaurantOwnerTouch}></MyButton>
        </View>
    )
}

export default HomeScreen;