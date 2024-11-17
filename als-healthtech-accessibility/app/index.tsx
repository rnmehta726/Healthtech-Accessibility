// app/index.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './navigation/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

