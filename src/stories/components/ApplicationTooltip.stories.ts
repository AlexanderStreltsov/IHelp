import type { Meta, StoryObj } from '@storybook/react';

import { ApplicationTooltip } from '../../ui/application-tooltip/ApplicationTooltip';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'UI/ApplicationTooltip',
  component: ApplicationTooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof ApplicationTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Request: Story = {
  args: {
    application: {
      applicant: {
        name: 'Иванов Иван Иванович',
        phoneNumber: '7 (123) 456 78 90',
        avatarUrl:
          'https://thumbs.dreamstime.com/b/%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D1%80%D1%83%D0%BA%D0%B8-%D0%B2%D1%8B%D1%87%D0%B5%D1%80%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%BE%D0%B3%D0%BE-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-r-147006074.jpg',
      },
      request:
        'Пожалуйста, погуляйте с моей собакой, я не смогу ее выгуливать с 12.06 по 24.06 потому что уеду на обследование к врачу. Если есть желающие помочь в выгуле собаки, то звоните, 89041627779. Собаку зовут Айка, порода - немецкая овчарка, возраст - полтора года. Собака очень умная, послушная, добрая, спокойная.',
      counter: 3,
      isUrgent: false,
    },
  },
};

export const UrgentRequest: Story = {
  args: {
    application: {
      applicant: {
        name: 'Иванов Иван Иванович',
        phoneNumber: '7 (123) 456 78 90',
        avatarUrl:
          'https://thumbs.dreamstime.com/b/%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D1%80%D1%83%D0%BA%D0%B8-%D0%B2%D1%8B%D1%87%D0%B5%D1%80%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%BE%D0%B3%D0%BE-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-r-147006074.jpg',
      },
      request:
        'Пожалуйста, погуляйте с моей собакой, я не смогу ее выгуливать с 12.06 по 24.06 потому что уеду на обследование к врачу. Если есть желающие помочь в выгуле собаки, то звоните, 89041627779. Собаку зовут Айка, порода - немецкая овчарка, возраст - полтора года. Собака очень умная, послушная, добрая, спокойная.',
      counter: 3,
      isUrgent: true,
    },
  },
};
