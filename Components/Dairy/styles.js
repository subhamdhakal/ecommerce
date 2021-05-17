import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../src/assets/colors/colors';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    color: colors.navyBlue,
    backgroundColor: colors.navyBlue,
  },
  bestContainer: {
    marginLeft: 15,
    width: '45%',
    marginBottom: 15,
    backgroundColor: colors.textInputGray,
  },
  img: {
    height: width * 0.35,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  title: {
    fontSize: 12,
    marginLeft: 15,
    marginVertical: 10,
    alignSelf: 'center',
    color: colors.white,
  },

  viewAllContainer: {
    backgroundColor: 'lightgrey',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'grey',
  },

  itemName: {
    fontSize: 12,
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
    color: '#FF556B',
  },
  addBtn: {
    backgroundColor: 'rgb(28, 202, 96)',
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  addBtnText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default styles;
