import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    flex: 1,
  },
  topNav: {
    flex: 0.4,
  },
  icon: {
    marginLeft: 30,
    marginTop: 30,
    color: '#3E7DBC',
    zIndex: 1,
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
    backgroundColor: '#3E7DBC',
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
    paddingLeft: 40,
  },
  inputIcon: {
    marginRight: -30,
    alignSelf: 'center',
    color: 'grey',
    zIndex: 1,
  },
  forgot: {
    marginVertical: 15,
  },
  signContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginText: {
    color: '#3E7DBC',
    fontWeight: '700',
    fontSize: 18,
  },
});
export default styles;
