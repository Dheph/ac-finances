import React, { useState } from 'react';

import { InputComponent } from '../InputComponent';
import { ButtonComponent } from '../ButtonComponent';

import { postTransactionService } from '@services/transactions';
import { ITransactionRequestDto } from '@services/transactions/dto/transactionsRequestDto';

import { Formik } from 'formik';
import { transactionsValidationSchema } from './transactionsValidationForm';

import * as S from './styles';
import { useAnimationState } from 'moti';
import { close_button, green_arrow, red_arrow } from '@assets/index';

interface Props {
  onCloseModal: () => void;
  refresh: () => void;
}

const TransactionsRegistrationModalComponent = ({ onCloseModal, refresh }: Props) => {
  const [selectedOption, setSelectedOption] = useState<'income' | 'outcome'>('income');

  const proportions = { max: { scale: 1.1 }, min: { scale: 1 } };

  const registrationAnimation = useAnimationState(proportions);

  const submit = async (values: ITransactionRequestDto) => {
    values.transaction_type = selectedOption;
    handleFormatPrice(values.category);
    await postTransactionService(values);
    onCloseModal();
    refresh();
  };

  const handleFormatPrice = (text: string) => {
    const formattedText = text.replace(/,/g, '.');
    return formattedText;
  };

  return (
    <>
      <Formik
        initialValues={{
          title: '',
          category: '',
          value: '',
          transaction_type: 'income',
        }}
        onSubmit={(values) => submit(values)}
        validationSchema={transactionsValidationSchema}>
        {({ handleChange, handleSubmit, values, errors, isValid, touched }) => (
          <S.Container>
            <S.ModalContent>
              <S.Header>
                <S.TitleText> Cadastrar transação </S.TitleText>
                <S.Press
                  onPress={() => {
                    onCloseModal();
                  }}>
                  <S.Icon source={close_button} />
                </S.Press>
              </S.Header>

              <S.Body>
                <InputComponent
                  placeholder="Nome"
                  value={values.title}
                  onFocus={() => registrationAnimation.transitionTo('max')}
                  onBlur={() => registrationAnimation.transitionTo('min')}
                  onChangeText={handleChange('title')}
                  testID="input-title"
                />
                {errors.title && touched.title && <S.ErrorText> {errors.title}</S.ErrorText>}
                <InputComponent
                  placeholder="Preço"
                  keyboardType="decimal-pad"
                  value={values.value}
                  onFocus={() => registrationAnimation.transitionTo('max')}
                  onBlur={() => registrationAnimation.transitionTo('min')}
                  onChangeText={handleChange('value')}
                  testID="input-value"
                />

                {errors.value && touched.value && <S.ErrorText> {errors.value}</S.ErrorText>}
                <S.TransactionTypeContainer>
                  <S.TransactionButton
                    onPress={() => setSelectedOption('income')}
                    selected={selectedOption === 'income' ? true : false}
                    testID="input-option-income">
                    <S.Icon source={green_arrow} />
                    <S.TransactionButtonText selected={selectedOption === 'income' ? true : false}>
                      Income
                    </S.TransactionButtonText>
                  </S.TransactionButton>
                  <S.TransactionButton
                    onPress={() => setSelectedOption('outcome')}
                    selected={selectedOption === 'outcome' ? true : false}
                    testID="input-option-outcome">
                    <S.Icon source={red_arrow} />
                    <S.TransactionButtonText selected={selectedOption === 'outcome' ? true : false}>
                      Outcome
                    </S.TransactionButtonText>
                  </S.TransactionButton>
                </S.TransactionTypeContainer>

                <InputComponent
                  placeholder="Categoria"
                  value={values.category}
                  onFocus={() => registrationAnimation.transitionTo('max')}
                  onBlur={() => registrationAnimation.transitionTo('min')}
                  onChangeText={handleChange('category')}
                  testID="input-category"
                />

                {errors.category && touched.category && (
                  <S.ErrorText> {errors.category}</S.ErrorText>
                )}

                <ButtonComponent text="Cadastrar" height="60px" onPress={() => handleSubmit()} />
              </S.Body>
            </S.ModalContent>
          </S.Container>
        )}
      </Formik>
    </>
  );
};

export { TransactionsRegistrationModalComponent };
