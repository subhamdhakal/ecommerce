import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

function Header({navigation, iconChange}) {
  return (
    <View style={styles.header}>
      <View style={styles.leftHeader}>
        <Ionicon
          name={iconChange ? 'arrow-back' : 'menu'}
          size={30}
          onPress={() => {
            iconChange ? navigation.goBack() : navigation.openDrawer();
          }}
          style={styles.icon}
        />
        {iconChange ? null : (
          <Image
            source={require('../../Assets/images/logo.png')}
            style={styles.logo}
          />
        )}
      </View>
      <View style={styles.rightHeader}>
        <TouchableOpacity>
          <Ionicon name="search" size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicon name="heart" size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicon name="cart" size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;
