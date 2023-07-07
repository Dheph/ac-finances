export interface IPutGeneralRequestDto {
  type: 'income' | 'outcome' | 'total';
  value: number;
}
