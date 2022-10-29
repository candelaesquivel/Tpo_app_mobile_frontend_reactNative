import { View, Text , FlatList ,StyleSheet, SectionList} from 'react-native'
import React, { useEffect } from 'react'
import { Icon } from "@rneui/themed";
import { colorPalette } from '../styles/colors';
import MenuCard from '../components/menuCard';
import { ROUTES } from '..';
import Comment from '../components/comment';
import { Theme } from '../styles/Theme';


function MenuRestaurantOwnerScreen({navigation,props}) {

  const onCreateDishPress = (event) => {
    console.log('On Created Dish Press');
    navigation.navigate(ROUTES.ADD_DISH_STACK)
  }

  const onDishPhotoPress = (event) => {
    console.log('On Dish Photo Press');
    navigation.navigate(ROUTES.DISH_DETAILS_OWNER_STACK);
  }
  const Item = ({ title }) => (
    <View >
    
         <MenuCard
            onPhotoPress={title.onDishPhotoPress}
            name={title.name}
            price={title.price}
            discount={title.discount}>
        </MenuCard>

    </View>
  );
  
 

   const MENU = [
    {
      title : 'Promocion',
        data: [
        
        {name : 'Camarones',
        category : 'Promocion',
        price : 4000,
        discount : 10,
        onPhotoPress : false,
        onCreateDishPress : false} 
        , 
        {
          name : 'Camarones',
          category : 'Promocion',
          price : 4000,
          discount : 10,
          onPhotoPress : false,
          onCreateDishPress : false,
      
          }
        ,
        {
          name : 'Camarones',
          category : 'Promocion',
          price : 4000,
          discount : 10,
          onPhotoPress : false,
          onCreateDishPress : false,
      
          },
          {
            name : 'Camarones',
            category : 'Promocion',
            price : 4000,
            discount : 10,
            onPhotoPress : false,
            onCreateDishPress : false,
        
            },
            {
              name : 'Camarones',
              category : 'Promocion',
              price : 4000,
              discount : 10,
              onPhotoPress : false,
              onCreateDishPress : false,
          
              },
              {
                name : 'Camarones',
                category : 'Promocion',
                price : 4000,
                discount : 10,
                onPhotoPress : false,
                onCreateDishPress : false,
            
                },
                {
                  name : 'Camarones',
                  category : 'Promocion',
                  price : 4000,
                  discount : 10,
                  onPhotoPress : false,
                  onCreateDishPress : false,
              
                  }]
        } 
      ];
      
  const onCreateMenuPressed = (event) => {
    navigation.navigate(ROUTES.DISH_CREATE)
  }

  return (
    <View style={styles.global}> 
      <View style={{alignItems:'center'}}>        
          <SectionList
            sections={MENU}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
            )} />
          <View style={styles.icon}>
            <Icon
                size={50}
                name = 'pluscircle'
                type = 'antdesign'
                onPress={onCreateMenuPressed}
                containerStyle={StyleSheet.icon}	
              >
              </Icon>
          </View>
      </View>
    </View>
      )
}

export default MenuRestaurantOwnerScreen;

const styles = StyleSheet.create({
  category : {
    color: colorPalette.Black ,
     fontSize: 18 ,marginTop :10, fontWeight: 'bold'
  },
  header :{
    fontSize: Theme.font.MEDIUM,
    color: colorPalette.Black, 
    fontWeight: 'bold', 
    marginStart :"5%",
    marginTop : "2%",
    
  },
  global : {
    alignItems:'center' , 
    height : "100%"
},
icon : {
                                 
  position: 'absolute',                                         
  bottom: "2%",                                                    
  right: "2%", 

},
});
