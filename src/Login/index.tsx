import React from 'react';
import { Text } from 'react-native';

import { Image } from 'react-native';
import { Input } from '../components/Input';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  InputEmailWrapper,
  ContainerWrapper,
  ContainerButtonWrapper,
  ButtonText,
} from './styles';
import { Button } from '../components/Button';

export function Login() {
  return (
    <Container>
      <ContainerWrapper>
        <Image
          source={require('../../assets/conexalogo.png')}
          style={{
            width: 200,
            height: 35,
            marginBottom: 100,
          }}
        />
        <InputEmailWrapper>
          <MaterialCommunityIcons
            name="doctor"
            size={24}
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
            placeholderTextColor="#DFDFDF"
            keyboardType='email-address'
          />
        </InputEmailWrapper>
        <InputEmailWrapper>
          <MaterialCommunityIcons
            name="lock"
            size={24}
            color="#DFDFDF"
            accessible={true}
            accessibilityLabel="Ícone do campo senha"
            accessibilityHint="Este ícone não tem nenhuma ação"
            style={{
              marginLeft: 5,
              marginRight: 5,
            }}
          />
          <Input
            placeholder="Digite a sua senha"
            placeholderTextColor="#DFDFDF"
            secureTextEntry={true}
          />

        </InputEmailWrapper>
        <ContainerButtonWrapper>
          <Button
            text="Entrar"
            children={
              <ButtonText>
                Entrar
              </ButtonText>
            }
          />
        </ContainerButtonWrapper>
      </ContainerWrapper>
    </Container>
  );
}