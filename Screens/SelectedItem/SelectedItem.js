import React from 'react';
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
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Header from '../../Components/Header/Header';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';

function SelectedItem({navigation}) {
  const DATA = [
    {
      img: require('../../Assets/images/best3.png'),
    },
    {
      img: require('../../Assets/images/best.png'),
    },
  ];

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const renderItem = ({item}) => {
    return <Image source={item.img} style={styles.image} />;
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'android' ? null : 'padding'}
      style={styles.container}>
      <View style={styles.header}>
        <Header iconChange={true} />
      </View>
      <View style={styles.body}>
        <ScrollView>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.details}>
            <Text style={styles.name}>Paprika</Text>
            <Text style={styles.price}>W 5500</Text>

            <View style={styles.qtyContainer}>
              <Text style={styles.price}>Quantity</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={styles.qBtn}
                  onPress={() => dispatch({type: 'REMOVE'})}>
                  <Ionicon name="remove" size={24} />
                </TouchableOpacity>
                <Text style={{fontSize: 18}}>{counter}</Text>
                <TouchableOpacity
                  style={styles.qBtn}
                  onPress={() => dispatch({type: 'ADD'})}>
                  <Ionicon name="add-outline" size={24} />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.desc}>Description</Text>
            <Text>
              Paprika is a ground spice made from dried red fruits of sweeter
              varieties of the plant Capsicum annuum. It is traditionally made
              from Capsicum annuum varietals in the Longum group
            </Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={{color: 'white', fontSize: 18}}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btns}>
          <Text style={{color: 'white', fontSize: 18}}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default SelectedItem;
