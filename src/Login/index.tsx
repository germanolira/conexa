import React, { useState } from 'react';

import { Image } from 'react-native';
import { Input } from '../components/Input';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useAuth } from '../hooks/auth';

import axios from "axios";
import { NavigationContainerRefContext, useNavigation } from '@react-navigation/native';

import {
  Container,
  InputEmailWrapper,
  ContainerWrapper,
  ContainerButtonWrapper,
  ButtonText,
} from './styles';

export function Login() {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  console.log(email);
  console.log(senha);

  function handleSignIn() {
    if (email == '' || senha == '') {
      alert('Preencha todos os campos');
    } else if (!email.includes('@')) {
      alert('Precisa ser um email válido');
    } else if (senha.length < 6) {
      alert('A senha precisa ter no mínimo 6 caracteres');
    } else {
      const data = {
        email,
        senha,
      };

      console.log(data);

      axios
        .post('http://desafio.conexasaude.com.br/api/login', data)
        .then((response) => {
          console.log(response.data);
          // AsyncStorage.setItem('@token', response.data.token);
          // console.log(response.data.token);
          navigation.navigate('Home');
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }

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
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChange={(e) => setEmail(e.nativeEvent.text)}
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
            autoCapitalize="none"
            autoCorrect={false}
            value={senha}
            onChange={(e) => setSenha(e.nativeEvent.text)}
          />

        </InputEmailWrapper>
        <ContainerButtonWrapper>
          <Button
            onPress={() => handleSignIn()}
            text="Entrar"
            children={
              <ButtonText
                accessible={true}
                accessibilityLabel="Botão de login"
                accessibilityHint="Este botão tem a ação de logar"
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