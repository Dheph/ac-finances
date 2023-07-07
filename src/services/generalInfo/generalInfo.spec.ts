import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getGeneralInfoService } from '.';
import httpClient from '../http-client';

const mockAxios = new MockAdapter(httpClient);

describe('getGeneralInfoService', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it('should return general info data', async () => {
    const response = [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
    ];

    mockAxios.onGet('general_info').reply(200, response);

    const result = await getGeneralInfoService();

    expect(result).toEqual(response);
  });
});
