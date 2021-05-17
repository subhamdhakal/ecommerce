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
          name={'person-circle-sharp'}
          size={48}
          onPress={() => {
            navigation.openDrawer();
          }}
          style={styles.icon}
        />
      </View>
      <View style={styles.rightHeader}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 5,
            flex: 1,
            marginLeft: 24,
          }}>
          <Ionicon
            name="search"
            size={18}
            style={{
              marginRight: -35,
              alignSelf: 'center',
              color: 'grey',
              zIndex: 1,
            }}
          />
          <TextInput
            placeholder="Search"
            style={styles.input}
            placeholderTextColor="rgb(80,80,80)"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <Ionicon
          name={'menu'}
          size={30}
          onPress={() => {
            navigation.openDrawer();
          }}
          style={styles.icon}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

export default Header;
