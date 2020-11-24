import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';

function StepAddress() {
  return (
    <View style={styles.container}>
      <TextInput
        type="text"
        placeholder="First Name"
        style={styles.input}
        maxLength={40}
        placeholderTextColor="rgb(46, 64, 60)"
      />
      <TextInput
        type="text"
        placeholder="Last Name"
        style={styles.input}
        maxLength={40}
        placeholderTextColor="rgb(46, 64, 60)"
      />
      <TextInput
        type="text"
        placeholder="Company Name  (optional)"
        style={styles.input}
        maxLength={40}
        placeholderTextColor="rgb(46, 64, 60)"
      />
      <TextInput
        type="text"
        placeholder="House Number and Street Name"
        style={styles.input}
        maxLength={40}
        placeholderTextColor="rgb(46, 64, 60)"
      />
      <TextInput
        type="text"
        placeholder="Apartment and Room Number"
        style={styles.input}
        maxLength={40}
        placeholderTextColor="rgb(46, 64, 60)"
      />
      <TextInput
        type="text"
        placeholder="City or Province"
        style={styles.input}
        maxLength={40}
        placeholderTextColor="rgb(46, 64, 60)"
      />
      <TextInput
        type="text"
        placeholder="Country"
        style={styles.input}
        maxLength={40}
        placeholderTextColor="rgb(46, 64, 60)"
      />
      <TextInput
        type="text"
        placeholder="Zip/Postal Code"
        style={styles.input}
        maxLength={6}
        placeholderTextColor="rgb(46, 64, 60)"
      />
      <TextInput
        type="text"
        placeholder="Phone number"
        style={styles.input}
        maxLength={40}
        placeholderTextColor="rgb(46, 64, 60)"
      />
      <TextInput
        type="text"
        placeholder="Comments"
        style={styles.input}
        multiline={true}
        placeholderTextColor="rgb(46, 64, 60)"
      />
    </View>
  );
}

export default StepAddress;
