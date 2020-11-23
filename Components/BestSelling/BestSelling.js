import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useDispatch} from 'react-redux';

function BestSelling({navigation}) {
  const dispatch = useDispatch();
  const DATA = [
    {
      id: Math.random().toString(),
      image: require('../../Assets/images/best5.jpg'),
      name: 'Olive Oil',
      descShort: '1 pack - 1kg',
      price: '$10',
    },
    {
      id: Math.random().toString(),
      image: require('../../Assets/images/best2.png'),
      name: 'Olive Oil Small',
      descShort: 'Italian  - 700gr',
      price: '$5',
    },
    {
      id: Math.random().toString(),
      image: require('../../Assets/images/best4.png'),
      name: 'Olive Oil Large',
      descShort: 'Extra large - 1.3kg',
      price: '$14',
    },
  ];

  const renderItem = ({item}) => {
    const addToBasket = () => {
      dispatch({
        type: 'ADD_TO_BASKET',
        itemData: {
          id: item.id,
          image: item.image,
          name: item.name,
          descShort: item.descShort,
          price: item.price,
        },
      });
    };
    return (
      <View style={styles.bestContainer}>
        <Image source={item.image} style={styles.img} />
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDesc}>{item.descShort}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addBtnText} onPress={addToBasket}>
            Add to Cart
          </Text>
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

// <ScrollView horizontal>
//         <View style={styles.bestContainer}>
//           <Image
//             source={require('../../Assets/images/best5.jpg')}
//             style={styles.img}
//           />
//           <Text style={styles.itemName}>Olive Oil Large</Text>
//           <Text style={styles.itemDesc}>1 pack -1kg</Text>
//           <Text style={styles.itemPrice}>$10</Text>
//         </View>
//         <View style={styles.bestContainer}>
//           <Image
//             source={require('../../Assets/images/best5.jpg')}
//             style={styles.img}
//           />
//           <Text style={styles.itemName}>Olive Oil Large</Text>
//           <Text style={styles.itemDesc}>1 pack -1kg</Text>
//           <Text style={styles.itemPrice}>$10</Text>
//         </View>
//         <View style={styles.bestContainer}>
//           <Image
//             source={require('../../Assets/images/best5.jpg')}
//             style={styles.img}
//           />
//           <Text style={styles.itemName}>Olive Oil Large</Text>
//           <Text style={styles.itemDesc}>1 pack -1kg</Text>
//           <Text style={styles.itemPrice}>$10</Text>
//         </View>
//         <View style={styles.bestContainer}>
//           <Image
//             source={require('../../Assets/images/best5.jpg')}
//             style={styles.img}
//           />
//           <Text style={styles.itemName}>Olive Oil Large</Text>
//           <Text style={styles.itemDesc}>1 pack -1kg</Text>
//           <Text style={styles.itemPrice}>$10</Text>
//         </View>
//       </ScrollView>
