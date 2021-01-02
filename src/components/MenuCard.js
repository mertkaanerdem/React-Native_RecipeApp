import React from 'react';
import {View, TouchableOpacity, ImageBackground, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {menu_card} from '../styles/components_styles';

const MenuCard = ({data, onSelect}) => {
  return (
    <View style={menu_card.container}>
      <TouchableOpacity onPress={onSelect} style={menu_card.button}>
        <ImageBackground
          style={menu_card.image}
          imageStyle={{borderRadius: 10}}
          source={{uri: data.strMealThumb}}>
          <Text style={menu_card.text}>{data.strMeal}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export {MenuCard};
