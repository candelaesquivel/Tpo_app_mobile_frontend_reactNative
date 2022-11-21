import { FlatList } from "react-native-gesture-handler";
import { View } from "react-native";
import RestaurantCardUser from '../components/RestaurantCardUser';

export function RestaurantFlatListUser({restaurants = [], onMenuPressed = {}, onPhotoPress={}, onFavoriteTouched={}, props}){
  const renderItem = ({ item }) => {
    return (
      <View >
        <RestaurantCardUser 
          name ={item.name}
          address = {item.address}
          score = {item.score}
          favorite = {item.isFavorite}
          restaurantId = {item.restaurantId}
          onMenuPressed={onMenuPressed}
          onPhotoPress={onPhotoPress}
          onFavoriteTouched={onFavoriteTouched}
          pictures = {item.pictures}
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