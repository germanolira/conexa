import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Login } from '../Login';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {

  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name='Login'
        component={Login}
      />
    </Stack.Navigator>
  )
}