import { View , StyleSheet , Dimensions} from "react-native";
import { NavBar } from "../components/navBar";
import { colorPalette } from "../styles/colors";
import { AirbnbRating, Text, ThemeConsumer } from "@rneui/themed";
import I18n from "../../assets/localization/I18n";
import { Theme } from '../styles/Theme';
import { InputText } from '../components/InputText'

export default function SentCommentScreen(props){
    return (
        <View style={styles.global}>
            <Text style={styles.words}>{I18n.t('calification')}</Text>
            <View style={styles.rating}>
                <AirbnbRating 
                    defaultRating={1}
                    reviews = {[]}
                    size = {30}
                    selectedColor = {colorPalette.Orange}
                    ></AirbnbRating>
            </View>     
            <Text style={styles.words}>{I18n.t('comment')}</Text>
            <InputText 
                placeholder=""
                color={colorPalette.Cream}
                height={Dimensions.get("window").height*0.17}
                width={ Dimensions.get("window").width*0.6}
            ></InputText>
        </View>
    )
}

const styles = StyleSheet.create({
global : {
    flexDirection : 'column', 
    alignItems : 'center',
    backgroundColor : colorPalette.White,
    height : "100%"
    },
words : {
    marginTop:Dimensions.get("window").width*0.1,  
    marginBottom:"2%", 
    marginTop :"6%",
    fontSize : Theme.font.MEDIUM,
    color : colorPalette.Black,
    },
rating : {
    marginTop : -Dimensions.get("window").width*0.1
    },
  });
  