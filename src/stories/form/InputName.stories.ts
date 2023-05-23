import type { Meta, StoryObj } from '@storybook/react';

import { InputName } from './InputName';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Form/InputName',
  component: InputName,
  tags: ['autodocs'],
  //argTypes: {
  // backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof InputName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyName: Story = {
  args: {
    value: '',
  },
};

export const NameWithValue: Story = {
  args: {
    value: 'Aleksandr',
  },
};
