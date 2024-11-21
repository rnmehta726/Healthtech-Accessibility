import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignupScreen';
import HomeScreen from './components/HomeScreen';
import EditPage from './components/EditPage';
import DynamicPage from './components/DynamicPage';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: { userId: string };
  EditPage: { userId: string };
  DynamicPage: { pageId: number, title: string, buttons: string[] };
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {

import BottomTabNavigator from './navigation/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer independent={true} >
      <BottomTab.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EditPage" component={EditPage} />
        <Stack.Screen name="DynamicPage" component={DynamicPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
