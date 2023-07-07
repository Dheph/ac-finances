import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary_200};
  align-items: center;
`;

export const Header = styled.View`
  padding-top: 15%;
  height: 35%;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary_200};
`;

export const Icon = styled.Image``;
