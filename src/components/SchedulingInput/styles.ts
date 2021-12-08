import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 70px;

  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primaryText};

  padding: 10px 20px;
`;

export const Input = styled.TextInput`
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  margin: 0 20px;
  padding: 0 10px;
`;
