import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../Screens/Login/Login';
import SignUp from '../Screens/SignUp/SignUp';
import Forgot from '../Screens/Forgot/Forgot';
const Stack = createStackNavigator();

const AuthNavigation = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="login" component={Login} />
    <Stack.Screen name="signup" component={SignUp} />
    <Stack.Screen name="forgot" component={Forgot} />
  </Stack.Navigator>
);

export default AuthNavigation;
