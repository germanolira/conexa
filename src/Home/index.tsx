import React from 'react';
import { HeaderComponent } from './components/Header';

import {
  Container
} from './styles';

export function Home() {
  return (
    <Container>
      <HeaderComponent />
    </Container>
  );
}