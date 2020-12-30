import React from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {category_card} from '../styles/components_styles';

const CategoryCard = ({data, onSelect}) => {
  return (
    <View style={category_card.container}>
      <TouchableOpacity>
        <ImageBackground
          resizeMode="contain"
          imageStyle={{borderRadius: 2}}
          source={{uri: data.strCategoryThumb}}
          style={category_card.image}>
          <Text style={category_card.title}>{data.strCategory}</Text>
        </ImageBackground>
      </TouchableOpacity>
      <View style={category_card.desContainer}>
        <Text
          numberOfLines={2}
          ellipsizeMode="middle"
          style={category_card.description}>
          {data.strCategoryDescription}
        </Text>
        <TouchableOpacity
          onPress={onSelect}
          style={category_card.continueContainer}>
          <Icon
            style={category_card.continue}
            name="arrow-bottom-right-thick"
            color="white"
            size={35}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {CategoryCard};
