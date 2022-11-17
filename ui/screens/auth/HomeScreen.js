
import { ROUTES } from '../..';
import { HomeScreenUI } from './HomeScreenUI';

function HomeScreen({navigation, props}){

    const onUserBtnTouch = (e) => {
        navigation.navigate(ROUTES.LOGIN_NORMAL_USER)
    }
    
    const onRestaurantOwnerTouch = (e) => {
        navigation.navigate(ROUTES.LOGIN_OWNER);
    }

    return (
        <HomeScreenUI
          onUserBtnHandler={onUserBtnTouch}
          onOwnerBtnHandler={onRestaurantOwnerTouch}
        >
        </HomeScreenUI>
    )
}

export default HomeScreen;