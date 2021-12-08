import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  InputWrapper,
  InputText,
} from './styles';

export function Input() {
  return (
    <Container>
      <InputWrapper>
        <Feather
          name="search"
          size={24}
          color="#7779A7"
        />
        <InputText
          placeholder="Procure por uma consulta"
        />
      </InputWrapper>
    </Container>
  );
}