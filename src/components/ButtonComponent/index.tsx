import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type Props = TouchableOpacityProps & {
  text: string | object;
  text_size?: number;
  width?: number | string;
  height?: number | string;
  color?: 'light_green' | 'opacity_green';
};

const ButtonComponent: React.FC<Props> = ({ text, text_size, width, ...rest }) => {
  return (
    <S.Container width={width} {...rest}>
      <S.Text size={text_size}> {text} </S.Text>
    </S.Container>
  );
};

export { ButtonComponent };
