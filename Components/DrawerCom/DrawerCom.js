import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Ionicon from 'react-native-vector-icons/Ionicons';

function DrawerCom({navigation, props}) {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../Assets/images/avatar.jpg')}
        />

        <View style={styles.textContainer}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('signup')}>
            Guest |{' '}
          </Text>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('login')}>
            Sign In
          </Text>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Home"
            onPress={() => navigation.navigate('home')}
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={{width: '70%', marginLeft: 10}}
          />
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Meat, Poultry & Seafood "
            onPress={() => navigation.navigate('home')}
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={{width: '90%', marginLeft: 10}}
          />
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Rice Flour, Pulses & Grains"
            onPress={() => navigation.navigate('home')}
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={{width: '90%', marginLeft: 10}}
          />
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Fruits & Vegetables"
            onPress={() => navigation.navigate('home')}
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={{width: '70%', marginLeft: 10}}
          />
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Bread, Noodle & Pasta"
            onPress={() => navigation.navigate('home')}
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={{width: '70%', marginLeft: 10}}
          />
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Dairy"
            onPress={() => navigation.navigate('home')}
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={{width: '70%', marginLeft: 10}}
          />
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Cans & Jars"
            onPress={() => navigation.navigate('home')}
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={{width: '70%', marginLeft: 10}}
          />
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Drinks & Beverages"
            onPress={() => navigation.navigate('home')}
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={{width: '70%', marginLeft: 10}}
          />
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Sweets & Snacks"
            onPress={() => navigation.navigate('home')}
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={{width: '70%', marginLeft: 10}}
          />
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Spices & Packets"
            onPress={() => navigation.navigate('home')}
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={{width: '70%', marginLeft: 10}}
          />
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Frozen Foods"
            onPress={() => navigation.navigate('home')}
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={{width: '70%', marginLeft: 10}}
          />
        </View>
      </DrawerContentScrollView>
    </>
  );
}

export default DrawerCom;
