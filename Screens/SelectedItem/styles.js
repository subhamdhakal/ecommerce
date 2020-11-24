import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 0.08,
  },
  body: {
    flex: 0.92,
  },
  image: {
    height: 320,
    width: width,
    resizeMode: 'contain',
  },
  details: {
    flex: 1,
    marginHorizontal: 15,
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: '700',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
  },
  qtyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 30,
  },
  desc: {
    fontSize: 16,
    fontWeight: '700',
  },
  qBtn: {
    marginHorizontal: 10,
    borderRadius: 7,
    borderColor: 'grey',
    backgroundColor: 'lightgrey',
    padding: 3,
  },
  review: {},
  btn: {
    backgroundColor: 'rgb(23, 23, 23)',
    paddingHorizontal: width * 0.163,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  btns: {
    backgroundColor: 'rgb(28, 200, 96)',
    paddingHorizontal: width * 0.163,
    paddingVertical: 12,
    justifyContent: 'center',
    zIndex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default styles;
