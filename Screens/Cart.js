import React from 'react';
import {View, Text} from 'react-native';
import Header from '../Components/Header/Header';
function Cart({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.08}}>
        <Header navigation={navigation} iconChange={true} />
      </View>
      <View
        style={{flex: 0.92, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 18, fontWeight: '600', color: 'rgb(50,50,50)'}}>
          No items in your cart
        </Text>
      </View>
    </View>
  );
}

export default Cart;
