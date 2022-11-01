import { SectionList, View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { Theme } from '../styles/Theme';
import { colorPalette } from "../styles/colors";
import DishItemCard from "./DishItemCard";


export function DishFlatList({dishes, props}){

  const renderCategory = ({ section: { category } }) => (
      <Text style={style.header}>{category}</Text>
  );

  const renderDishData = ({item}) => (

    <DishItemCard
      dishId={item.dishId}
      name={item.name}
      price={item.price}
      discount={item.discount}
      isVegan={item.isVegan}
      isCeliac={item.isGlutenFree}
      >
    </DishItemCard>
  );

  return (
    <SectionList
      sections={dishes}
      keyExtractor={(item, index) => item + index}
      renderItem={renderDishData}
      renderSectionHeader={renderCategory} 
      ListFooterComponent={<View style={{height : 20}}></View>}
      />
  )
}

const style = StyleSheet.create({
  header :{
    fontSize: Theme.font.MEDIUM,
    color: colorPalette.Black, 
    fontWeight: 'bold', 
    marginStart :"5%",
    marginTop : "2%",
    
  },
});