import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Header} from '@rneui/themed';
import Comment from './ui/components/comment';
import { SearchBar } from '@rneui/base';


export default function App() {
  return (
    <View >
      <View height={100}></View>
     <SearchBar></SearchBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
});
