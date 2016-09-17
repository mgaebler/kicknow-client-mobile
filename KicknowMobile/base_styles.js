import { StyleSheet } from 'react-native';

// On design level I lean very much on material design. If you like to change
// something follow googles material design guidelines.
// https://material.google.com/
export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    marginTop: 56, // navigator bar gap
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#333',
    height: 60,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fafafa',
    fontSize: 18,
  },
  navigatorBar: {
    height: 56, // material design guideline
    backgroundColor: '#03A9F4',
  },
  navigatorBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBorderBottom: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  contentInner: {
    marginLeft: 16,
    marginRight: 16
  }
});
