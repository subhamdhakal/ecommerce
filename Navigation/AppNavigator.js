import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import ProfileNavigator from './ProfileNavigator';
import DrawerNavigator from './DrawerNavigator';
import Cart from '../Screens/Cart/Cart';
import MyList from '../Screens/MyList/MyList';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'home') {
              (iconName = focused ? 'home' : 'home-outline'), (size = 28);
            } else if (route.name === 'cart') {
              iconName = focused ? 'cart' : 'cart-outline';
              size = 32;
            } else if (route.name === 'mylist') {
              iconName = focused ? 'heart' : 'heart-outline';
              size = 30;
            } else if (route.name === 'profile') {
              iconName = focused ? 'md-person' : 'md-person-outline';
              size = 30;
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'black',
          borderColor: 'black',
          showLabel: false,
          style: {
            backgroundColor: 'white',
            height: 60,
            borderTopWidth: 1,
          },
          keyboardHidesTabBar: true,
        }}>
        <Tab.Screen name="home" component={DrawerNavigator} />
        <Tab.Screen name="cart" component={Cart} />
        <Tab.Screen name="mylist" component={MyList} />
        <Tab.Screen name="profile" component={ProfileNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
