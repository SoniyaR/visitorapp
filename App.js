import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import SignUpScreen from './screens/SignUpScreen';
import SplashScreen from './screens/SplashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      const checkLoginStatus = async () => {
        try {
          const token = await AsyncStorage.getItem('userToken');
          setIsLoggedIn(!!token);
        } catch (error) {
          console.error('Error checking login status:', error);
        } finally {
          setIsLoading(false);
        }
      };

      checkLoginStatus();
  }, []);

  if (isLoading) {
      return <SplashScreen />; // Optional splash screen while checking login status
  }

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={isLoggedIn ? 'Dashboard' : 'Login'}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ headerLeft: null }} />
    </Stack.Navigator>
  </NavigationContainer>
);
}

export default App;