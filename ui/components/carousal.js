import React, { useRef, useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Text
} from "react-native";
import  Icon from 'react-native-vector-icons/FontAwesome';
import  Iconn from 'react-native-vector-icons/Ionicons';
import { colorPalette } from "../styles/colors";
import {getBase64Uri} from '../../config/utilities'
import { CONSTANTS } from "../../config";
import { AlertConfirm } from "./AlertConfirm";
import { Theme } from "../styles/Theme";


// Default Sample Data
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
    uri:
      "https://malevamag.com/wp-content/uploads/2020/09/Mudr%C3%A1-Portobello-Anticuchado-900x720.jpeg",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63", 
    uri:
      "https://vinomanos.com/wp-content/uploads/2020/02/entrada.jpeg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    uri:
      "https://aguiarbuenosaires.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-09-13-at-11.50.08-800x553.jpeg",
  },
];

// Default Props
const defaults = {
  height:  Dimensions.get("window").height*0.3,
  width: Dimensions.get("window").width,
  delay: 5000,
};


// Default Image Item
const Item = ({ title, image, height, width, fileName, onPress,
  onDeletePhotoPressHandler = (event) => {},
  subtitle, editBool }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={[styles.imageContainer, { height: height, width: width }]}
  >
    <Image source={{ uri: image }} style={[styles.image, { height: height }]} />
  
    <View style={styles.titleContainer}>
    <View style = {{width : 10}}></View>
    {<Icon 
      name = 'trash' size={30} 
      color={colorPalette.White}
      onPress={(event) => {
        onDeletePhotoPressHandler(fileName)
      }}
    ></Icon>}
    </View>

    <View style={styles.movement}>
    <View style={{width : "45%"}}></View>
    <Iconn name="ellipse" size={10} color={colorPalette.White}></Iconn>
    <Iconn name="ellipse" size={10} color={colorPalette.White}></Iconn>
    <Iconn name="ellipse" size={10} color={colorPalette.White}></Iconn>

    </View>

  </TouchableOpacity>
);

// Carousal Component
export default function Carousal({
  data = DATA,
  height = defaults.height,
  width = defaults.width,
  delay = defaults.delay,
  onConfirmDeletePhotoHandler = (fileName) => {},
  onCancelDeletePhotoHandler = (event) => {},
  onDeletePhotoPressHandler = (fileName) => {},
  showConfirmDeletePhoto = false,
  onPress = (item) => {},
  ItemElement = Item,
}) {


  const [deleteFileName, setDeleteFileName] = useState('');
  const [selectedIndex, setselectedIndex] = useState(0);
  const scrollView = useRef();

  // Script which will only executed when component initilizes
  useEffect(() => {
    const fn = setInterval(() => {
      setselectedIndex((oldCount) =>
        oldCount === data.length - 1 ? 0 : oldCount + 1
      );
    }, delay);
    return () => {
      clearInterval(fn);
    };
  }, []);

  // Script will executed every time selectedIndex updates
  useEffect(() => {
    scrollView.current.scrollTo({
      animated: true,
      x: width * selectedIndex,
      y: 0,
    });
  }, [selectedIndex]);

  const setIndex = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    setselectedIndex(Math.floor(contentOffset.x / viewSize.width));
  };

  const onDeletePress = (fileName) => {
    setDeleteFileName(fileName);
    onDeletePhotoPressHandler();
  }

  const onConfirmDeletePhotoPress = (event) => {
    onConfirmDeletePhotoHandler(deleteFileName);
    setDeleteFileName('');
  }

  const onCancelDeletePhotoPress = (event) => {
    onCancelDeletePhotoHandler();
    setDelFile('');
  }

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={setIndex}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
      <AlertConfirm
        title={CONSTANTS.SCREEN_TEXTS.DELETE_DISH_LABEL}
        bodyMsg={CONSTANTS.SCREEN_TEXTS.DELETE_DISH_CONFIRM_MSG}
        confirmBtnTitle={CONSTANTS.SCREEN_TEXTS.DELETE_LABEL}
        cancelBtnTitle={CONSTANTS.SCREEN_TEXTS.CANCEL_LABEL}
        isOpen={showConfirmDeletePhoto}
        onConfirmBtnHandler={onConfirmDeletePhotoPress}
        onCancelBtnHandler={onCancelDeletePhotoPress}
      >
      </AlertConfirm>
        <View style={styles.carousalContainer}>
          {
            data.map((item, idx) => {

            if (!item)
              return;
            
            return (
              <ItemElement
                onDeletePhotoPressHandler={onDeletePress}
                key={idx}
                height={height}
                width={width}
                fileName={item.fileName}
                image={getBase64Uri(item)}
                {...item}
                onPress={() => onPress(item)}
            />
            )
          })
          }
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  carousalContainer: {
    flexDirection: "row",
    width: "100%",
  },
  imageContainer: { backgroundColor: Theme.color.TRANSPARENT  },
  item: {
    backgroundColor: "rgba(91, 91, 91, 0.3)",
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    
    position: "absolute",
    flexDirection : "row-reverse",
    bottom: 10,
    width: "100%",
    paddingLeft: 10,
    
    
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: Theme.font.FONTWEIGHT,
  },
  subtitle: {
    color: '#fff',
  },
  image: {
    width: defaults.width,
    height: defaults.height,
  },
  movement : {
    position: "absolute",
    width: "100%",
    bottom :"3%",
    flexDirection : "row"
  
  }
});