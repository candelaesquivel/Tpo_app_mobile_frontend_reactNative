import { Image } from "@rneui/themed"
import { Text } from "@rneui/themed"
import { View } from "react-native"
import { colorPalette } from "../styles/colors"

export function Logo(props) {
    return (
        <View style={{flexDirection : 'column', alignItems :"center"}}>
            <Image 
                source={require('../assets/logo.png')}
                style = {{
                    width : 185,
                    height : 162,
                    alignSelf : 'stretch'
                }}
            >
            </Image>
            <Text h2 h2Style={{color : colorPalette.Black}}>
            {I18n.t('appName')}
            </Text>
        </View>
        )
}