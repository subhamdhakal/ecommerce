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

function Forgot({navigation}) {
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
        <View style={styles.inputWrapper}>
          <FontAwesome name="envelope-o" size={20} style={styles.inputIcon} />
          <TextInput placeholder="Email" style={styles.inputEmail} />
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('home')}>
          <Text style={styles.btnText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Forgot;
