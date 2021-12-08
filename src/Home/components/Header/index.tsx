import React, { useState } from 'react';
import { StatusBar, View, Text, Button, Alert } from 'react-native';
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
import axios from 'axios';

export function HeaderComponent() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [dataConsulta, setDataConsulta] = useState('');
  const [idMedico, setIdMedico] = useState('');
  const [observacao, setObservacao] = useState('');
  const [paciente, setPaciente] = useState('');

  function handleScheduling() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVzdGUifQ.8rm5Ug8hNsQ_Q5nPyB0YLd9KmumdzFHT-O_mrBQMrTY'

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const data = {
      idMedico,
      paciente,
      observacao,
      dataConsulta,
    };

    axios.post('http://desafio.conexasaude.com.br/api/consulta', {
      data,
    }, config)
      .then(function (response) {
        console.log(response);
        setModalVisible(!isModalVisible);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function toggleModalScheduling() {
    setModalVisible(!isModalVisible);
  }

  function handleSchedulingData() {
    setModalVisible(!isModalVisible);
    Alert.alert('Agendamento realizado com sucesso!');
  }

  return (
    <Container>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModalScheduling}
      >
        <ModalContainer>
          <ModalHeader>
            <Feather
              name="x"
              size={28}
              color="#C4C4C4"
              onPress={toggleModalScheduling}
            />
          </ModalHeader>

          <SchedulingInput
            title="Id do médico"
            placeholder="Digite o ID do médico"
            value={idMedico}
            onChange={(e) => setIdMedico(e.nativeEvent.text)}
            keyboardType="numeric"
          />

          <SchedulingInput
            title="Paciente"
            placeholder="Qual o nome do paciente?"
            value={paciente}
            onChange={(e) => setPaciente(e.nativeEvent.text)}
          />

          <SchedulingInput
            title="Observação"
            placeholder="Qual a observação?"
            value={observacao}
            onChange={(e) => setObservacao(e.nativeEvent.text)}
          />

          <SchedulingInput
            title="Data"
            placeholder="Digite uma data"
            value={dataConsulta}
            onChange={(e) => setDataConsulta(e.nativeEvent.text)}
          />

          <Salvar
            onPress={handleSchedulingData}
          >
            <TextSalvar
              onPress={handleSchedulingData}
            >
              Salvar
            </TextSalvar>
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
            onPress={toggleModalScheduling}
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