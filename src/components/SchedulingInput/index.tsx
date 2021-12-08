import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Container,
  Title,
  Input,
} from './styles';

interface InputSchedulingProps extends TextInputProps {
  title: string;
  placeholder: string;
  keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric';
}

export function SchedulingInput({
  title,
  placeholder,
  keyboardType = 'default',
  ...rest
}: InputSchedulingProps) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Input
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </Container>
  );
}