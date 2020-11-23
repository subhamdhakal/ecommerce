import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

function MP({navigation}) {
  return (
    <View style={styles.firstRow}>
      <Text style={styles.first_text}>MEAT & POULTRY</Text>
      <View style={styles.first_img}>
        <TouchableOpacity>
          <Image
            source={require('../../Assets/images/meat.jpg')}
            style={styles.first_images}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require('../../Assets/images/mp2.jpg')}
            style={styles.first_images}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require('../../Assets/images/mp.jpg')}
            style={styles.first_images}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>BEEF</Text>
        <Text style={{marginLeft: 10}}>LAMB</Text>
        <Text>CHICKEN</Text>
      </View>
    </View>
  );
}

export default MP;
