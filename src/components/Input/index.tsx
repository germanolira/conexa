import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Container,
  InputArea,
} from './styles';

interface InputProps extends TextInputProps {
  placeholder: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  value?: string;
}

export function Input({
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  value = '',
  ...rest
}: InputProps) {
  return (
    <Container {...rest}>
      <InputArea
        placeholder={placeholder}
      />
    </Container>
  );
}