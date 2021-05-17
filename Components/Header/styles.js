import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../src/assets/colors/colors';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.primary,
  },
  leftHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 5,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    backgroundColor: 'rgb(245, 245, 245)',
    borderColor: 'rgb(198, 198, 198)',
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 45,
    marginRight: 32,
    width: 300,
    fontSize: 14,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightHeader: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    width: width * 0.25,
    height: width * 0.06,
    marginLeft: 10,
  },
  icon: {
    color: colors.white,
  },
  notifierContainer: {
    backgroundColor: 'rgb(50, 50, 50)',
    borderRadius: 30,
    marginBottom: -11,
    marginLeft: 20,
    marginRight: -10,
    zIndex: 1,
  },
  notifierText: {
    color: 'white',
    alignSelf: 'center',
  },
  searchInput: {
    zIndex: 1,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'rgb(200,200,200)',
    borderRadius: 7,
    marginVertical: 5,
  },
  searchIconContainer: {
    alignItems: 'center',
    marginLeft: 10,
    justifyContent: 'center',
  },
});

export default styles;
