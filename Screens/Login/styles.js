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
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    backgroundColor: 'rgb(245, 245, 245)',
    width: width * 0.75,
    borderColor: 'rgb(198, 198, 198)',
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 45,
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
  inputWrapper: {
    flexDirection: 'row',
    marginVertical: 5,
  },

  inputIcon: {
    marginRight: -35,
    alignSelf: 'center',
    color: 'grey',
    zIndex: 1,
  },
  forgot: {
    marginVertical: 15,
  },
  forgotText: {
    fontSize: 16,
  },
  signContainer: {
    flexDirection: 'row',
  },
  signText: {
    color: 'rgb(28, 202, 97)',
    fontWeight: '700',
    fontSize: 18,
  },
});
export default styles;
