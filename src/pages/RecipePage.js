import React, {useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import axios from 'axios';

import {RecipeCard, Header} from '../components';
import {recipe_page} from '../styles/pages_styles';

// https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772 --> buradaki i aşağıdaki params i'si

function RecipePage({navigation, route}) {
  const {recipe} = route.params;

  const [recipeDetail, setRecipeDetail] = useState({});

  async function fetchRecipeData() {
    const {
      data: {meals},
    } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?`, {
      params: {
        i: recipe,
      },
    });
    setRecipeDetail(meals);
  }

  useEffect(() => {
    fetchRecipeData();
  }, []);

  const renderRecipe = ({item}) => (
    <RecipeCard data={item} onSelect={() => navigation.goBack()} />
  );

  return (
    <View style={recipe_page.container}>
      <Header title="RECIPE" onSelect={() => navigation.goBack()} />
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={recipeDetail}
        renderItem={renderRecipe}
      />
    </View>
  );
}

export {RecipePage};
