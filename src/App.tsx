import React from 'react';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store';
import { Provider } from 'react-redux';
import MainScreen from './containers/MainScreen/MainScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const { persistor, store } = configureStore();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaView
        style={{
          ...styles.container,
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <MainScreen />
      </SafeAreaView>
    </PersistGate>
  </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
