import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AddDishScreen from './ui/screens/AddDishScreen';



export default function App() {
  return (
    <View style={{justifyContent:'center'}}>
      <AddDishScreen></AddDishScreen>
    </View>
  );
}

