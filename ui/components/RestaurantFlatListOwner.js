import { FlatList } from "react-native-gesture-handler";
import { View } from "react-native";
import RestaurantCardOwner from "./RestaurantCardOwner";

export function RestaurantFlatListOwner({
  restaurants = [], 
  onMenuPressHandler,
  onPhotoPressHandler,
  props})

{
  const renderItem = ({ item }) => {
    return (
      <View >
      <RestaurantCardOwner 
        onPhotoPressHandler={onPhotoPressHandler}
        onMenuPressHandler={onMenuPressHandler}
        name ={item.name}
        address = {item.address}
        score = {item.score}
        restaurantId = {item.restaurantId}
        pictures = {item.pictures}
        >
        </RestaurantCardOwner>
      </View>
    )
  };
  return (
    <FlatList
      data={restaurants}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  )
}