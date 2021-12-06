import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: white;
`;

export const ContainerWrapper = styled.View`
  width: 85%;
  height: 85%;
  background-color: #fff;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 25px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const InputEmailWrapper = styled.View`
  width: 100%;
  height: 50px;

  justify-content: center;
  align-items: center;
  flex-direction: row;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;

  margin-top: 20px;
`;

export const ContainerButtonWrapper = styled.View`
  width: 100%;
  height: 45px;

  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;

  /* margin-top: 320px; */
  position: absolute;
  bottom: 0;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
`;
