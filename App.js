import React from 'react';
import AppNavigator from './Navigation/AppNavigator';
import store from './Store/Store';
import {Provider} from 'react-redux';
import Address from './Screens/Address/Address';

function App() {
  return (
    <Provider store={store}>
      {/* <AppNavigator /> */}
      <Address />
    </Provider>
  );
}

export default App;
