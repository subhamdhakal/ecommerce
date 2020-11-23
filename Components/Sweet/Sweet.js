import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

function Sweet() {
  const DATA = [
    {
      id: Math.random().toString(),
      image: require('../../Assets/images/best5.jpg'),
      name: 'Olive Oil',
      desc: '1 pack - 1kg',
      price: '$10',
    },
    {
      id: Math.random().toString(),
      image: require('../../Assets/images/best2.png'),
      name: 'Olive Oil Small',
      desc: 'Italian  - 700gr',
      price: '$5',
    },
    {
      id: Math.random().toString(),
      image: require('../../Assets/images/best4.png'),
      name: 'Olive Oil Large',
      desc: 'Extra large - 1.3kg',
      price: '$14',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.bestContainer}>
        <Image source={item.image} style={styles.img} />
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDesc}>{item.desc}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addBtnText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SWEET</Text>

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

export default Sweet;
