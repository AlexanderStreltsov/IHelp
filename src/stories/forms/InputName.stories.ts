import type { Meta, StoryObj } from '@storybook/react';

import { InputName } from '../../ui/forms/InputName';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'UI/Form/InputName',
  component: InputName,
  tags: ['autodocs'],
  //argTypes: {
  // backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof InputName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutLabel: Story = {
  args: {
    placeholder: 'Введите имя',
    initialValue: 'Александр',
  },
};

export const EmptyName: Story = {
  args: {
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
