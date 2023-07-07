import httpClient from '../http-client';

import { IGeneralInfoResponseDto } from './dto/generalInfoResponseDto';

const getGeneralInfoService = async (): Promise<IGeneralInfoResponseDto[]> => {
  const response = await httpClient.get('general_info');

  return response.data;
};

const updateIncomeService = async (income_value): Promise<void> => {
  const response = await httpClient.get('general_info/1');

  const value = parseFloat(response.data.value) + parseFloat(income_value);
  await httpClient.put(`general_info/1`, { value, updatedAt: new Date().toISOString() });
};

const updateOutcomeService = async (outcome_value): Promise<void> => {
  const response = await httpClient.get('general_info/2');

  const value = parseFloat(response.data.value) + parseFloat(outcome_value);
  await httpClient.put(`general_info/2`, { value, updatedAt: new Date().toISOString() });
};

const updateTotalService = async (): Promise<void> => {
  const income = await httpClient.get('general_info/1');
  const outcome = await httpClient.get('general_info/2');

  const value = parseFloat(income.data.value) - parseFloat(outcome.data.value);
  await httpClient.put(`general_info/3`, { value, updatedAt: new Date().toISOString() });
};

export { getGeneralInfoService, updateIncomeService, updateOutcomeService, updateTotalService };
