export interface ITransactionsResponseDto {
  id: string;
  createdAt: Date;
  title: string;
  category: string;
  value: number;
  transaction_type: 'income' | 'outcome';
}
