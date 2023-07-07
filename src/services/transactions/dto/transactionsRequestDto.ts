export interface ITransactionsRequestParamsDto {
  page?: number;
  limit?: number;
  sortBy?: 'title' | 'category' | 'value' | 'createdAt';
  orderBy?: 'title' | 'category' | 'value' | 'createdAt';
  order?: 'asc' | 'desc';
}

export interface ITransactionRequestDto {
  title: string;
  category: string;
  value: number;
  transaction_type: 'income' | 'outcome';
}
