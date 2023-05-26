/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';
import { Request } from '../components/request/Request';
import { UserRole } from '../types/user-role';

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

export const userOne: Story = {
  args: {
    id: 1,
    title: 'SomeTitle',
    category: {
      id: 2,
      name: '',
    },
    date: new Date(),
    description: 'description',
    completed: true,
    recipient: {
      id: 1,
      fullname: 'Ivan Ivanovich',
      role: UserRole.Recipient,
      vk: 'somevk',
      photo: 'somephoto',
      phone: '12234434435',
      address: 'someaddress',
      coordinates: [22, 22],
      approved: null,
      checked: null,
      keys: null,
      adminStatus: 3,
      scores: null,
      completed: null,
    },
    volunteer: null,
    address: 'address',
    coordinates: [22, 22],
    chatId: null,
  },
};

export const userTwo: Story = {
  args: {
    id: 1,
    title: 'SomeTitle',
    category: {
      id: 2,
      name: '',
    },
    date: new Date(),
    description: 'description',
    completed: true,
    recipient: {
      id: 1,
      fullname: 'Ivan Ivanovich',
      role: UserRole.Recipient,
      vk: 'somevk',
      photo: 'somephoto',
      phone: '12234434435',
      address: 'someaddress',
      coordinates: [22, 22],
      approved: null,
      checked: null,
      keys: null,
      adminStatus: 3,
      scores: null,
      completed: null,
    },
    volunteer: null,
    address: 'address',
    coordinates: [22, 22],
    chatId: null,
  },
};
