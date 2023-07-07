import React from 'react';

import { TransactionsRegistrationModalComponent } from '@components/index';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import * as S from './styles';

interface Props {
  handleModal: () => void;
  refresh: () => void;
  openRegistrationModal: boolean;
}

const HomeModalControlComponent = ({ handleModal, refresh, openRegistrationModal }: Props) => {
  return (
    <>
      {openRegistrationModal && <S.Overlay />}
      <KeyboardAwareScrollView>
        <S.Modal visible={openRegistrationModal} transparent onRequestClose={handleModal}>
          <TransactionsRegistrationModalComponent onCloseModal={handleModal} refresh={refresh} />
        </S.Modal>
      </KeyboardAwareScrollView>
    </>
  );
};

export { HomeModalControlComponent };
