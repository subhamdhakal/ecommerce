import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bestContainer: {
    marginLeft: 15,
    borderRadius: 9,
    borderColor: 'grey',
    borderWidth: 1,
  },
  img: {
    height: width * 0.38,
    width: width * 0.35,
    borderTopLeftRadius: 7.5,
    borderTopRightRadius: 7.5,
  },
  title: {
    fontSize: 12,
    marginLeft: 15,
    marginVertical: 10,
    alignSelf: 'center',
    fontFamily: 'HelveticaNowDisplay-Bold',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '700',
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  itemDesc: {
    fontSize: 12,
    color: 'rgb(60,60,60)',
    paddingHorizontal: 10,
    paddingTop: 3,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '700',
    paddingLeft: 10,
    paddingTop: 10,
  },
  addBtn: {
    backgroundColor: 'rgb(28, 202, 96)',
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginHorizontal: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  addBtnText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
