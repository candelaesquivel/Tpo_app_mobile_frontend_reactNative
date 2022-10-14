import { Text } from "@rneui/themed"
import { View } from "react-native"
import { colorPalette } from "../styles/colors"
import Images from '../../assets/images/index';
import I18n from "../../assets/localization/I18n";

export function Logo(props) {
    return (
        <View style={{flexDirection : 'column', alignItems :"center"}}>
            <Images.logo width={185} height={162}></Images.logo>
            <Text h2 h2Style={{color : colorPalette.Black}}>
            {I18n.t('appName')}
            </Text>
        </View>
        )
}
