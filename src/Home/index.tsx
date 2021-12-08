import React from 'react';
import { Input } from './components/Input';
import { HeaderComponent } from './components/Header';

import {
  Container
} from './styles';

export function Home() {
  return (
    <Container>
      <HeaderComponent />
      <Input />
    </Container>
  );
}