import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Shipment = () => {
  const [isSelected, setSelection] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={() => setSelection(!isSelected)}
          style={styles.checkbox}
          onAnimationType="bounce"
        />

        <Text style={styles.label}>Standart Shipment</Text>
      </View>
      <View style={{marginLeft: 70}}>
        <Text style={{fontSize: 14, color: 'rgb(60, 60, 60)'}}>
          Delivery fee : $5
        </Text>
        <Text
          style={{fontSize: 14, marginBottom: 30, color: 'rgb(60, 60, 60)'}}>
          Delivery time : 2-4 days
        </Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={!isSelected}
          onValueChange={() => setSelection(!isSelected)}
          style={styles.checkbox}
          onAnimationType="fade"
        />
        <Text style={styles.label}>Express Shipment</Text>
      </View>
      <View style={{marginLeft: 135}}>
        <Text style={{fontSize: 14, color: 'rgb(60, 60, 60)'}}>
          Delivery fee : $10
        </Text>
        <Text
          style={{fontSize: 14, marginBottom: 30, color: 'rgb(60, 60, 60)'}}>
          Same day delivery. Cut off at 3pm.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    //     backgroundColor: 'red',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default Shipment;
