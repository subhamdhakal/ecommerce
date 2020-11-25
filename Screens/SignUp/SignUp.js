import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {ADD_USER} from '../../Actons/types';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';

function SignUp({navigation}) {
  const {width, height} = Dimensions.get('screen');
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handleSignUp = () => {
    if (
      (username == '' || null) &&
      (email == '' || null) &&
      (password == '' || null)
    ) {
      setErrorMessage('Please type your credientials.');
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          dispatch({
            type: ADD_USER,
            payload: {
              username: username,
              email: email,
            },
          });
        })
        .then(() => navigation.navigate('home'))
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            setErrorMessage('That email address is already in use!');
          } else if (error.code === 'auth/invalid-email') {
            setErrorMessage('That email address is invalid!');
          } else if (error.code == 'auth/weak-password') {
            setErrorMessage(
              'Weak Password. Password should be at least 6 characters.',
            );
          } else {
            setErrorMessage(error);
          }
        });
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'android' ? null : 'padding'}
      style={styles.container}
      keyboardVerticalOffset={60}>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.topNav}
          onPress={() => navigation.goBack()}>
          <Ionicon
            username="arrow-back"
            size={34}
            style={styles.icon}
            color="black"
          />
        </TouchableOpacity>
        <Image
          source={require('../../Assets/images/logo1.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <View style={styles.inputWrapper}>
          <Ionicon
            username="person-outline"
            size={20}
            style={styles.inputIcon}
          />

          <TextInput
            placeholder="Username"
            style={styles.input}
            placeholderTextColor="rgb(80,80,80)"
          />
        </View>

        <View style={styles.inputWrapper}>
          <FontAwesome
            username="envelope-o"
            size={20}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor="rgb(80,80,80)"
          />
        </View>

        <View style={styles.inputWrapper}>
          <FontAwesome username="key" size={20} style={styles.inputIcon} />
          <TextInput
            placeholder="Password"
            style={styles.input}
            placeholderTextColor="rgb(80,80,80)"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.signContainer}>
          <Text>Already have accont ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={styles.loginText}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default SignUp;
