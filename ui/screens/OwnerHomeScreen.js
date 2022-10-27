import {View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '@rneui/themed';
import RestaurantCardOwner from '../components/RestaurantCardOwner';
import MySearchBar from '../components/MySearchBar';
import {ROUTES} from '..';
import {useEffect} from 'react';

function OwnerHomeScreen({navigation, props}) {
  const [restaurants, setRestaurants] = useState([]);
  const [triggerSearch, setTrigggerSearch] = useState(false);

  const testOwnerId = '';

  const fillRestaurantList = async () => {
    setRestaurants(rests);
  };

  useEffect(() => {
    if (!triggerSearch) {
      fillRestaurantList();
      setTrigggerSearch(true);
    }
  }, [restaurants, triggerSearch]);

  const renderItem = ({item}) => (
    <View>
      <RestaurantCardOwner
        name={item.name}
        address={item.address}
        score={item.score}
        onMenuPressed={onRestaurantMenuPressed}
        onPhotoPress={onPhotoPresses}
      />
    </View>
  );

  const onCreateRestaurantPressed = event => {
    console.log('On Restaurant Create Press');
    navigation.navigate(ROUTES.CREATE_RESTAURANT_STACK);
  };

  const onRestaurantMenuPressed = event => {
    console.log('On Restaurant Menu Press');
    navigation.navigate(ROUTES.MENU_RESTAURANT_OWNER_STACK);
  };

  const onPhotoPresses = event => {
    console.log('On Photo Pressed');
    navigation.navigate(ROUTES.RESTAURANT_OWNER_PROFILE_STACK);
  };

  return (
    <View style={{alignItems: 'center'}}>
      <MySearchBar />
      <Icon
        size={50}
        name="pluscircle"
        type="antdesign"
        onPress={onCreateRestaurantPressed}
      />

      <FlatList
        data={[restaurants]}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
}

export default OwnerHomeScreen;
