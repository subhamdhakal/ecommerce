import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import OrderDetails from '../../Components/OrderDetails/OrderDetails';
import Shipment from '../../Components/Shipment/Shipment';
import StepAddress from '../../Components/StepAddress/StepAddress';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {SAVE_ADDRESS} from '../../Actons/types';

function Payment({navigation, route}) {
  const dispatch = useDispatch();
  const [isSelected, setSelection] = useState(false);
  const [deliveryFee, setDeliveryFee] = useState(null);
  const [shipment, setShipment] = useState(true);
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
  const [submit, setSubmit] = useState(false);

  const onNextButton = () => {
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
  };

  if (shipment) {
    setDeliveryFee(5);
  } else {
    setDeliveryFee(10);
  }

  console.log(deliveryFee);
  return (
    <View>
      <ScrollView>
        <ProgressSteps>
          <ProgressStep checkLabel="Address" onNext={onNextButton}>
            <View style={styles.addressContainer}>
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
          </ProgressStep>

          <ProgressStep
            checkLabel="Shipment Method"
            onNext={() => setSaveShipment(true)}>
            <View style={styles.checkboxMainContainer}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={shipment}
                  onValueChange={() => setShipment(!shipment)}
                  style={styles.checkbox}
                />
                <Text style={styles.checkLabel}>Standart Shipment</Text>
              </View>
              <View style={styles.checkboxDetailsContainer}>
                <Text style={styles.checkboxText}>Delivery fee : $5</Text>
                <Text style={styles.checkboxText}>
                  Delivery time : 2-4 days
                </Text>
              </View>

              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={!shipment}
                  onValueChange={() => setShipment(!shipment)}
                  style={styles.checkbox}
                />
                <Text style={styles.checkLabel}>Express Shipment</Text>
              </View>
              <View style={styles.checkboxDetailsContainer}>
                <Text style={styles.checkboxText}>Delivery fee : $10</Text>
                <Text style={styles.checkboxText}>
                  Same day delivery. Cut off at 3pm.
                </Text>
              </View>
            </View>
          </ProgressStep>
          <ProgressStep checkLabel="Order Details">
            <OrderDetails />
          </ProgressStep>
          <ProgressStep checkLabel="Payment" on>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={() => setSelection(!isSelected)}
                style={styles.checkbox}
                onAnimationType="bounce"
              />
              <Text>Direct Wire Transfer</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </ScrollView>
    </View>
  );
}

export default Payment;
