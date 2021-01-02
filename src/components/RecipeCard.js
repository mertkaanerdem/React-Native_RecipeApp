import React from 'react';
import {View, ImageBackground, Text, Linking, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {recipe_card} from '../styles/components_styles';

const RecipeCard = ({data, onSelect}) => {
  async function saveFood() {
    const foodData = `${data.strMeal} (${data.strArea} | ${data.strCategory})`;
    await AsyncStorage.setItem('@FOODS', foodData);
    Alert.alert(
      'Your Meal Saved',
      `${data.strMeal} (${data.strArea} | ${data.strCategory})  Saved Successfuly`,
    );
  }

  return (
    <View style={recipe_card.container}>
      <ImageBackground
        style={recipe_card.image}
        imageStyle={{borderRadius: 10}}
        resizeMode={'cover'}
        source={{uri: data.strMealThumb}}>
        <Text style={recipe_card.title}>{data.strMeal}</Text>
      </ImageBackground>
      <View style={recipe_card.category}>
        <View style={recipe_card.categoryOne}>
          <Icon name="cookie" color={'#560027'} size={30} />
          <Text style={recipe_card.categoryText}>{data.strCategory}</Text>
        </View>
        <View style={recipe_card.categoryThree}>
          <Icon name="bookmark" size={30} onPress={saveFood} />
          <Text style={recipe_card.categoryText}>Bookmark</Text>
        </View>
        <View style={recipe_card.categoryTwo}>
          <Icon name="flag" color={'#560027'} size={30} />
          <Text style={recipe_card.categoryText}>{data.strArea}</Text>
        </View>
      </View>
      <Text style={recipe_card.description}>{data.strInstructions}</Text>
      <Text style={recipe_card.tags}>Tags: {data.strTags}</Text>
      <Text
        style={({justifyContent: 'center'}, {alignSelf: 'center'})}
        onPress={() => Linking.openURL(data.strYoutube)}>
        <Icon name="youtube" color={'red'} size={40} />
      </Text>
    </View>
  );
};

export {RecipeCard};
