import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  Button,
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {category_card} from '../styles/components_styles';

const CategoryCard = ({data, onSelect}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={category_card.container}>
      <TouchableOpacity onPress={onSelect}>
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
          onPress={toggleModal}
          style={category_card.continueContainer}>
          <Icon
            style={category_card.continue}
            name="arrow-bottom-right-thick"
            color="white"
            size={35}
          />
          <Modal
            animationInTiming={1000}
            animationOutTiming={1000}
            style={category_card.continueModal}
            isVisible={isModalVisible}>
            <View style={category_card.continueModal}>
              <Text style={category_card.title}>{data.strCategory}</Text>
              <Text style={category_card.continueText}>
                {data.strCategoryDescription}
              </Text>
              <TouchableOpacity
                style={category_card.continueHideButton}
                onPress={toggleModal}>
                <Text>BACK TO THE CATEGORY</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {CategoryCard};
