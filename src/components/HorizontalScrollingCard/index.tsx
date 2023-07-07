import React from 'react';

import { formatCurrency } from '@utils/format_currency';
import { formattedDate } from '@utils/date_format';

import * as S from './styles';
import { green_arrow, red_arrow, cash_icon } from '@assets/index';

interface Props {
  type: 'income' | 'outcome' | 'total';
  value: string | number;
  last_date: string;
  creation_date: string;
}

const HorizontalScrollingCard = ({ type, value, last_date, creation_date }: Props) => {
  const title = type === 'income' ? 'Entradas' : type === 'outcome' ? 'Saídas' : 'Total';
  const icon = type === 'income' ? green_arrow : type === 'outcome' ? red_arrow : cash_icon;

  return (
    <S.Container>
      <S.HeaderSection>
        <S.TitleText> {title} </S.TitleText>
        <S.Icon source={icon} />
      </S.HeaderSection>
      <S.BottomSection>
        <S.BalanceText> {formatCurrency(value)} </S.BalanceText>
        {type === 'total' ? (
          <S.DescriptionText>
            {formattedDate(new Date(creation_date), new Date(last_date))}
          </S.DescriptionText>
        ) : (
          <S.DescriptionText>
            Última {type === 'income' ? 'entrada' : 'saída'} dia{' '}
            {formattedDate(new Date(last_date))}
          </S.DescriptionText>
        )}
      </S.BottomSection>
    </S.Container>
  );
};

export { HorizontalScrollingCard };
