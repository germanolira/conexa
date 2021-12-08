import React from 'react';

import { Input } from './components/Input';
import { HeaderComponent } from './components/Header';
import { Card } from './components/Card';

import {
  Container
} from './styles';

export function Home() {
  return (
    <Container>
      <HeaderComponent />
      <Input />
      <Card />
    </Container>
  );
}