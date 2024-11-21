// app/navigation/BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import HomeStackNavigator from './HomeStackNavigator';
import OrientationToggle from '../components/OrientationToggle';
//import ChatScreen from '../components/ChatScreen'; // MAKE THIS LATER
//import SettingsScreen from '../components/SettingsScreen'; // MAKE THIS LATER

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerRight: () => <OrientationToggle />, // Add Orientation Toggle in header
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Chat') iconName = 'comments';
          else if (route.name === 'Settings') iconName = 'cog';

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#516FC9',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{ headerShown: true }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

