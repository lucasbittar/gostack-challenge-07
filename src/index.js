import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import './config/ReactotronConfig';

import store from './store';

import Routes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
