import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

import Header from '../../Components/Header/Header';
import CartItems from '../../Components/CartItems/CartItems';
import styles from './styles';
import {getSavedTotal} from '../../Reducer/Reducer';

function MyList({navigation}) {
  const saved = useSelector((state) => state.saved);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header navigation={navigation} iconChange={true} />
      </View>
      <View style={styles.body}>
        <ScrollView bounces>
          <Text style={styles.title}>Saved</Text>
          {saved.map((item, index) => (
            <CartItems
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              descShort={item.descShort}
              qty={item.qty}
              saved={true}
            />
          ))}

          {saved?.length > 0 ? (
            <View style={styles.totalContainer}>
              <View style={styles.lineBreak} />
              <View style={styles.buyContainer}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  Total: $<Text>{getSavedTotal(saved)}</Text>
                </Text>
                <TouchableOpacity style={styles.buyBtn}>
                  <Text style={styles.buyBtnText}>Buy Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.emptyContainer}>
              <Image
                source={require('../../Assets/images/tobe.png')}
                style={styles.emptyImage}
              />
              <Text style={styles.emptyText}>
                You have not saved anything yet.
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

export default MyList;
