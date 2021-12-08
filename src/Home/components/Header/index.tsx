import React, { useState } from 'react';
import { StatusBar, View, Text, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Modal from "react-native-modal";

import {
  Container,
  HeaderContainer,
  HeaderWrapper,
  Title,
  Subtitle,
  SchedulingWrapper,
  SchedulingButton,
  TextButton,
  ModalContainer,
  ModalHeader,
  Salvar,
  TextSalvar,
} from './styles';
import { SchedulingInput } from '../../../components/SchedulingInput';

export function HeaderComponent() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <Container>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
      >

        <ModalContainer>
          <ModalHeader>
            <Feather
              name="x"
              size={28}
              color="#C4C4C4"
              onPress={toggleModal}
            />
          </ModalHeader>

          <SchedulingInput
            title="Id do médico"
            placeholder="Digite o ID do médico"
          />

          <SchedulingInput
            title="Paciente"
            placeholder="Qual o nome do paciente?"
          />

          <SchedulingInput
            title="Observação"
            placeholder="Qual a observação?"
          />

          <SchedulingInput
            title="Data"
            placeholder="Digite uma data"
          />

          <Salvar>
            <TextSalvar>Salvar</TextSalvar>
          </Salvar>

        </ModalContainer>

      </Modal>

      <HeaderContainer>

        <HeaderWrapper>
          <Title>Olá,</Title>
          <Subtitle>Doutor 👋</Subtitle>
        </HeaderWrapper>

        <SchedulingWrapper>
          <SchedulingButton
            onPress={toggleModal}
          >
            <TextButton>
              Agendar
            </TextButton>
          </SchedulingButton>
        </SchedulingWrapper>

      </HeaderContainer>

    </Container>
  );
}