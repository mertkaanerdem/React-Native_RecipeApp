import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const category_page = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(150, 200, 200, 0.2)',
    flex: 1,
  },
});

const menu_page = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(150, 200, 200, 0.2)',
    flex: 1,
  },
});

const recipe_page = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(150, 200, 200, 0.2)',
    flex: 1,
  },
});

const saved_paged = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(150, 200, 200, 0.2)',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#F4B700',
    elevation: 5,
    borderRadius: 8,
    padding: 10,
    margin: 15,
    alignContent: 'center',
    alignItems: 'center',
  },
});

export {category_page, menu_page, recipe_page, saved_paged};
