/* eslint-disable no-console */
import { updateIncomeService, updateOutcomeService, updateTotalService } from '../generalInfo';
import httpClient from '../http-client';
import {
  ITransactionRequestDto,
  ITransactionsRequestParamsDto,
} from './dto/transactionsRequestDto';
import { ITransactionsResponseDto } from './dto/transactionsResponseDto';

const getTransactionsService = async (
  params?: ITransactionsRequestParamsDto
): Promise<ITransactionsResponseDto[]> => {
  const transactions_response = await httpClient.get('transactions', {
    params,
  });
  return transactions_response.data;
};

const postTransactionService = async (data: ITransactionRequestDto) => {
  try {
    const response = (await httpClient.post(`transactions`, data)).data;

    data.transaction_type === 'income'
      ? await updateIncomeService(data.value)
      : await updateOutcomeService(data.value);

    await updateTotalService();

    return response;
  } catch (err: unknown) {
    console.log(err);
    throw new Error('Ocorreu um erro durante a tentativa de cadastro');
  }
};

export { getTransactionsService, postTransactionService };
