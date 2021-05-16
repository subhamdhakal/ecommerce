import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

function MP({navigation}) {
  return (
    <View style={styles.firstRow}>
      <View style={styles.first_img}>
        <TouchableOpacity style={{width: '10%'}}>
          <Image source={require('../../Assets/icons/Home-appliances.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../Assets/icons/Smartphone.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../Assets/icons/fitbit.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../Assets/icons/tv.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../Assets/icons/audio-accessories.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MP;
