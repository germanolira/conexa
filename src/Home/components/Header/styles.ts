import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView``;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 200px;
  justify-content: flex-end;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
`;

export const HeaderWrapper = styled.View`

`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const SchedulingWrapper = styled.View``;

export const SchedulingButton = styled(TouchableOpacity)`
  width: 100px;
  height: 40px;

  background-color: ${({ theme }) => theme.colors.primaryText};

  border-radius: 5px;

  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.white};
`;