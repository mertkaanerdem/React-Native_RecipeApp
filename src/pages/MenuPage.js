import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text, FlatList} from 'react-native';

import {menu_page} from '../styles/pages_styles';

//https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

function MenuPage({route}) {
  const {meals} = route.params;
  const [foodMenu, setFoodMenu] = useState({});

  async function fetchMenuData() {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${meals}`,
    );
    setFoodMenu(response.data);
  }
  console.log(foodMenu.strMeal);

  useEffect(() => {
    fetchMenuData();
  }, []);

  return (
    <View style={menu_page.container}>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={foodMenu}
        renderItem={(item) => <Text data={item}>{item.strMeal}</Text>}
      />
    </View>
  );
}

export {MenuPage};

//onPress={() => navigation.navigate('Recipe')}
