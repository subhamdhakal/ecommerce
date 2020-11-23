import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Platform,
} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';

function SignUp({navigation}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'android' ? null : 'padding'}
      style={styles.container}
      keyboardVerticalOffset={60}>
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
        <View style={styles.inputWrapper}>
          <Ionicon name="person-outline" size={20} style={styles.inputIcon} />
          <TextInput placeholder="Username" style={styles.inputPass} />
        </View>

        <View style={styles.inputWrapper}>
          <FontAwesome name="envelope-o" size={20} style={styles.inputIcon} />
          <TextInput placeholder="Email" style={styles.inputEmail} />
        </View>

        <View style={styles.inputWrapper}>
          <FontAwesome name="key" size={20} style={styles.inputIcon} />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.inputPass}
          />
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('home')}>
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
