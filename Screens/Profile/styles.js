import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(28, 202, 97)',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
    backgroundColor: 'rgb(28, 200, 96)',
  },
  logText: {
    fontSize: 18,
    fontWeight: '700',
    marginRight: 5,
    color: 'white',
  },
  body: {
    flex: 2,
  },
  items: {
    flexDirection: 'row',
    borderColor: 'black',
    borderBottomWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 20,
    marginLeft: 5,
  },
});

export default styles;
