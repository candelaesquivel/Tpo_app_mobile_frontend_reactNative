import {View, Text} from 'react-native';
import DishCard from '../components/dishCard';
import Carousal from '../components/carousal';

function DishScreen({navigation, props}) {
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
      <Carousal />
      <DishCard
        name="Tarta de Atun"
        vegan={true}
        celiac={true}
        price={10}
        ingredients={ING}
      />
    </View>
  );
}

export default DishScreen;
