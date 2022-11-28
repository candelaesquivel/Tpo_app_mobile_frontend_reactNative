import { FlatList } from "react-native-gesture-handler";
import { View } from "react-native";
import RestaurantCardUser from '../components/RestaurantCardUser';

export function RestaurantFlatListUser({
  restaurants = [], 
  onPhotoPressHandler = (restaurantId) => {}, 
  onFavoriteIconPressHandler = (restaurantId) => {}, 
  props}){
  const renderItem = ({ item }) => {
    return (
      <View >
        <RestaurantCardUser 
          name ={item.name}
          address = {item.address}
          score = {item.score}
          favorite = {item.isFavorite}
          restaurantId = {item.restaurantId}
          pictures = {item.pictures}
          onPhotoPressHandler = {onPhotoPressHandler}
          onFavoriteIconPressHandler = {onFavoriteIconPressHandler}
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