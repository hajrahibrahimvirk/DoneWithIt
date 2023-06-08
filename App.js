import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home'
import ViewScreen from './components/viewScreen';

export default function App() {
  return (

    // <Home/>
    <ViewScreen/>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
