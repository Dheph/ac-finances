import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const formattedDate = (date: Date, date2?: Date): string => {
  if (date2) {
    if (date.getMonth() === date2.getMonth()) {
      const month = date.toLocaleString('pt-BR', { month: 'long' });
      const initialDay = date.getDate().toString().padStart(2, '0');
      const lastDay = date2.getDate().toString().padStart(2, '0');
      return `${initialDay} a ${lastDay} de ${month}`;
    } else {
      const initialMonth = date.toLocaleString('pt-BR', { month: 'long' });
      const lastMonth = date2.toLocaleString('pt-BR', { month: 'long' });
      return `${initialMonth} a ${lastMonth}`;
    }
  }

  const result = format(date, "dd 'de' MMMM", { locale: ptBR });

  return result;
};

const formattedDateDefault = (date: Date): string => {
  const result = format(date, 'dd/MM/yyyy');

  return result;
};

export { formattedDate, formattedDateDefault };
