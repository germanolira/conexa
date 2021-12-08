import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Title,
  CardWrapper,
  CardHeader,
  ImageHeader,
  ImageDoctor,
  TitleDoctor,
  Cargo,
  TextWrapper,
  ContainerDetails,
  DetailsWrapper,
  Date,
  DateText,
  Time,
  TimeText,
  Subtitle,
} from './styles';

export function Card() {
  return (
    <Container>

      <Title>Próxima consulta</Title>

      <CardWrapper>
        <CardHeader>
          <ImageDoctor
            source={{
              uri: 'https://randomuser.me/api/portraits/women/51.jpg',
            }}
          />
          <TextWrapper>
            <TitleDoctor>Miranda Ratislav</TitleDoctor>
            <Cargo>Neurologista</Cargo>
          </TextWrapper>
        </CardHeader>

        <ContainerDetails>
          <DetailsWrapper>
            <Date>
              <Feather
                name="calendar"
                size={20}
                color="#fff"
              />
              <DateText>Quarta, 8 Dez</DateText>
            </Date>
            <Time>
              <Feather
                name="clock"
                size={20}
                color="#fff"
              />
              <TimeText>11:00 - 12:00</TimeText>
            </Time>
          </DetailsWrapper>
        </ContainerDetails>

        <Subtitle>Consultas</Subtitle>

      </CardWrapper>
    </Container>
  );
}