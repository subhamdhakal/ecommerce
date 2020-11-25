import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import {getBasketTotal} from '../../Reducer/Reducer';
function OrderDetails({}) {
  let arr = [];
  arr.push(id, price, qty, name);
  const basket = useSelector((state) => state.basket);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Details</Text>
      {basket.map((item) => (
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Text style={styles.itemName}>{item.name} x</Text>
          <Text style={styles.itemName}>{item.qty} : </Text>
          <Text style={styles.itemPrice}>${item.price}</Text>
        </View>
      ))}
      <Text style={[styles.itemName, {marginVertical: 5}]}>
        Tax : <Text style={styles.itemPrice}>0</Text>
      </Text>
      <Text style={[styles.itemName, {marginVertical: 5}]}>
        Delivery Fee : <Text style={styles.itemPrice}>$5</Text>
      </Text>
      <View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: 'black',
          marginTop: 20,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          color: 'rgb(46, 64, 60)',
          fontWeight: '700',
          marginVertical: 15,
        }}>
        Total : <Text style={{color: 'black'}}>${getBasketTotal(basket)}</Text>
      </Text>
    </View>
  );
}

export default OrderDetails;
