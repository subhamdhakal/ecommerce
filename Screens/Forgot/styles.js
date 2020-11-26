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
  title: {
    color: 'rgb(46, 64, 60)',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 10,
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
    paddingHorizontal: 20,
  },
  btn: {
    marginTop: 20,
    backgroundColor: 'rgb(28, 202, 97)',
    borderRadius: 20,
    width: width * 0.75,
    paddingVertical: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  input: {
    backgroundColor: 'rgb(245, 245, 245)',
    width: width * 0.75,
    borderColor: 'rgb(198, 198, 198)',
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 45,
    color: 'black',
  },
  inputIcon: {
    marginRight: -35,
    alignSelf: 'center',
    color: 'grey',
    zIndex: 1,
  },

  signContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  linkText: {
    color: 'grey',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  errorMessage: {color: 'red', fontSize: 18, marginBottom: 20},
});
export default styles;
