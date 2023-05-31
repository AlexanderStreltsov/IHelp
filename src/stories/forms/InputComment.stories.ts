import type { Meta, StoryObj } from '@storybook/react';

import { InputComment } from '../../ui/forms/InputComment';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'UI/Form/InputComment',
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
    initialValue: '',
  },
};

export const CommentWithValue: Story = {
  args: {
    initialValue: 'Выгулять собаку',
  },
};
