import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {CategoryPage, MenuPage, RecipePage} from './pages';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Category" component={CategoryPage} />
        <Stack.Screen name="Menu" component={MenuPage} />
        <Stack.Screen name="Recipe" component={RecipePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
