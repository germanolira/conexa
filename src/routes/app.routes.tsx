import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Login } from '../Login';
import { Home } from '../Home';
import { Scheduling } from '../Scheduling';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const { Screen } = createBottomTabNavigator();

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
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Agendamento"
        component={Scheduling}
        options={{
          tabBarLabel: 'Agendamento',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-clock" color={color} size={size} />
          ),
        }}
      />
    </Stack.Navigator>
  )
}