import React from 'react';
import AppNavigator from './Navigation/AppNavigator';
import store from './Store/Store';
import {Provider} from 'react-redux';
import SelectedItem from './Screens/SelectedItem/SelectedItem';

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
      {/* <SelectedItem /> */}
    </Provider>
  );
}

export default App;
