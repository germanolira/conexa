import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: -170px;
`;

export const Consultas = styled.Text`
  width: 150px;
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryText};
`;