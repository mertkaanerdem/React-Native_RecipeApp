import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const category_card = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(244, 200, 0, 1)',
    margin: 20,
    marginVertical: 20,
    padding: 10,
    borderRadius: 10,
    elevation: 10,
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
    backgroundColor: 'rgb(255, 255, 255)',
    marginHorizontal: 20,
    //padding: 10,
    borderRadius: 10,
    borderColor: '#e91e63',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-start',
    elevation: 10,
  },
  description: {
    color: '#560027',
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
    flex: 6,
    margin: 5,
  },
  continueContainer: {
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: 'rgba(244, 200, 0, 1)',
  },
  continue: {
    margin: 5,
    flex: 1,
    textAlign: 'right',
  },
  continueModal: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(244, 200, 0, 0.7)',
    borderRadius: 10,
  },

  continueText: {
    color: '#560027',
    fontSize: 16,
    padding: 15,
    fontWeight: '500',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  continueHideButton: {
    backgroundColor: '#F4B700',
    elevation: 5,
    borderRadius: 8,
    padding: 10,
    margin: 15,
    alignContent: 'center',
    alignItems: 'center',
  },
});

const menu_card = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-around',
    flex: 1,
    marginVertical: 5,
    elevation: 10,
  },
  button: {
    paddingVertical: 5,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: deviceSize.width / 2.3,
    height: deviceSize.height / 2.5,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 7,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#ffffaa',
    textShadowRadius: 3,
    textShadowColor: '#ffaa88',
    textShadowOffset: {width: 2, height: 2},
  },
});

const recipe_card = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'space-around',
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#F4B700',
    elevation: 10,
  },

  image: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    //width: deviceSize.width / 1,
    height: deviceSize.height / 2.5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 7,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: '#ffffaa',
    textShadowRadius: 3,
    textShadowColor: '#ffaa88',
    textShadowOffset: {width: 2, height: 2},
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  categoryOne: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryTwo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryThree: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    color: '#560027',
    fontWeight: 'bold',
    textAlign: 'justify',
    textDecorationStyle: 'dashed',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
  description: {
    fontSize: 14,
    color: '#560027',
    fontWeight: 'bold',
    textAlign: 'justify',
    fontStyle: 'italic',
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  tags: {
    textAlign: 'right',
    color: '#560027',
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },

  button: {
    paddingVertical: 5,
  },
});

const header = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 25,
    backgroundColor: 'white',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  title: {
    color: '#560027',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export {category_card, menu_card, recipe_card, header};
