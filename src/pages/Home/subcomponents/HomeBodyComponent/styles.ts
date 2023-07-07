import styled from 'styled-components/native';

export const Container = styled.View`
  height: 70%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const CardsList = styled.FlatList``;

export const FloatingSection = styled.View`
  position: absolute;
  top: -20%;
  flex: 1;
`;

export const ListSection = styled.View`
  height: 70%;
  width: 90%;
  margin-top: 30%;
  align-items: center;
`;

export const OpacityTextInnerContainer = styled.View`
  align-items: flex-end;
  width: 90%;
  margin-bottom: 10px;
`;

export const OpacityText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.opacity_text};
`;

export const Loader = styled.View``;

export const ActivityIndicator = styled.ActivityIndicator`
  align-items: center;
`;
