import React from 'react';
import * as yup from 'yup';

const transactionsValidationSchema = yup.object().shape({
  title: yup.string().required('Você precisa digitar um nome '),
  category: yup.string().required('Você precisa digitar a categoria'),
  value: yup.string().required('Você precisa digitar um valor'),
});

export { transactionsValidationSchema };
