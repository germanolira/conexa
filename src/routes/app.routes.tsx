import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Login } from '../Login';
import { Home } from '../Home';
import { Scheduling } from '../Scheduling';
import { Profile } from '../Profile';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 85 : 65,
          paddingVertical: Platform.OS === 'ios' ? 10 : 0,
          paddingBottom: Platform.OS === 'ios' ? 0 : 10,
          paddingTop: Platform.OS === 'ios' ? 0 : 10,
        }
      }}
    >
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
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  )
}