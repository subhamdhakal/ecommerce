import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(50,50,50)',
    flex: 1,
  },
  leftHeader: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 5,
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
    color: 'rgb(28, 202, 96)',
  },
  notifierContainer: {
    backgroundColor: 'rgb(50, 50, 50)',
    borderRadius: 30,
    marginBottom: -11,
    marginLeft: 20,
    marginRight: -10,
    zIndex: 1,
  },
});

export default styles;
