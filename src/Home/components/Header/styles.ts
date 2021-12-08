import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 140px;
  justify-content: flex-end;
`;

export const HeaderWrapper = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Subtitle = styled.Text``;

export const SchedulingWrapper = styled.View``;

export const SchedulingButton = styled(TouchableOpacity)``;
