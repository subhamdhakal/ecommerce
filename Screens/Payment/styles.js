import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
  },
  addressContainer: {
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  input: {
    backgroundColor: 'rgb(240, 240, 240)',
    paddingLeft: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgb(200, 200, 200)',
    marginVertical: 10,
  },
  title: {
    color: 'rgb(46, 64, 60)',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  checkboxMainContainer: {
    justifyContent: 'center',
    marginVertical: 50,
    paddingLeft: 70,
  },
  checkLabel: {
    margin: 3,
    fontSize: 18,
    fontWeight: '700',
  },
  checkboxDetailsContainer: {
    marginLeft: 50,
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 14,
    color: 'rgb(60, 60, 60)',
  },
});

export default styles;
