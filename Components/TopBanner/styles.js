import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  topBanner: {
    flex: 1,
  },
  img: {
    width: width,
    height: '100%',

    alignItems: 'flex-start',
  },
  btnContainer: {
    borderRadius: 15,
    borderColor: 'rgb(0, 188, 61)',
    borderWidth: 1,
    backgroundColor: 'rgb(28, 202, 96)',
    top: 150,
    left: 10,
    paddingVertical: 3,
    paddingHorizontal: 25,
  },
  btnText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default styles;
