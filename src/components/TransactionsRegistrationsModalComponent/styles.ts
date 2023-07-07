import styled from 'styled-components/native';

interface IconProps {
  size?: string;
}

interface TransactionButtonProps {
  selected?: boolean;
}

export const Container = styled.View`
  justify-content: flex-end;
  height: 100%;
  width: 100%;
`;

export const ModalContent = styled.View`
  height: 55%;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 1;
`;

// --- Header Components --- //

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 15%;
  margin-bottom: 2%;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.title_text};
`;

export const Press = styled.Pressable``;

export const Icon = styled.Image<IconProps>`
  width: ${(props) => (props.size ? props.size : '40px')};
  height: ${(props) => (props.size ? props.size : '40px')};
`;

// --- Body Components --- //

export const Body = styled.View`
  height: 80%;
  width: 100%;
  align-items: center;
  margin-bottom: 5%;
`;

export const ErrorText = styled.Text<TransactionButtonProps>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.debit};
`;

// --- Body -> Transactions Sub Components --- //

export const TransactionTypeContainer = styled.View`
  flex-direction: row;
  margin-bottom: 2%;
`;

export const TransactionButton = styled.TouchableOpacity<TransactionButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;
  margin: 2px;
  width: 150px;
  height: 60px;
  border-radius: 10px;
  padding: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.input_background};
  background-color: ${(props) =>
    props.selected ? props.theme.colors.primary_200 : props.theme.colors.white};
`;

export const TransactionButtonText = styled.Text<TransactionButtonProps>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${(props) => (props.selected ? props.theme.colors.white : props.theme.colors.title_text)};
`;
