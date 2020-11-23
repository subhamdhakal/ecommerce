import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(28, 202, 97)',
    width: '100%',
    height: 170,
    justifyContent: 'center',
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignSelf: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  text: {
    color: 'white',
  },
});

export default styles;
