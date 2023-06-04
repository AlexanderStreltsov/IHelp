import type { Meta, StoryObj } from '@storybook/react';

import { InputName as InputString } from '../../ui/forms/InputString';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'UI/Form/InputString',
  component: InputString,
  tags: ['autodocs'],
  //argTypes: {
  // backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof InputString>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyName: Story = {
  args: {
    label: 'Name',
    placeholder: 'Введите имя',
    initialValue: '',
  },
};

export const NameWithValue: Story = {
  args: {
    label: 'Name',
    placeholder: 'Введите имя',
    initialValue: 'Александр',
  },
};
