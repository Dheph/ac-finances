import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getTransactionsService, postTransactionService } from '.';
import httpClient from '../http-client';

const mock = new MockAdapter(httpClient);

jest.mock('../generalInfo', () => ({
  updateIncomeService: jest.fn(),
  updateOutcomeService: jest.fn(),
  updateTotalService: jest.fn(),
}));

describe('getTransactionsService', () => {
  it('return transactions array', async () => {
    const mockResponse = [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
    ];

    mock.onGet('/transactions').reply(200, mockResponse);

    const transactions = await getTransactionsService();

    expect(Array.isArray(transactions)).toBe(true);
    expect(transactions).toEqual(mockResponse);
  });
});

describe('postTransactionService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should throw an error when an error occurs', async () => {
    const data = {
      transaction_type: 'income',
      value: 100,
    };

    mock.onPost('transactions').reply(500);

    await expect(postTransactionService(data)).rejects.toThrow(
      'Ocorreu um erro durante a tentativa de cadastro'
    );
  });
});
