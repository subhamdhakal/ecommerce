import React from 'react';
import AppNavigator from './Navigation/AppNavigator';
import store from './Store/Store';
import {Provider} from 'react-redux';
import Payment from './Screens/Payment/Payment';
import {StatusBar} from 'react-native';
import colors from './src/assets/colors/colors';

function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.primary} />
      <AppNavigator />
      {/* <Payment /> */}
    </Provider>
  );
}

export default App;
