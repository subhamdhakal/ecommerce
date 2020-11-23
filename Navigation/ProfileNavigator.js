import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../Screens/Profile/Profile';
import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();
const ProfileNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="profile_nav" component={Profile} />
  </Stack.Navigator>
);

export default ProfileNavigator;
