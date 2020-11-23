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
    marginHorizontal: 15,
  },
  image: {
    height: 380,
    width: width,
    resizeMode: 'contain',
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
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
    padding: 2,
  },
  review: {},
  btn: {
    backgroundColor: 'rgb(23, 23, 23)',
    paddingHorizontal: width * 0.163,
    paddingVertical: 5,
    justifyContent: 'center',
  },
  btns: {
    backgroundColor: 'rgb(28, 200, 96)',
    paddingHorizontal: width * 0.163,
    paddingVertical: 5,
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 0.06,
  },
});

export default styles;
