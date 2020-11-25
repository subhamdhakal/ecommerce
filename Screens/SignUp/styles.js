import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  top: {flex: 1},

  topNav: {
    flex: 0.4,
  },
  icon: {
    marginLeft: 30,
    marginTop: 30,
    color: 'red',
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    resizeMode: 'contain',
    width: width * 0.45,
  },
  inputContainer: {
    flex: 2,
    alignItems: 'center',
  },
  btn: {
    marginTop: width * 0.15,
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
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 16,
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
    paddingLeft: 20,
  },
  inputIcon: {
    marginRight: -30,
    alignSelf: 'center',
    color: 'red',
  },
  forgot: {
    marginVertical: 15,
  },
  signContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  loginText: {
    color: 'rgb(28, 202, 97)',
    fontWeight: '700',
    fontSize: 16,
  },
});
export default styles;
