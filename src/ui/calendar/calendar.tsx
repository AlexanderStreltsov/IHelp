import { FC, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import './calendar.scss';

registerLocale('ru', ru);

interface ICalendar {
  setDate: (date: Date | null) => void;
  inline?: boolean;
}

export const Calendar: FC<ICalendar> = ({ setDate, inline = true }) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <DatePicker
      locale="ru"
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        setDate(date);
      }}
      dateFormatCalendar="LLLL"
      inline={inline}
    />
  );
};
