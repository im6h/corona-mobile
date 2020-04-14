/**
 * @author: tjjone98
 * Corona Mobile App by React-native
 */

import React from 'react';
import {View, StatusBar} from 'react-native';
import Containers from './src/Containers/Containers';
import {Provider} from 'mobx-react';
import store from './src/Stores';
const App = () => {
  return (
    <Provider {...store}>
      <StatusBar barStyle="light-content" />

      <View style={{flex: 1}}>
        <Containers />
      </View>
    </Provider>
  );
};

export default App;
