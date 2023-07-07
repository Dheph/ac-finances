import { TextInputProps } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export type Props = TextInputProps & {
  width?: string | number;
};

export const InputElement = styled.TextInput<Props>`
  padding: 15px;
  border-radius: 5px;
  border-width: 1px;
  margin-bottom: 10px;
  border-color: ${({ theme }) => theme.colors.input_background};
  background-color: ${({ theme }) => theme.colors.input_background};
  width: ${(props) => (props.width ? props.width : `${RFPercentage(40)}px`)};
`;
