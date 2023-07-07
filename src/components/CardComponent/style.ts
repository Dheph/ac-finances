import styled from 'styled-components/native';

interface Props {
  color?: 'outcome' | 'income';
}

export const Container = styled.View`
  margin-bottom: 10px;
  height: 128px;
  width: 320px;
  padding: 15px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
`;

// --- header section --- //

export const HeaderSection = styled.View``;

export const TitleText = styled.Text<Props>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title_text};
`;

export const BalanceText = styled.Text<Props>`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${(props) =>
    props.color === 'outcome' ? props.theme.colors.debit : props.theme.colors.primary_800};
`;
// --- bottom section --- //

export const BottomSection = styled.View`
  flex-direction: row;
  height: 60%;
  align-items: center;
  justify-content: space-between;
`;

export const OpacityText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.opacity_text};
`;
