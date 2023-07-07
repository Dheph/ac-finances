/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';

import { CardComponent, HorizontalScrollingCard } from '@components/index';
import { HomeModalControlComponent } from '../HomeModalControlComponent';

import { IGeneralInfoResponseDto } from '@services/generalInfo/dto/generalInfoResponseDto';
import { getGeneralInfoService } from '@services/generalInfo';
import { ITransactionsResponseDto } from '@services/transactions/dto/transactionsResponseDto';
import { getTransactionsService } from '@services/transactions';

import * as S from './styles';

interface Props {
  openRegistrationModal: boolean;
  handleModal: () => void;
}

const HomeBodyComponent = ({ openRegistrationModal, handleModal }: Props) => {
  const [generalInfo, setGeneralInfo] = useState<IGeneralInfoResponseDto[]>();
  const [transactions, setTransactions] = useState<ITransactionsResponseDto[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [load, setLoad] = useState<boolean>(false);
  const [itensLength, setItensLength] = useState<number>(0);

  const renderLoader = () => {
    return load && !reachedEnd ? (
      <S.Loader>
        <S.ActivityIndicator size="large" color="#aaa" />
      </S.Loader>
    ) : null;
  };

  const getGeneralInfoData = async () => {
    const response = await getGeneralInfoService();
    setGeneralInfo(response);
  };

  const loadMoreInfo = useCallback(async () => {
    if (load || reachedEnd) return;
    setLoad(true);
    const response = await getTransactionsService({
      page: currentPage,
      limit: 2,
      order: 'desc',
      orderBy: 'createdAt',
    });

    setTransactions((prevTransactions) => {
      const newTransactions = response.filter((newTransaction) => {
        return !prevTransactions.some(
          (prevTransaction) => prevTransaction.id === newTransaction.id
        );
      });
      return [...prevTransactions, ...newTransactions];
    });
    setItensLength(transactions.length);
    setCurrentPage(currentPage + 1);

    if (response.length === 0) {
      setReachedEnd(true);
    }
    setLoad(false);
  }, [currentPage, load, reachedEnd, transactions.length]);

  const getTransactions = useCallback(async () => {
    setLoad(true);
    setCurrentPage(1);
    const response = await getTransactionsService({
      page: currentPage,
      limit: 3,
      order: 'desc',
      orderBy: 'createdAt',
    });
    setTransactions(response);
    setItensLength(response.length);
    setLoad(false);
  }, [currentPage]);

  const refresh = async () => {
    getGeneralInfoData();
    getTransactions();
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <>
      <S.Container>
        <S.FloatingSection>
          <S.CardsList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={generalInfo}
            renderItem={({ item }) => (
              <HorizontalScrollingCard
                type={item.type}
                value={item.value}
                last_date={item.updatedAt}
                creation_date={item.createdAt}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </S.FloatingSection>

        <S.ListSection>
          <S.OpacityTextInnerContainer>
            <S.OpacityText> {itensLength} Itens </S.OpacityText>
          </S.OpacityTextInnerContainer>

          <S.CardsList
            showsHorizontalScrollIndicator={false}
            data={transactions}
            renderItem={({ item }) => (
              <CardComponent
                transaction_type={item.transaction_type}
                value={item.value}
                category={item.category}
                title={item.title}
                date={item.createdAt}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={loadMoreInfo}
            onEndReachedThreshold={0.1}
            ListFooterComponent={renderLoader}
          />
        </S.ListSection>
      </S.Container>

      <HomeModalControlComponent
        handleModal={handleModal}
        refresh={refresh}
        openRegistrationModal={openRegistrationModal}
      />
    </>
  );
};

export { HomeBodyComponent };
