import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

function MP({navigation}) {
  return (
    <View style={styles.firstRow}>
      <View style={styles.first_img}>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image source={require('../../Assets/icons/Home-appliances.png')} />
          <Text style={{fontSize: 9, margin: 2}}>Appliances</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image source={require('../../Assets/icons/Smartphone.png')} />
          <Text style={{fontSize: 9, margin: 2}}>Smartphone</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image source={require('../../Assets/icons/fitbit.png')} />
          <Text style={{fontSize: 9, margin: 2}}>Fitbit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image source={require('../../Assets/icons/tv.png')} />
          <Text style={{fontSize: 9, margin: 2}}>TV</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image source={require('../../Assets/icons/audio-accessories.png')} />
          <Text style={{fontSize: 9, margin: 2}}>Audio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MP;
