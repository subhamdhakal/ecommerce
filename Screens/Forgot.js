import React from 'react';
import {View, Text} from 'react-native';
function Forgot({navigation}) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text onPress={() => navigation.navigate('on')}>Forgot</Text>

      <Text onPress={() => navigation.goBack()}>Back</Text>
    </View>
  );
}

export default Forgot;
