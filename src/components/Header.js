import React from 'react';
import {View, ImageBackground, Text, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {header} from '../styles/components_styles';

const Header = ({title, onSelect}) => {
  return (
    <View style={header.container}>
      <TouchableOpacity onPress={onSelect}>
        <Icon name="chevron-left" color={'#560027'} size={40} />
      </TouchableOpacity>
      <Text style={header.title}>{title}</Text>
    </View>
  );
};
const HeaderMain = ({title, onSelect}) => {
  return (
    <View style={header.container}>
      <TouchableOpacity onPress={onSelect}></TouchableOpacity>
      <Text style={header.title}>{title}</Text>
    </View>
  );
};

export {Header, HeaderMain};
