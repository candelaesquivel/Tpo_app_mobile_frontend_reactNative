import { SectionList } from "react-native";
import { Text } from "react-native";
import MenuCard from "./menuCard";
import { StyleSheet } from "react-native";
import { Theme } from '../styles/Theme';
import { colorPalette } from "../styles/colors";


export function DishOwnerList({dishes, props}){

  const renderCategory = ({ section: { category } }) => (
      <Text style={style.header}>{category}</Text>
  );

  const renderDishData = ({item}) => (
    <MenuCard
        onPhotoPress={item.onDishPhotoPress}
        name={item.name}
        price={item.price}
        discount={item.discount}>
    </MenuCard>
  );

  return (
    <SectionList
      sections={dishes}
      keyExtractor={(item, index) => item + index}
      renderItem={renderDishData}
      renderSectionHeader={renderCategory} />
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