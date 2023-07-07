const formatCurrency = (value: number | string): string => {
  const formattedValue = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
  return formattedValue;
};

export { formatCurrency };
