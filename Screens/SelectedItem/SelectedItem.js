import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Header from '../../Components/Header/Header';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {
  ADD_TO_BASKET,
  ADD_TO_SAVED,
  REMOVE_FROM_SAVED,
  SAVED_NOTIFIER_REMOVE,
} from '../../Actons/types';

function SelectedItem({navigation, route}) {
  const dispatch = useDispatch();
  const saved = useSelector((state) => state.saved);

  const {
    id,
    image,
    descShort,
    price,
    qty,
    name,
    descLong,
    rating,
  } = route.params;

  const [heart, setHeart] = useState(true);

  const addToSaved = () => {
    if (heart) {
      dispatch({
        type: ADD_TO_SAVED,
        itemData: {
          id: id,
          image: image,
          name: name,
          descShort: descShort,
          price: price,
          qty: qty,
          descLong: descLong,
          rating: rating,
        },
      });
    } else {
      // dispatch({type: REMOVE_FROM_SAVED, id: id});
      // dispatch({type: SAVED_NOTIFIER_REMOVE});
    }
    setHeart(!heart);
  };
  const addToBasket = () => {
    dispatch({
      type: ADD_TO_BASKET,
      itemData: {
        id: id,
        image: image,
        name: name,
        descShort: descShort,
        price: price,
        qty: qty,
        descLong: descLong,
        rating: rating,
      },
    });
    navigation.navigate('cart');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'android' ? null : 'padding'}
      style={styles.container}>
      <View style={styles.header}>
        <Header iconChange={true} navigation={navigation} />
      </View>
      <View style={styles.body}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 40}}>
          <Image source={image} style={styles.image} />

          <View style={styles.details}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.name}>{name}</Text>
              <TouchableOpacity onPress={addToSaved}>
                <Ionicon
                  name="heart"
                  size={34}
                  style={{
                    marginTop: 5,
                    marginRight: 10,
                  }}
                  color="green"
                />
              </TouchableOpacity>
            </View>

            <Text>{descShort}</Text>

            <View style={styles.qtyContainer}>
              <Text style={styles.price}>${price}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text>⭐</Text>
                <Text>⭐</Text>
                <Text>⭐</Text>
              </View>
            </View>

            <Text style={styles.desc}>Description</Text>
            <Text>{descLong}</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn} onPress={addToBasket}>
          <Text style={{color: 'white', fontSize: 20}}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btns}>
          <Text style={{color: 'white', fontSize: 20}}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default SelectedItem;
