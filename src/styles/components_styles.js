import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const category_card = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fce4ec',
    margin: 20,
    marginVertical: 20,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    height: deviceSize.height / 4,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#ffffaa',
    textShadowRadius: 10,
    textShadowColor: '#ffaa88',
    textShadowOffset: {width: 2, height: 2},
    textAlign: 'center',
  },
  desContainer: {
    backgroundColor: '#fce4ec',
    marginHorizontal: 20,
    //padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#e91e63',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-start',
  },
  description: {
    color: '#560027',
    fontWeight: 'bold',
    textAlign: 'justify',
    fontStyle: 'italic',
    flex: 6,
    margin: 5,
  },
  continueContainer: {
    borderWidth: 2,
    borderColor: '#e91e63',
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#e91e63',
  },
  continue: {
    margin: 5,
    flex: 1,
    textAlign: 'right',
  },
});

export {category_card};
