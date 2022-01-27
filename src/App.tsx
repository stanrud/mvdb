import React from 'react';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import MainScreen from './containers/MainScreen/MainScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <MainScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
