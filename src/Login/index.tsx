import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Image, InteractionManager } from 'react-native';
import { Input } from '../components/Input';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { NavigationContainerRefContext, useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();

  // @ts-ignore
  // navigation.navigate('Home');

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleLogin() {
    navigation.navigate('Home');
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
            onChangeText={(text) => setEmail(text)}
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
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

        </InputEmailWrapper>
        <ContainerButtonWrapper>
          <Button
            onPress={handleLogin}
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