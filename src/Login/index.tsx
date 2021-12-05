import React from 'react';
import { Image } from 'react-native';
import { Input } from '../components/Input';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  InputEmailWrapper,
  ContainerWrapper,
} from './styles';

export function Login() {
  return (
    <Container>
      <ContainerWrapper>
        <Image
          source={require('../../assets/conexalogo.png')}
          style={{
            width: 200,
            height: 35,
            // marginTop: -85,
          }}
        />
        <InputEmailWrapper>
          <MaterialCommunityIcons
            name="doctor"
            size={30}
            color="#DFDFDF"
            accessible={true}
            accessibilityLabel="Ícone do campo email"
            accessibilityHint="Este ícone não tem nenhuma ação"
            style={{
              marginLeft: 5,
              marginRight: 5,
            }}
          />
          <Input
            placeholder="Digite o seu email"
          />
        </InputEmailWrapper>
      </ContainerWrapper>
    </Container>
  );
}