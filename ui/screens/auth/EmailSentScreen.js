import { View } from "react-native";
import { NavBar } from "../../components/navBar";
import { colorPalette } from "../../styles/colors";
import { Text } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import I18n from "../../../assets/localization/I18n";
import { CONSTANTS } from "../../../config";

export function EmailSentScreen(props){
    return (
        <View style={styles.global}>
            <View style={styles.globalTwo}></View>
            <Icon 
            name = 'outgoing-mail'
             size={96}
              color={colorPalette.Orange}
            ></Icon>
            <Text
                h4
                h4Style={{textAlign:'center'}}
                style={{marginBottom : 10}}
            >
             {CONSTANTS.SCREEN_TEXTS.EMAIL_SENT_MSG}  
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    global : {
        flexDirection : 'column',
         alignItems : 'center',
          marginTop : 23
        },
    globalTwo : {
        width : '100%',
         height : '35%',
          backgroundColor: colorPalette.White
        },

  });