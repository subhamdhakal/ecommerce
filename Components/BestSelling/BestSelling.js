import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_TO_BASKET} from '../../Actons/types';

function BestSelling({navigation}) {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  const DATA = [
    {
      id: '2',
      image: require('../../Assets/images/best5.jpg'),
      name: 'Olive Oil',
      descShort: '1 pack - 1kg',
      descLong:
        'Paprika is a ground spice made from dried red fruits of sweeter varieties of the plant Capsicum annuum. It is traditionally made from Capsicum annuum varietals in the Longum group',
      price: 10,
      qty: 1,
      rating: 5,
    },
    {
      id: '3',
      image: require('../../Assets/images/best2.png'),
      name: 'Olive Oil Small',
      descShort: 'Italian  - 700gr',
      descLong:
        'Paprika is a ground spice made from dried red fruits of sweeter varieties of the plant Capsicum annuum. It is traditionally made from Capsicum annuum varietals in the Longum group',
      price: 20,
      qty: 1,
      rating: 4,
    },
    {
      id: '4',
      image: require('../../Assets/images/best4.png'),
      name: 'Olive Oil Large',
      descShort: 'Extra large-1.3kg',
      descLong:
        'Paprika is a ground spice made from dried red fruits of sweeter varieties of the plant Capsicum annuum. It is traditionally made from Capsicum annuum varietals in the Longum group',
      price: 5,
      qty: 1,
      rating: 3,
    },
  ];
  let Arr = [];
  basket.map((item) => {
    Arr.push(item.id);
  });
  console.log(Arr);
  const renderItem = ({item}) => {
    const addToBasket = () => {
      if (!Arr.includes(item.id)) {
        dispatch({
          type: ADD_TO_BASKET,
          itemData: {
            id: item.id,
            image: item.image,
            name: item.name,
            descShort: item.descShort,
            price: item.price,
            qty: item.qty,
            descLong: item.descLong,
            rating: item.rating,
          },
        });
      }
    };

    return (
      <View style={styles.bestContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('selectedItem', {
              id: item.id,
              image: item.image,
              name: item.name,
              descShort: item.descShort,
              price: item.price,
              qty: item.qty,
              descLong: item.descLong,
              rating: item.rating,
            })
          }>
          <Image source={item.image} style={styles.img} />
        </TouchableOpacity>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDesc}>{item.descShort}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
        <TouchableOpacity style={styles.addBtn} onPress={addToBasket}>
          <Text style={styles.addBtnText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BEST SELLING</Text>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={true}
      />
    </View>
  );
}

export default BestSelling;
