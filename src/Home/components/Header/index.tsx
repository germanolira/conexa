import React from 'react';
import { StatusBar } from 'react-native';

import {
  Container,
  HeaderContainer,
  HeaderWrapper,
  Title,
  Subtitle,
  SchedulingWrapper,
  SchedulingButton,
  TextButton,
} from './styles';

export function HeaderComponent() {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <HeaderContainer>
        <HeaderWrapper>
          <Title>Olá,</Title>
          <Subtitle>Doutor 👋</Subtitle>
        </HeaderWrapper>
        <SchedulingWrapper>
          <SchedulingButton>
            <TextButton>Agendar</TextButton>
          </SchedulingButton>
        </SchedulingWrapper>
      </HeaderContainer>
    </Container>
  );
}