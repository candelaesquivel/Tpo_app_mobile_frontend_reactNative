import {View} from 'react-native';
import {Logo} from '../ui/components/Logo';
import {Icon} from '@rneui/base';
import {Text} from 'react-native';

function DrawerHeader({userName = 'Candela', props}) {
  return (
    <View style={{height: 150, alignItems: 'center'}}>
      <Logo width={60} height={60} />
      <Icon name="account-circle" size={24} />
      <Text>{userName}</Text>
    </View>
  );
}

export default DrawerHeader;
