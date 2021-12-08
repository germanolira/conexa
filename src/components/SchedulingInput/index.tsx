import React from 'react';

import {
  Container,
  Title,
  Input,
} from './styles';

interface InputProps {
  title: string;
  placeholder: string;
}

export function SchedulingInput({
  title,
  placeholder,
}: InputProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Input
        placeholder={placeholder}
      />
    </Container>
  );
}