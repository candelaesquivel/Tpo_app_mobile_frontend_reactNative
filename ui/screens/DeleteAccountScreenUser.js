import { View , StyleSheet , Dimensions} from "react-native";
import { NavBar } from "../components/navBar";
import { colorPalette } from "../styles/colors";
import { Text } from "@rneui/themed";
import { MyButton } from "../components/button";
import { Icon } from "@rneui/themed";
import { InputText } from "../components/InputText";
import I18n from "../../assets/localization/I18n";
import { useEffect } from "react";
import { Theme } from "../styles/Theme";
import { ScrollView } from "react-native-gesture-handler";

function DeleteAccountScreenUser({navigation, props}){

    useEffect( () => {
        navigation.setOptions({
            title : 'Eliminar Cuenta'
        })
    }, [navigation])

    return (
        <ScrollView >
            <View  style={styles.global}>
                <View style={styles.containerWhite}>
                    <Icon 
                    name = 'admin-panel-settings' 
                    size={96}
                     color={colorPalette.Orange}
                     marginTop={20}
                     ></Icon>
                </View>
            
                <Text
                    h4
                    h4Style={{textAlign:'center'}}
                    style={styles.message}>
                    {I18n.t('messageDeleteAccount')}
                </Text>
                
                <View style = {styles.container}>
                    <View style={styles.containerTwo}>
                        <InputText
                            placeholder = {I18n.t('passInput')}
                            placeholderTextColor ={colorPalette.White}
                            color = {colorPalette.Orange}
                            
                            >
                        </InputText>
                        <InputText 
                            placeholder ={I18n.t('validPassInput')}
                            placeholderTextColor ={colorPalette.White}
                            color = {colorPalette.Orange}
                            secureTextEntry = {true}
                        
                        ></InputText>
                    </View>
                
                </View>
                <View style={styles.button}>
                    <MyButton
                    title = {I18n.t('delete')}
                    width={ Dimensions.get("window").width*0.6}
                    height={Dimensions.get("window").height*0.07}
                    ></MyButton>
                </View>
                
            </View>
        </ScrollView>
       
    )
}

export default DeleteAccountScreenUser;

const styles = StyleSheet.create({
    global :{
        flexDirection : 'column', 
        alignItems : 'center', 
        backgroundColor : colorPalette.White,
        height :  Dimensions.get("window").height,
        width :  Dimensions.get("window").width
       },
    containerWhite : {
    width : '100%',
    height : '15%',
    backgroundColor : colorPalette.White,
    marginBottom : "5%",
    marginTop : "10%"
    },
    message : {
    marginBottom : "5%",
     marginRight : 10
    },
    container : {
        justifyContent : 'space-evenly',
        height : '20%',
         width : '90%', 
        backgroundColor : colorPalette.LightOrange, 
        borderRadius : Theme.sizes.ROUNDED,
        
    },
    containerTwo : { 
        flexDirection : "column",
          marginTop : "7%"
        },
    button : {
        flexDirection :"column",
        justifyContent : "center",
        marginTop : "5%",
        backgroundColor : colorPalette.White,
       
      },
});

