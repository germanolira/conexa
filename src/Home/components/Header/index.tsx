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
} from './styles';

export function HeaderComponent() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <HeaderContainer>
        <HeaderWrapper>
          <Title>Olá,</Title>
          <Subtitle>Doutor 👋</Subtitle>
        </HeaderWrapper>
        <SchedulingWrapper>
          <SchedulingButton></SchedulingButton>
        </SchedulingWrapper>
      </HeaderContainer>
    </Container>
  );
}