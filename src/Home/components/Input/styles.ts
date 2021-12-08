import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const InputWrapper = styled.View`
  width: 100%;
  height: 45px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.background};

  margin-top: 25px;
`;

export const InputText = styled(TextInput)`
  flex: 1;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 700;
`;