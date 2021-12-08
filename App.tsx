import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import theme from './src/global/styles/theme';

import { Login } from './src/Login';
import { Home } from './src/Home';

import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import { AppRoutes } from './src/routes/app.routes';

import { AuthProvider } from './src/hooks/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  async function isLoggedIn() {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          {/* {isLoggedIn() ? <Home /> : <Login />} */}
          <AppRoutes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}