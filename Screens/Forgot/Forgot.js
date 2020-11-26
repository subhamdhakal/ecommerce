import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Platform,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';

function Forgot({navigation}) {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [sendPressed, setSendPressed] = useState(false);
  const [done, setDone] = useState(false);

  const forgotPassword = (Email) => {
    auth()
      .sendPasswordResetEmail(Email)
      .then(() => {
        alert('Please check your email...');
        setDone(!done);
      })
      .catch((e) => {
        if (e) {
          setErrorMessage(e.message);
        }
      });
  };

  const renderDone = () => {
    if (done == true) {
      return (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('login')}>
          <Text style={styles.btnText}>Done</Text>
        </TouchableOpacity>
      );
    }
  };
  const renderError = () => {
    if (errorMessage) {
      return <Text style={styles.errorMessage}>{errorMessage}</Text>;
    }
  };

  const renderSendButton = () => {
    if (errorMessage || sendPressed == false) {
      return (
        <>
          <View style={styles.inputWrapper}>
            <FontAwesome
              name="envelope"
              style={styles.inputIcon}
              size={18}
              placeholderTextColor="rgb(80,80,80)"
            />
            <TextInput
              placeholder="Email"
              required
              style={styles.input}
              placeholderTextColor="rgb(80,80,80)"
              onChangeText={(email) => setEmail(email)}
              value={email}
            />
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              forgotPassword(email), setSendPressed(!sendPressed);
            }}>
            <Text style={styles.btnText}>Send</Text>
          </TouchableOpacity>
        </>
      );
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'android' ? null : 'padding'}
      style={styles.container}
      keyboardVerticalOffset={0}>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.topNav}
          onPress={() => navigation.goBack()}>
          <Ionicon name="arrow-back" size={34} style={styles.icon} />
        </TouchableOpacity>
        <Image
          source={require('../../Assets/images/logo1.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Reset Password</Text>

        <Text style={styles.linkText}>
          Please enter your email to recieve a link to reset your password.
        </Text>
        {renderError()}
        {renderSendButton()}
        {renderDone()}
      </View>
      {/* 
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <FontAwesome name="envelope" size={20} style={styles.inputIcon} />
          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor="rgb(80,80,80)"
          />
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('home')}>
          <Text style={styles.btnText}>Send</Text>
        </TouchableOpacity>
      </View> */}
    </KeyboardAvoidingView>
  );
}

export default Forgot;
