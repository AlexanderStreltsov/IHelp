import { Story } from '@storybook/react';
import { Calendar, type ICalendar } from '../../ui/calendar';

export default {
  title: 'UI/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    inline: {
      type: 'boolean',
      description:
        'Показывать только форму выбора даты или времени (без инпута)',
      defaultValue: true,
    },
    isTime: {
      description: 'Переключатель на выбор времени',
      defaultValue: false,
    },
    setDate: {
      type: 'function',
      description:
        'Функция установки выбранного значения даты или времени в используемом компоненте',
      control: { type: '' },
    },
  },
};

const Template: Story<ICalendar> = (args) => <Calendar {...args} />;

export const CalendarDate = Template.bind({});

CalendarDate.args = {
  setDate: (value) => console.log(value),
};

export const CalendarTime = Template.bind({});

CalendarTime.args = {
  setDate: (value) => console.log(value),
  inline: false,
  isTime: true,
};
