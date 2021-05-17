import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

function Dairy() {
  const DATA = [
    {
      id: Math.random().toString(),
      image:
        'https://yescart.creatrixtechnologies.com/images/thumbs/0000023_lenovo-ideacentre-600-all-in-one-pc_415.jpeg',
      name: 'Olive Oil',
      desc: '1 pack - 1kg',
      price: '$10',
    },
    {
      id: Math.random().toString(),
      image:
        'https://yescart.creatrixtechnologies.com/images/thumbs/0000023_lenovo-ideacentre-600-all-in-one-pc_415.jpeg',
      name: 'Olive Oil Small',
      desc: 'Italian  - 700gr',
      price: '$5',
    },
    {
      id: Math.random().toString(),
      image:
        'https://yescart.creatrixtechnologies.com/images/thumbs/0000023_lenovo-ideacentre-600-all-in-one-pc_415.jpeg',
      name: 'Olive Oil Large',
      desc: 'Extra large - 1.3kg',
      price: '$14',
    },
    {
      id: Math.random().toString(),
      image:
        'https://yescart.creatrixtechnologies.com/images/thumbs/0000023_lenovo-ideacentre-600-all-in-one-pc_415.jpeg',
      name: 'Olive Oil Large',
      desc: 'Extra large - 1.3kg',
      price: '$14',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.bestContainer}>
        <Image source={{uri: item.image}} style={styles.img} />
        <Text style={styles.itemName}>Lorem Ipsum is simply dummy text of</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text style={styles.itemPrice}>Rs 999</Text>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addBtnText}>+Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended For You</Text>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        bounces={true}
      />
    </View>
  );
}

export default Dairy;
