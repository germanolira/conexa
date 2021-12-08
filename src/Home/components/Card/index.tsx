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
} from './styles';

export function Card() {
  return (
    <Container>

      <Title>Próxima consulta</Title>

      <CardWrapper>
        <CardHeader>
          <ImageDoctor
            source={{
              uri: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
            }}
          />
          <TextWrapper>
            <TitleDoctor>Dr. Daniel Vieira</TitleDoctor>
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

      </CardWrapper>
    </Container>
  );
}