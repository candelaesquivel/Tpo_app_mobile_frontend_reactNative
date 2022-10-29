import { View, Text } from 'react-native'
import DishCard from '../components/dishCard';
import Carousal from '../components/carousal';

function DishScreen({navigation, props}){

    const ING = [
        {
          name: 'atun',
          
        },
        {
          name: 'palta',
          
        },
      
    ];

    return (
        <View>
           
           <Carousal></Carousal>
            <DishCard
            name = 'Tarta de Atún'
            vegan = {true}
            celiac = {true}
            price = {10}
            ingredients = {ING}
         
            ></DishCard>
        </View>
       
    )
}

export default DishScreen;

