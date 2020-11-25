import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  title: {
    color: 'rgb(46, 64, 60)',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  itemName: {
    fontSize: 16,
    color: 'black',
    marginRight: 15,
  },
  tax: {
    marginVertical: 5,
    fontSize: 16,
    color: 'black',
    marginRight: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: 'rgb(46, 64, 60)',
  },
  lineBreaker: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
    marginTop: 20,
  },
  total: {
    fontSize: 18,
    color: 'rgb(46, 64, 60)',
    fontWeight: '700',
    marginVertical: 15,
  },
});

export default styles;
