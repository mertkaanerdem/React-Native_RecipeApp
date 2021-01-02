import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Button,
  Alert,
  ViewComponent,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {saved_paged} from '../styles/pages_styles';

function SavedFoodsPage(props) {
  async function checkFoods() {
    const food = await AsyncStorage.getItem('@FOODS');

    if (food) {
      return Alert.alert('Meal List', food);
    }
    return Alert.alert('Meal List', 'There is no any meal');
  }

  return (
    <View style={saved_paged.container}>
      <TouchableOpacity style={saved_paged.button} onPress={checkFoods}>
        <Text>Check Your Meal List</Text>
      </TouchableOpacity>
    </View>
  );
}

export {SavedFoodsPage};
