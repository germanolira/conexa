import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  InputWrapper,
  InputText,
} from './styles';

export function InputSearch() {
  return (
    <Container>
      <InputWrapper>
        <Feather name="search" size={22} color="gray" />
        <InputText
          placeholder="Procure por uma consulta"
        />
      </InputWrapper>
    </Container>
  );
}