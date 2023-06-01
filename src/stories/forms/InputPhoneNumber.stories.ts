import type { Meta, StoryObj } from '@storybook/react';

import { InputPhoneNumber } from '../../ui/forms/InputPhoneNumber';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'UI/Form/InputPhoneNumber',
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
    initialValue: '',
  },
};

export const PhoneNumberWithValue: Story = {
  args: {
    initialValue: '+7 (123) 456 78 90',
  },
};

export const WrongPhoneNumber: Story = {
  args: {
    initialValue: 'Wrong Phone Number',
    errorMessage: 'Указан некорректный номер телефона',
  },
};
