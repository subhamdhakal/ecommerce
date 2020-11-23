import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';

import BestSelling from '../Components/BestSelling/BestSelling';
import Dairy from '../Components/Dairy/Dairy';
import Cans from '../Components/Cans/Cans';
import Header from '../Components/Header/Header';
import MP from '../Components/MP/MP';
import TopBanner from '../Components/TopBanner/TopBanner';

function Home({navigation}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'android' ? null : 'padding'}
      style={styles.container}>
      <View style={{flex: 0.08}}>
        <Header navigation={navigation} />
      </View>

      <View style={{flex: 0.92}}>
        <ScrollView>
          <View style={{height: 200}}>
            <TopBanner navigation={navigation} />
          </View>
          <View style={{height: 170}}>
            <MP navigation={navigation} />
          </View>
          <View style={styles.category}>
            <BestSelling navigation={navigation} />
          </View>

          <View style={styles.category}>
            <Dairy navigation={navigation} />
          </View>
          <View style={styles.category}>
            <Cans navigation={navigation} />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  category: {
    height: 330,
    marginBottom: 20,
  },
});
