import { View } from 'react-native'
import DishCard from '../components/DishCard';
import Carousal from '../components/carousal';

function DishScreen({navigation, route, props}){

    const dishData = 
    {
      name : route.params.name,
      price : route.params.price,
      isVegan : route.params.isVegan,
      isCeliac : route.params.isGlutenFree,
      category : route.params.category,
      ingredients : route.params.ingredients.split(','),
      discount : route.params.discount,
    };

    return (
            <DishCard
              name = {dishData.name}
              vegan = {dishData.isVegan}
              celiac = {dishData.isCeliac}
              price = {dishData.price}
              discount = {dishData.discount}
              ingredients={dishData.ingredients}
            ></DishCard>
    )
}

export default DishScreen;

