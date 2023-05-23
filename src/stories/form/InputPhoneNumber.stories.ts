import type { Meta, StoryObj } from '@storybook/react';

import { InputPhoneNumber } from './InputPhoneNumber';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Form/InputPhoneNumber',
  component: InputPhoneNumber,
  tags: ['autodocs'],
  //argTypes: {
  // backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof InputPhoneNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyPhoneNumber: Story = {
  args: {
    value: '',
  },
};

export const PhoneNumberWithValue: Story = {
  args: {
    value: '+7 (123) 456 78 90',
  },
};

export const WrongPhoneNumber: Story = {
  args: {
    value: 'Wrong Phone Number',
    errorMessage: 'Указан некорректный номер телефона',
  },
};
