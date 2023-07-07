import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 10px;
  height: 200px;
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
`;

// --- header section --- //

export const HeaderSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 30%;
`;

export const TitleText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const Icon = styled.Image`
  width: 40px;
  height: 40px;
`;

// --- bottom section --- //

export const BottomSection = styled.View`
  justify-content: center;
  height: 70%;
`;

export const BalanceText = styled.Text`
  font-size: 30px;
  margin-bottom: 5px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title_text};
`;

export const DescriptionText = styled.Text`
  font-size: 12px;
  margin-left: 5px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.opacity_text};
`;
