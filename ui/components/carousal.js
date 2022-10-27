import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Text,
} from 'react-native';

// Default Sample Data
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image:
      'https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',

    image:
      'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/03/Platos-de-comida-que-pides-a-domicilio-y-puedes-hacer-en-casa-945x630.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',

    image:
      'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/04/Recetas-de-comidas-para-ni%C3%B1os.jpg',
  },
];

// Default Props
const defaults = {
  height: Dimensions.get('window').height * 0.4,
  width: Dimensions.get('window').width,
  delay: 3000,
};

// Default Image Item
const Item = ({image, height, width, onPress}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={[styles.imageContainer, {height: height, width: width}]}>
    <Image source={{uri: image}} style={[styles.image, {height: height}]} />
  </TouchableOpacity>
);

// Default On Press Action
const handlePress = item => {
  console.log('Pressed', item.id);
};

// Carousal Component
export default function Carousal({
  data = DATA,
  height = defaults.height,
  width = defaults.width,
  delay = defaults.delay,
  onPress = handlePress,
  ItemElement = Item,
}) {
  const [selectedIndex, setselectedIndex] = useState(0);
  const scrollView = useRef();

  // Script will executed every time selectedIndex updates
  useEffect(() => {
    scrollView.current.scrollTo({
      animated: true,
      x: width * selectedIndex,
      y: 0,
    });
  }, [selectedIndex]);

  const setIndex = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    setselectedIndex(Math.floor(contentOffset.x / viewSize.width));
  };

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={setIndex}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}>
        <View style={styles.carousalContainer}>
          {data.map(item => (
            <ItemElement
              key={item.id}
              height={height}
              width={width}
              {...item}
              onPress={() => onPress(item)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  carousalContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  imageContainer: {backgroundColor: 'yellow'},
  item: {
    backgroundColor: 'rgba(91, 91, 91, 0.3)',
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: defaults.width,
    height: '100%',
  },
});
