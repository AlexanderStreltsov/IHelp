/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';
import { Request } from './Request';
import photo from '../../images/avatar.svg';

const meta = {
  title: 'Example/Request',
  component: Request,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Request>;

export default meta;
type Story = StoryObj<typeof meta>;

export const withAvatar: Story = {
  args: {
    photo: photo,
  },
};

export const noAvatar: Story = {
  args: {
    photo: '',
  },
};
