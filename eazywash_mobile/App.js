import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {persistor, store} from './src/lib/store.config';
import {PersistGate} from 'redux-persist/integration/react';
import MainNavigator from './src/navigators/MainNavigator';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainNavigator/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
