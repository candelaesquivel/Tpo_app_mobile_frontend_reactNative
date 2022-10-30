import { FlatList } from "react-native-gesture-handler";
import { View } from "react-native";
import RestaurantCardUser from "./restaurantCardUser";

export function RestaurantFlatListUser({restaurants = [], props}){
  const renderItem = ({ item }) => {
    return (
      <View >
      <RestaurantCardUser 
        name ={item.name}
        address = {item.address}
        score = {item.score}
        restaurantId = {item.id}
        >
        </RestaurantCardUser>
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