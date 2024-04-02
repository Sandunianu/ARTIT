import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Registration from './src/registration';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

// Define custom theme
const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7f0404', // Corrected color value
  },
};


export default function App() {
  return (
    <PaperProvider theme={customTheme}>
      <View style={styles.container}>
        <Registration/>
      
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'top',
    justifyContent: 'top',
  },
});