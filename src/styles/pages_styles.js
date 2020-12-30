import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const category_page = StyleSheet.create({
  container: {
    backgroundColor: '#e91e63',
    flex: 1,
    margin: 10,
    borderRadius: 10,
  },
});

const menu_page = StyleSheet.create({
  container: {
    backgroundColor: '#e91e63',
    flex: 1,
    margin: 10,
    borderRadius: 10,
  },
});

export {category_page, menu_page};
