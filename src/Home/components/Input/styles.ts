import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 20px;
`;

export const InputWrapper = styled.View`
  height: 50px;
  padding: 0 20px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
`;

export const InputText = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding: 0 20px;
`;
