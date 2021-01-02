import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {CategoryPage, MenuPage, RecipePage, SavedFoodsPage} from './pages';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function RestaurantStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Category" component={CategoryPage} />
      <Stack.Screen name="Menu" component={MenuPage} />
      <Stack.Screen name="Recipe" component={RecipePage} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="rgba(150, 200, 200, 0.2)"
        initialRouteName="Restaurant">
        <Tab.Screen
          name="Saved"
          component={SavedFoodsPage}
          options={{
            tabBarLabel: 'Saved Meals',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="save" color={'#F4B700'} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Restaurant"
          component={RestaurantStack}
          options={{
            tabBarLabel: 'Restaurants',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="food-drumstick"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
