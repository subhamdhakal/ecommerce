import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Ionicon from 'react-native-vector-icons/Ionicons';
function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../Assets/images/avatar.png')}
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.logoutBtn}>
          <Text style={styles.logText}>Log Out</Text>
          <Ionicon name="exit-outline" size={22} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <TouchableOpacity style={styles.items}>
          <Ionicon name="settings-outline" size={22} />
          <Text style={styles.itemText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.items}>
          <Ionicon name="settings-outline" size={22} />
          <Text style={styles.itemText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.items}>
          <Ionicon name="settings-outline" size={22} />
          <Text style={styles.itemText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.items}>
          <Ionicon name="settings-outline" size={22} />
          <Text style={styles.itemText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.items}>
          <Ionicon name="settings-outline" size={22} />
          <Text style={styles.itemText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.items}>
          <Ionicon name="settings-outline" size={22} />
          <Text style={styles.itemText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.items}>
          <Ionicon name="settings-outline" size={22} />
          <Text style={styles.itemText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Profile;
