import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  width: 100%;

  justify-content: center;
  align-items: center;

  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonText = styled(RectButton)`
  flex: 1;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};
`;