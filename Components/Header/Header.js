import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';

function Header({navigation, iconChange}) {
  const notifier = useSelector((state) => state.notifier);
  const savedNotifier = useSelector((state) => state.savedNotifier);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const openSearch = () => {
    setOpen(true);
    dispatch({
      type: 'SEARCH_OPEN',
    });
  };
  const close = () => {
    setOpen(false);
    dispatch({
      type: 'SEARCH_CLOSE',
    });
  };
  return (
    <KeyboardAvoidingView style={styles.header} keyboardVerticalOffset={60}>
      <View style={styles.leftHeader}>
        <Ionicon
          name={iconChange ? 'arrow-back' : 'menu'}
          size={30}
          onPress={() => {
            iconChange ? navigation.goBack() : navigation.openDrawer();
          }}
          style={styles.icon}
        />
        {iconChange ? null : (
          <Image
            source={require('../../Assets/images/logo.png')}
            style={styles.logo}
          />
        )}
      </View>
      <View style={styles.rightHeader}>
        {open == false ? (
          <>
            <TouchableOpacity onPress={openSearch}>
              <Ionicon name="search" size={30} style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('mylist')}>
              {savedNotifier > 0 ? (
                <>
                  <View style={styles.notifierContainer}>
                    <Text style={{color: 'white', alignSelf: 'center'}}>
                      {savedNotifier}
                    </Text>
                  </View>
                  <Ionicon name="heart" size={30} style={styles.icon} />
                </>
              ) : (
                <Ionicon name="heart" size={30} style={styles.icon} />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('cart')}>
              {notifier > 0 ? (
                <>
                  <View style={styles.notifierContainer}>
                    <Text style={{color: 'white', alignSelf: 'center'}}>
                      {notifier}
                    </Text>
                  </View>
                  <Ionicon name="cart" size={30} style={styles.icon} />
                </>
              ) : (
                <Ionicon name="cart" size={30} style={styles.icon} />
              )}
            </TouchableOpacity>
          </>
        ) : (
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TextInput
              placeholder="Search"
              maxLength={15}
              style={{zIndex: 1}}
              underlineColorAndroid="rgb(200,200,200)"
            />
            <TouchableOpacity
              onPress={close}
              style={{
                alignItems: 'center',
                marginLeft: 10,
                justifyContent: 'center',
                backgroundColor: 'white',
              }}>
              <Ionicon name="search" size={30} style={styles.icon} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

export default Header;
