import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

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
import axios from 'axios';

export function Login() {

  // Create a function that will be called when the user press the button "Login" and
  // will return the email and password typed by the user, and get the 'token' from api desafio.conexasaude.com.br/api/login using axios and
  // save it in the storage.

  async function handleLogin(email: string, password: string) {
    try {
      const response = await axios.post('https://desafio.conexasaude.com.br/api/login', {
        email,
        password,
      });

      await AsyncStorage.setItem('token', response.data.token);
    } catch (error) {
      alert('Usuário ou senha inválidos');
    }
  }

  // async function handleLogin() {
  //   const email = ''
  //   const password = ''
  //   const token = ''
  //   await AsyncStorage.setItem('token', token);
  // }

  return (
    <Container>
      <ContainerWrapper>
        <Image
          source={require('../../assets/conexalogo.png')}
          style={{
            width: 200,
            height: 35,
            marginBottom: 140,
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
              <ButtonText
                accessible={true}
                accessibilityLabel="Botão de login"
                accessibilityHint="Este botão tem a ação de logar"
                onPress={() => handleLogin('', '')}
              >
                Entrar
              </ButtonText>
            }
          />
        </ContainerButtonWrapper>
      </ContainerWrapper>
    </Container>
  );
}

function email(email: any, password: any) {
  throw new Error('Function not implemented.');
}
