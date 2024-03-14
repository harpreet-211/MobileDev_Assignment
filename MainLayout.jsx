import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator as createStackNavigation } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';

const Stack = createStackNavigation();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
