// app/navigation/HomeStackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import EditPage from '../components/EditPage';
import DynamicPage from '../components/DynamicPage';
import { RootStackParamList } from '../types/types';

const Stack = createStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EditPage" component={EditPage} />
      <Stack.Screen name="DynamicPage" component={DynamicPage} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

// app/navigation/HomeStackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import EditPage from '../components/EditPage';
import DynamicPage from '../components/DynamicPage';
import { RootStackParamList } from '../types/types';

const Stack = createStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EditPage" component={EditPage} />
      <Stack.Screen name="DynamicPage" component={DynamicPage} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
