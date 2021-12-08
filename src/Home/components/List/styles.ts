import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  height: 100%;

  margin-top: 220px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;

  /* background-color: ${({ theme }) => theme.colors.background}; */
`;

export const ListContainer = styled.View`
  flex: 1;
`;

export const ListWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  height: 100px;

  margin-top: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
`;

export const ListItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ImageWrapper = styled.View`
  margin-left: 20px;
`;

export const ListItemText = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const SubtitleWrapper = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  width: 80%;
  height: 50px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const ContentWrapper = styled.View`
  flex-direction: column;
  margin-left: 20px;
`;