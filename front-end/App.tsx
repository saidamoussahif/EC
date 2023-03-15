import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import MapScreen from './src/screens/MapScreen'
import GetLocationMap from './src/screens/GetLocationMap'
import CompagniesScreen from './src/screens/CompagniesScreen'

// Define the navigation stack
const Stack = createStackNavigator();


export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>        
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Compagnies" component={CompagniesScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="GetLocation" component={GetLocationMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
