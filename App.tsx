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

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function isLoggedIn() {
    return false;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {isLoggedIn() ? <AppRoutes /> : <Login />}
      </NavigationContainer>
    </ThemeProvider>
  );
}