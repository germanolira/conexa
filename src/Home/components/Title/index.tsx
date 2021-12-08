import React from 'react';
import { View, Text } from 'react-native';

import {
  Container
} from './styles';

export function Title() {
  return (
    <Container>
      <View
        style={{
          flexDirection: 'column',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: '#060038',
          }}
        >
          Olá,
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#060038',
          }}
        >
          Doutor 👋
        </Text>
      </View>
    </Container>
  );
}