import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  firstRow: {
    flex: 1,
    backgroundColor: 'white',
  },
  first_text: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 15,
    marginVertical: 10,
  },
  first_img: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  first_images: {
    width: width * 0.26,
    height: width * 0.21,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(0, 188, 61)',
  },
});

export default styles;
