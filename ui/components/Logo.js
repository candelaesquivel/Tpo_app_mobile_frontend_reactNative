import { Text } from "@rneui/themed"
import { View } from "react-native"
import { colorPalette } from "../styles/colors"
import Images from '../../assets/images/index';
import I18n from "../../assets/localization/I18n";
import { CONSTANTS } from "../../config";

export function Logo({width = 185, height = 162, props}) {
    return (
        <View style={{flexDirection : 'column', alignItems :'center'}}>
            <Images.logo width={width} height={height}></Images.logo>
            <Text h2 h2Style={{color : colorPalette.Black}}>
            {CONSTANTS.SCREEN_TEXTS.APP_NAME}
            </Text>
        </View>
        )
}
