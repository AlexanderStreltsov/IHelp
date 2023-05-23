import type { Meta, StoryObj } from '@storybook/react';

import { InputComment } from './InputComment';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Form/InputComment',
  component: InputComment,
  tags: ['autodocs'],
  //argTypes: {
  // backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof InputComment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyComment: Story = {
  args: {
    value: '',
  },
};

export const CommentWithValue: Story = {
  args: {
    value: 'Выгулять собаку',
  },
};
