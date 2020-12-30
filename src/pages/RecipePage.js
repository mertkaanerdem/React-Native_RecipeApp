import React from 'react';
import {Button} from 'react-native';
import axios from 'axios';

// https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

function RecipePage({navigation}) {
  return <Button title="Go" onPress={() => navigation.goBack()} />;
}

export {RecipePage};
