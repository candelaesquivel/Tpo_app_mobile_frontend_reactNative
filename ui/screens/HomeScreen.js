import {MyButton} from '../components/button';
import { View } from 'react-native';
import {Logo} from "../components/Logo";

export function HomeScreen(props){
    return (
        <View style={{flexDirection : 'column', alignItems : 'center', }}>
            <View style={{width : 360, height : 120, backgroundColor : 'white'}}></View>
            <Logo></Logo>
            <View style={{width : 360, height : 60, backgroundColor : 'white'}}></View>
            <MyButton title = 'Usuario' width = {286} height = {80}></MyButton>
            <MyButton title = 'Dueño de Restaurante' width = {286} height = {80}></MyButton>
        </View>
    )
}