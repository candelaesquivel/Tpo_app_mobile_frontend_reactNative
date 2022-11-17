import { Icon } from "@rneui/base"
import { View } from "react-native"
import EmptyScreenMessage from "../../components/EmptyScreenMessage";
import { RestaurantFlatListOwner } from "../../components/RestaurantFlatListOwner";
import { StyleSheet } from "react-native";
import { CONSTANTS } from "../../../config";

export const HomeLandingOwnerUI = ({
restaurants = [],
onCreateRestaurantHandler,
props
}) =>
{
  return (
    <View>
      <View style={styles.global}>
          {restaurants.length === 0 && 
          <EmptyScreenMessage
          message={CONSTANTS.SCREEN_TEXTS.NOT_RESTAURANTS}
          ></EmptyScreenMessage>
          }
          {
            restaurants.length !== 0 && 
            <RestaurantFlatListOwner restaurants={restaurants}></RestaurantFlatListOwner>
          }
      </View>

      <View style={styles.icon}>
        <Icon
          size={50}
          name = 'pluscircle'
          type = 'antdesign'
          onPress={onCreateRestaurantHandler}
          containerStyle={StyleSheet.icon}	
        >
        </Icon>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
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