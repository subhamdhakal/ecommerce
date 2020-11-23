import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../Components/Header/Header';
import {useSelector} from 'react-redux';
import CartItems from '../../Components/CartItems/CartItems';
function Cart({navigation}) {
  const basket = useSelector((state) => state.basket);
  console.log(basket);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.08}}>
        <Header navigation={navigation} iconChange={true} />
      </View>
      <View style={{flex: 0.92}}>
        <ScrollView>
          {basket.map((item, index) => (
            <CartItems
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              descShort={item.descShort}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default Cart;
