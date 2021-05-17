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
      image: 'https://www.wareable.com/media/imager/201911/34568-original.jpg',
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
      image:
        'https://yescart.creatrixtechnologies.com/images/thumbs/0000108_mobvoi-ticwatch-pro-3_415.jpeg',

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
      image:
        'https://qtxasset.com/styles/breakpoint_sm_default_480px_w/s3/fiercebiotech/1618579110/Screen%20Shot%202019-09-11%20at%201.36.04%20PM.png/Screen%20Shot%202019-09-11%20at%201.36.04%20PM.png?yauMJ..V9C_zLkMC03TlbYkjH1mV0y92&itok=xygtMUk9',
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
        <Image
          source={{
            uri: item.image,
          }}
          resizeMode={'cover'}
          resizeMethod={'resize'}
          style={styles.img}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Featured Products</Text>

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
