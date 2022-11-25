import { View } from 'react-native'
import DishCard from '../../components/DishCard';
import Carousal from '../../components/carousal';

function DishScreen({navigation, route, props}){

    const dishData = 
    {
      name : route.params.name ? route.params.name : '',
      price : route.params.price ? route.params.price : '',
      isVegan : route.params.isVegan ? route.params.isVegan : false,
      isGlutenFree : route.params.isGlutenFree ? route.params.isGlutenFree : false,
      category : route.params.category ? route.params.category : '',
      ingredients : route.params.ingredients ? route.params.ingredients.split(',') : '',
      discount : route.params.discount ? route.params.discount : 0,
    };

    return (
            <DishCard
              name = {dishData.name}
              vegan = {dishData.isVegan}
              isGlutenFree = {dishData.isGlutenFree}
              price = {dishData.price}
              discount = {dishData.discount}
              ingredients={dishData.ingredients}
            ></DishCard>
    )
}

export default DishScreen;

