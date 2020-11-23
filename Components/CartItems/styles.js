import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {},
  view: {
    flexDirection: 'row',
    height: 150,
    width: width,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    resizeMode: 'center',
    height: width * 0.25,
    width: width * 0.25,
    borderRadius: 30,
    marginRight: 15,
  },
  qBtn: {
    marginHorizontal: 15,
    borderRadius: 7,
    borderColor: 'grey',
    backgroundColor: 'lightgrey',
    padding: 2,
    color: 'black',
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
  },
  desc: {
    fontSize: 14,
  },
});

export default styles;
