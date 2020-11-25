import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)',
  },
  header: {
    flex: 1.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(134, 134, 134)',
  },
  logoutBtn: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
  },
  logText: {
    fontSize: 18,
    fontWeight: '700',
    marginRight: 5,
    color: 'rgb(28, 200, 95)',
  },
  body: {
    flex: 2,
  },
  itemsContainer: {
    flexDirection: 'row',
    paddingVertical: 18,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderColor: 'black',
    borderBottomWidth: 0.8,
    justifyContent: 'space-between',
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 20,
    marginLeft: 5,
  },
});

export default styles;
