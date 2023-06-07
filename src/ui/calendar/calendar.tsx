import { FC, useState, useEffect, useRef } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { Button } from '../button/button';

import './calendar.scss';

registerLocale('ru', ru);

export interface ICalendar {
  passSelectedDate: (val: Date | null) => void;
  incomingDate?: Date | null;
  shouldCloseOnSelect?: boolean;
  inline?: boolean;
}

export const Calendar: FC<ICalendar> = ({
  passSelectedDate,
  incomingDate,
  shouldCloseOnSelect = false,
  inline = true,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>();
  const datePickerRef = useRef<DatePicker<never, undefined> | null>();

  useEffect(() => setSelectedDate(incomingDate || new Date()), [incomingDate]);

  return (
    <div className="custom-wrapper">
      Дата
      <DatePicker
        locale="ru"
        selected={selectedDate}
        onChange={(val) => {
          setSelectedDate(val);
          passSelectedDate(val);
        }}
        dateFormatCalendar="LLLL"
        dateFormat="d MMMM yyyy"
        shouldCloseOnSelect={shouldCloseOnSelect}
        inline={inline}
        ref={(pickerRef) => {
          datePickerRef.current = pickerRef;
        }}
        renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
          <div>
            <h2 className="popper-header">Дата</h2>
            <button
              aria-label="Previous Month"
              className="react-datepicker__navigation react-datepicker__navigation--previous"
              onClick={decreaseMonth}
            >
              <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">
                {'<'}
              </span>
            </button>
            <span className="react-datepicker__current-month">
              {monthDate.toLocaleString('ru', { month: 'long' })}
            </span>
            <button
              aria-label="Next Month"
              className="react-datepicker__navigation react-datepicker__navigation--next"
              onClick={increaseMonth}
            >
              <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">
                {'>'}
              </span>
            </button>
          </div>
        )}
      >
        <Button
          onClick={() => {
            if (datePickerRef.current) datePickerRef.current.setOpen(false);
          }}
          className="popper-button"
        >
          Применить
        </Button>
      </DatePicker>
    </div>
  );
};
