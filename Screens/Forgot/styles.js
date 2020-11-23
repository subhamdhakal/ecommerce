import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {flex: 1},
  topNav: {
    flex: 0.4,
  },
  icon: {
    marginLeft: 30,
    marginTop: 30,
    color: 'rgb(28, 202, 97)',
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    resizeMode: 'contain',
    width: width * 0.45,
  },
  inputContainer: {
    flex: 1.8,
    alignItems: 'center',
  },
  btn: {
    marginTop: 10,
    backgroundColor: 'rgb(28, 202, 97)',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: width * 0.31,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  inputWrapper: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  inputEmail: {
    paddingRight: width * 0.48,
    borderRadius: 35,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 55,
    paddingVertical: 4,
  },
  inputIcon: {
    marginRight: -30,
    alignSelf: 'center',
  },

  signContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
});
export default styles;
