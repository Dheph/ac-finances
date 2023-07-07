import React from 'react';

import { formatCurrency } from '@utils/format_currency';
import { formattedDateDefault } from '@utils/date_format';

import * as S from './style';

interface Props {
  transaction_type: 'outcome' | 'income';
  value: string | number;
  title: string;
  date: string;
  category: string;
}

const CardComponent = ({ transaction_type, value, title, date, category, ...rest }: Props) => {
  return (
    <S.Container>
      <S.HeaderSection>
        <S.TitleText> {title} </S.TitleText>
        <S.BalanceText color={transaction_type}>
          {transaction_type === 'outcome'
            ? `- R$ ${formatCurrency(value)}`
            : `R$ ${formatCurrency(value)}`}
        </S.BalanceText>
      </S.HeaderSection>
      <S.BottomSection>
        <S.OpacityText> {category} </S.OpacityText>
        <S.OpacityText> {formattedDateDefault(new Date(date))} </S.OpacityText>
      </S.BottomSection>
    </S.Container>
  );
};

export { CardComponent };
