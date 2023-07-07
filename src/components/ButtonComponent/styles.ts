import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ButtonTextProps {
  size?: number;
}

interface ButtonProps {
  width?: number | string;
  height?: number | string;
  color?: 'light_green' | 'opacity_green';
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.color === 'light_green'
      ? props.theme.colors.primary_400
      : props.theme.colors.primary_200};
  width: ${(props) => (props.width ? props.width : `${RFPercentage(40)}px`)};
  height: ${(props) => (props.height ? props.height : `auto`)};
`;

export const Text = styled.Text<ButtonTextProps>`
  text-align: center;
  font-size: ${(props) => (props.size ? props.size : `${RFPercentage(2)}px`)};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
`;
