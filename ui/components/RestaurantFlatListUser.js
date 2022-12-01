import { FlatList } from "react-native-gesture-handler";
import { View } from "react-native";
import RestaurantCardUser from '../components/RestaurantCardUser';

export function RestaurantFlatListUser({
  restaurants = [], 
  flatListHeader = undefined,
  onPhotoPressHandler = (restaurantId) => {}, 
  onFavoriteIconPressHandler = (restaurantId) => {}, 
  props}){
  const renderItem = ({ item }) => {
    return (
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
    )
  };

  return (
    <FlatList
      ListHeaderComponent={flatListHeader}
      data={restaurants}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  )
}