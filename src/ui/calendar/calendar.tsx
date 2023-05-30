import { FC, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import MaskedTextInput from 'react-text-mask';
import ru from 'date-fns/locale/ru';

import './calendar.scss';

registerLocale('ru', ru);

export interface ICalendar {
  setDate: (date: Date | null) => void;
  inline?: boolean;
  isTime?: boolean;
}

export const Calendar: FC<ICalendar> = ({
  setDate,
  inline = true,
  isTime = false,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <div className="custom-wrapper">
      {isTime ? 'Время' : 'Дата'}
      <DatePicker
        locale="ru"
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          setDate(date);
        }}
        dateFormatCalendar="LLLL"
        dateFormat={isTime ? 'HH:mm' : 'd MMMM yyyy'}
        customInput={
          isTime ? (
            <MaskedTextInput type="text" mask={[/\d/, /\d/, ':', /\d/, /\d/]} />
          ) : null
        }
        showTimeSelect={isTime}
        showTimeSelectOnly={isTime}
        timeIntervals={5}
        timeCaption=""
        inline={inline}
      />
    </div>
  );
};
