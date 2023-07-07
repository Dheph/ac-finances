import React from 'react';

import * as S from './style';

const InputComponent = ({ width, ...rest }: S.Props) => {
  return <S.InputElement width={width} {...rest} />;
};

export { InputComponent };
