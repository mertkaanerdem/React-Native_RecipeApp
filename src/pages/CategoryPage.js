import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import axios from 'axios';
import {CategoryCard, HeaderMain} from '../components';
import {category_page} from '../styles/pages_styles';

const api_url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

function CategoryPage(props) {
  const [categoryData, setCategoryData] = useState([]);

  function fetchData() {
    axios.get(api_url).then((response) => setCategoryData(response.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderCategory = ({item}) => (
    <CategoryCard
      data={item}
      onSelect={() =>
        props.navigation.navigate('Menu', {menu: item.strCategory})
      }
    />
  );

  return (
    <View style={category_page.container}>
      <HeaderMain title={'CATEGORY'} />
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={categoryData.categories}
        renderItem={renderCategory}
      />
    </View>
  );
}

export {CategoryPage};
