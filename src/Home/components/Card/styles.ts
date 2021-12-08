import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 20px;
  height: 150px;
  /* background-color: blue; */
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-family: ${({ theme }) => theme.fonts.medium};

  margin-top: 30px;
  margin-bottom: 40px;
`;

export const CardWrapper = styled.View`
  height: 200px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 5px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  margin-left: 20px;
  margin-top: 20px;
`;

export const TextWrapper = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const ImageHeader = styled.View``;

export const ImageDoctor = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;

export const TitleDoctor = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-bottom: 5px;
`;

export const Cargo = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ContainerDetails = styled.View`
  height: 50px;
  flex-direction: row;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;

  background-color: ${({ theme }) => theme.colors.cardBackgroundOpacity};

  border-radius: 5px;
`;

export const DetailsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 20px;
  margin-top: 15px;
`;

export const Date = styled.View`
  flex-direction: row;
`;

export const DateText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 10px;
`;

export const Time = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const TimeText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-family: ${({ theme }) => theme.fonts.medium};

  margin-top: 60px;
`;
