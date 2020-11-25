import React from 'react';
import AppNavigator from './Navigation/AppNavigator';
import store from './Store/Store';
import {Provider} from 'react-redux';
import Payment from './Screens/Payment/Payment';

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
      {/* <Payment /> */}
    </Provider>
  );
}

export default App;
