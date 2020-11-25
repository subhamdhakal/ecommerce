import React, {useEffect, useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {SAVE_ADDRESS} from '../../Actons/types';

function StepAddress({saveAddr}) {
  const address = useSelector((state) => state.address);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [addr1, setAddr1] = useState('');
  const [addr2, setAddr2] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [comments, setComments] = useState('');

  if (saveAddr) {
    for (let i = 0; i <= 1; i++) {
      dispatch({
        type: SAVE_ADDRESS,
        payload: {
          firstName: firstName,
          lastName: lastName,
          company: company,
          addr1: addr1,
          addr2: addr2,
          city: city,
          country: country,
          zipCode: zipCode,
          phoneNumber: phoneNumber,
          comments: comments,
        },
      });
    }
  }
  console.log(address);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Address</Text>
      <TextInput
        type="text"
        placeholder="First Name"
        style={styles.input}
        maxLength={40}
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        placeholderTextColor="rgb(46, 64, 60)"
      />
      <TextInput
        type="text"
        placeholder="Last Name"
        style={styles.input}
        maxLength={40}
        placeholderTextColor="rgb(46, 64, 60)"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        type="text"
        placeholder="Company Name  (optional)"
        style={styles.input}
        maxLength={40}
        placeholderTextColor="rgb(46, 64, 60)"
        value={company}
        onChangeText={(text) => setCompany(text)}
      />
      <TextInput
        type="text"
        placeholder="House Number and Street Name"
        style={styles.input}
        maxLength={40}
        placeholderTextColor="rgb(46, 64, 60)"
        value={addr1}
        onChangeText={(text) => setAddr1(text)}
      />
      <TextInput
        type="text"
        placeholder="Apartment and Room Number"
        style={styles.input}
        maxLength={40}
        placeholderTextColor="rgb(46, 64, 60)"
        value={addr2}
        onChangeText={(text) => setAddr2(text)}
      />
      <TextInput
        type="text"
        placeholder="City or Province"
        style={styles.input}
        maxLength={40}
        placeholderTextColor="rgb(46, 64, 60)"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <TextInput
        type="text"
        placeholder="Country"
        style={styles.input}
        maxLength={40}
        placeholderTextColor="rgb(46, 64, 60)"
        value={country}
        onChangeText={(text) => setCountry(text)}
      />
      <TextInput
        type="text"
        placeholder="Zip/Postal Code"
        style={styles.input}
        maxLength={6}
        placeholderTextColor="rgb(46, 64, 60)"
        value={zipCode}
        onChangeText={(text) => setZipCode(text)}
      />
      <TextInput
        type="text"
        placeholder="Phone number"
        style={styles.input}
        maxLength={40}
        placeholderTextColor="rgb(46, 64, 60)"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TextInput
        type="text"
        placeholder="Comments"
        style={styles.input}
        multiline={true}
        placeholderTextColor="rgb(46, 64, 60)"
        value={comments}
        onChangeText={(text) => setComments(text)}
      />
    </View>
  );
}

export default StepAddress;
