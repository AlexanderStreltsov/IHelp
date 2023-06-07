import { Story } from '@storybook/react';
import { Calendar, type ICalendar } from '../ui/calendar';

export default {
  title: 'UI/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    passSelectedDate: {
      type: 'function',
      description:
        'Функция установки выбранного значения даты в используемом компоненте',
      control: { type: '' },
    },
    incomingDate: {
      type: 'Date',
      description: 'Значение предустановленной даты',
      defaultValue: new Date(),
    },
    shouldCloseOnSelect: {
      type: 'boolean',
      description: 'Закрывать форму выбора даты после установки значения',
      defaultValue: false,
    },
    inline: {
      type: 'boolean',
      description: 'Показывать только форму выбора даты (без инпута)',
      defaultValue: true,
    },
  },
};

const Template: Story<ICalendar> = (args) => <Calendar {...args} />;

export const CalendarDate = Template.bind({});

CalendarDate.args = {
  passSelectedDate: (value) => console.log(value),
};
