import React, { useState } from 'react';

import { ButtonComponent } from '@components/index';
import { HomeBodyComponent } from './subcomponents/HomeBodyComponent';

import * as S from './styles';
import { cash_logo } from '@assets/index';

export function Home() {
  const [openRegistrationModal, setOpenRegistrationModal] = useState<boolean>(false);

  const handleModal = () => {
    setOpenRegistrationModal(!openRegistrationModal);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Icon source={cash_logo} />
        <ButtonComponent
          onPress={() => handleModal()}
          text="Nova transação"
          color="light_green"
          text_size={12}
          width="130px"
          height="35px"
        />
      </S.Header>

      <HomeBodyComponent openRegistrationModal={openRegistrationModal} handleModal={handleModal} />
    </S.Container>
  );
}
