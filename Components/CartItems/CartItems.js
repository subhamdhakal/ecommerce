import React, {useState} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

function CartItems({name, price, image, descShort, id}) {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const arr = [];
  const {duplicate, setDuplicate} = useState(false);
  basket.map((item) => {
    arr.push(item.id);
  });
  if (arr.includes(id)) {
    setDuplicate(!duplicate);
  }
  return (
    <ScrollView style={(styles.container, id)}>
      {duplicate == false ? (
        <View style={styles.view}>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Image source={image} style={styles.image} />
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.price}>{price}</Text>
              <Text style={styles.desc}>{descShort}</Text>
            </View>
          </TouchableOpacity>
          <View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.qBtn}>
                <Ionicon name="remove" size={28} />
              </TouchableOpacity>
              <Text style={{fontSize: 20, fontWeight: '700'}}>1</Text>
              <TouchableOpacity style={styles.qBtn}>
                <Ionicon name="add-outline" size={28} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgb(23, 23, 23)',
                paddingVertical: 5,
                paddingHorizontal: 8,
                marginTop: 20,
                borderRadius: 7,
              }}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
                Remove
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}{' '}
    </ScrollView>
  );
}

export default CartItems;
