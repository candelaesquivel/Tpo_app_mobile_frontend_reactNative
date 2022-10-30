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
        restaurantId = {item.id}
        onMenuPressed={onMenuPressed}
        onPhotoPress={onPhotoPress}
        onFavoriteTouched={onFavoriteTouched}
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